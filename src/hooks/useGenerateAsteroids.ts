import { AsteroidsModel } from "@models";
import { useState, useEffect, useMemo } from "react";
import {
  getRandomIntFromInterval,
  roundToDecimal,
  successByProbability,
} from "src/utils";
import { AsteroidConfigurations } from "src/pages/Game/AsteroidCluster";

interface Configurations {
  fullTime: number;
  totalLevels: number;
}

enum AsteroidOriginSide {
  TOP = "top",
  BOTTOM = "bottom",
  RIGHT = "right",
}

export enum AsteroidState {
  IDLE = "idle",
  APPROUCHING = "approuching",
  DESTROYED = "destroyed",
  IMPACT = "impact",
  MISSED = "missed",
}

export const useGenerateAsteroids = (
  configurationsData: AsteroidConfigurations
): AsteroidsModel.AsteroidsPerLevels => {
  const [asteroids, setAsteroids] = useState({});

  const asteroidNumberPerLevel = useMemo(
    () => getAsteroidsNumberPerLevel(configurationsData.totalLevels),
    [configurationsData.totalLevels]
  );
  const asteroidsTimeGapPerLevel = useMemo(
    () =>
      getAsteroidsTimeGapPerLevel(configurationsData, asteroidNumberPerLevel),
    [configurationsData, asteroidNumberPerLevel]
  );
  const asteroidsWindowTimePerLevel = useMemo(
    () =>
      getAsteroidsWindowTimePerLevel(
        configurationsData,
        asteroidNumberPerLevel
      ),
    [configurationsData, asteroidNumberPerLevel]
  );

  useEffect(() => {
    let baseTime = 3000;

    const asteroidsData = {} as any;
    for (let level = 0; level < configurationsData.totalLevels; level++) {
      const levelAsteroids = [];
      for (
        let asteroidIndex = 0;
        asteroidIndex < asteroidNumberPerLevel[level];
        asteroidIndex++
      ) {
        const pathOriginSide = getAsteroidRandomOriginSide();
        const path = getAsteroidRandomPath(pathOriginSide);
        const pathSpeed = getAsteroidRandomPathSpeed();

        const { delay, newBaseTime } = getAsteroidRandomDelay(
          level,
          asteroidIndex,
          baseTime,
          asteroidsTimeGapPerLevel,
          asteroidsWindowTimePerLevel
        );
        baseTime = newBaseTime; // so next random delay start after the last asteroid time window

        const rotationSpeed = getAsteroidRandomRotationSpeed();
        const rockType = getAsteroidRandomRockType();

        const impactRoute = isImpactRoute(path);
        const exitAsteroid = getAsteroidExitInfo(
          path,
          pathOriginSide,
          pathSpeed
        );

        const asteroidSize = getAsteroidSize(configurationsData.planetSize);
        console.log("Size in hook: ", asteroidSize);

        const asteroid: AsteroidsModel.Asteroid = {
          id: `${level}-${asteroidIndex}`,
          path,
          delay,
          rotationSpeed,
          pathSpeed,
          rockType,
          state: AsteroidState.IDLE,
          impactRoute,
          exitAsteroid,
          asteroidSize,
        };
        levelAsteroids.push(asteroid);
      }
      asteroidsData[`level-${level}`] = levelAsteroids;
    }

    console.log(configurationsData.planetSize);

    setAsteroids(asteroidsData);
  }, [configurationsData]);

  return asteroids;
};

const getAsteroidSize = (planetSize: number): number => {
  const size = (planetSize * 0.15) / 75;
  return size;
};

const getAsteroidRandomPath = (side: string): AsteroidsModel.Path => {
  const from: AsteroidsModel.PathFrom = { left: "", top: "" };
  const to: AsteroidsModel.PathTo = { left: "", top: "" };

  let path = {} as AsteroidsModel.Path;

  switch (side) {
    case AsteroidOriginSide.TOP:
    case AsteroidOriginSide.BOTTOM:
      from.left = `${getRandomIntFromInterval(85, 100)}%`;
      to.left = "0";

      from.top = successByProbability(50) ? "0" : "100%";
      to.top = `${getRandomIntFromInterval(0, 80)}%`;

      break;
    case AsteroidOriginSide.RIGHT:
      from.left = "100%";
      to.left = "0";

      from.top = `${getRandomIntFromInterval(0, 100)}%`;
      to.top = `${getRandomIntFromInterval(0, 100)}%`;

      break;
  }
  path = {
    from,
    to,
  };
  return path;
};

const getAsteroidRandomOriginSide = (): string => {
  if (successByProbability(50)) {
    return AsteroidOriginSide.RIGHT;
  } else if (successByProbability(50)) {
    return AsteroidOriginSide.BOTTOM;
  } else {
    return AsteroidOriginSide.TOP;
  }
};

const getAsteroidRandomDelay = (
  level: number,
  asteroidIndex: number,
  baseTime: number,
  asteroidsTimeGapPerLevel: AsteroidsModel.AsteroidsNumberPerLevel,
  asteroidsWindowTimePerLevel: AsteroidsModel.AsteroidsNumberPerLevel
): AsteroidsModel.AsteroidDelay => {
  if (asteroidIndex + level != 0) {
    baseTime +=
      asteroidsTimeGapPerLevel[level] + asteroidsWindowTimePerLevel[level];
  }
  const randomTimeOnWindow = getRandomIntFromInterval(
    0,
    asteroidsWindowTimePerLevel[level]
  );

  const newBaseTime = baseTime;
  const delay = (baseTime + randomTimeOnWindow) / 1000;

  return { delay, newBaseTime };
};

const getAsteroidRandomPathSpeed = (): number => {
  const randomNumber = getRandomIntFromInterval(1, 100);
  let randomSpeed = 0;
  if (randomNumber >= 1 && randomNumber <= 5) {
    randomSpeed = getRandomIntFromInterval(20, 24);
  } else if (randomNumber > 5 && randomNumber <= 20) {
    randomSpeed = getRandomIntFromInterval(25, 29);
  } else if (randomNumber > 20 && randomNumber <= 80) {
    randomSpeed = getRandomIntFromInterval(30, 39);
  } else if (randomNumber > 60 && randomNumber <= 95) {
    randomSpeed = getRandomIntFromInterval(40, 49);
  } else if (randomNumber > 95 && randomNumber <= 100) {
    randomSpeed = getRandomIntFromInterval(50, 60);
  }

  randomSpeed /= 10;

  return randomSpeed;
};

const getAsteroidRandomRotationSpeed = (): number => {
  const rotationSpeed = getRandomIntFromInterval(10, 30) / 10;

  return rotationSpeed;
};

const getAsteroidRandomRockType = (): number => {
  const rockType = getRandomIntFromInterval(0, 8);

  return rockType;
};

const isImpactRoute = (path: AsteroidsModel.Path): boolean => {
  const topValue = parseInt(path.to.top, 10);

  const value = isNaN(topValue) ? topValue : topValue;

  return value > 80 || value < 16 ? false : true;
};

const getAsteroidExitInfo = (
  path: AsteroidsModel.Path,
  side: string,
  pathSpeed: number
): AsteroidsModel.AsteroidExit => {
  let verticalDiff = 0;
  let horizontalDiff = 100;
  let top = "";
  switch (side) {
    case AsteroidOriginSide.TOP:
    case AsteroidOriginSide.BOTTOM:
      verticalDiff = parseInt(path.to.top, 10) - parseInt(path.from.top, 10);
      top = verticalDiff / 10 + parseInt(path.to.top, 10) + "%";
      break;
    case AsteroidOriginSide.RIGHT:
      verticalDiff = parseInt(path.to.top, 10) - parseInt(path.from.top, 10);
      horizontalDiff =
        parseInt(path.to.left, 10) - parseInt(path.from.left, 10);
      top =
        verticalDiff / (parseInt(path.from.left, 10) / 10) +
        parseInt(path.to.top, 10) +
        "%";
      break;
  }

  const exitPath = {
    from: path.to,
    to: {
      left: "-10%",
      top,
    },
  };

  const diagonalLenght = Math.sqrt(
    Math.pow(horizontalDiff, 2) + Math.pow(verticalDiff, 2)
  );
  const exitDiagonalLenght = Math.sqrt(
    100 + Math.pow(verticalDiff / (parseInt(path.from.left, 10) / 10), 2)
  );
  const speed = (pathSpeed * exitDiagonalLenght) / diagonalLenght;

  const exitAsteroid = { path: exitPath, speed };
  return exitAsteroid;
};

const getAsteroidsNumberPerLevel = (
  totalLevels: number
): AsteroidsModel.AsteroidsNumberPerLevel => {
  const asteroidNumberIncrementByLevel = 2;

  const asteroidsNumberPerLevel: AsteroidsModel.AsteroidsNumberPerLevel = {};
  const baseAsteroidsNumber = 2;

  for (let i = 0; i < totalLevels; i++) {
    asteroidsNumberPerLevel[i] =
      baseAsteroidsNumber + asteroidNumberIncrementByLevel * i;
  }
  return asteroidsNumberPerLevel;
};

const getAsteroidsTimeGapPerLevel = (
  configurationsData: Configurations,
  asteroidsPerLevel: AsteroidsModel.AsteroidsNumberPerLevel
): AsteroidsModel.AsteroidsTimeGapPerLevel => {
  const fullTime = configurationsData.fullTime;
  const totalLevels = configurationsData.totalLevels;

  const asteroidsTimeGapBufferPerLevel: any = {};
  for (let i = 0; i < totalLevels; i++) {
    const timePerLevel = fullTime / totalLevels;
    const asteroidsTimeGapBufferTotal = timePerLevel * 0.1;

    asteroidsTimeGapBufferPerLevel[i] = roundToDecimal(
      asteroidsTimeGapBufferTotal / asteroidsPerLevel[i],
      2
    );
  }
  return asteroidsTimeGapBufferPerLevel;
};

const getAsteroidsWindowTimePerLevel = (
  configurationsData: Configurations,
  asteroidsPerLevel: AsteroidsModel.AsteroidsNumberPerLevel
): AsteroidsModel.AsteroidsWindowTimePerLevel => {
  const fullTime = configurationsData.fullTime;
  const totalLevels = configurationsData.totalLevels;

  const asteroidsWindowTimePerLevel: any = {};
  const asteroidsTimeGapPerLevel = getAsteroidsTimeGapPerLevel(
    configurationsData,
    asteroidsPerLevel
  );

  for (let level = 0; level < totalLevels; level++) {
    const timePerLevel = fullTime / totalLevels;
    asteroidsWindowTimePerLevel[level] = roundToDecimal(
      timePerLevel / asteroidsPerLevel[level] - asteroidsTimeGapPerLevel[level],
      2
    );
  }

  console.log("RECALCULATIONS");

  return asteroidsWindowTimePerLevel;
};
