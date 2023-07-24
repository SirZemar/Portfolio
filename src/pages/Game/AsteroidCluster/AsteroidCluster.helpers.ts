import { AsteroidsModel } from "@models";

import {
  getRandomIntFromInterval,
  successByProbability,
  roundToDecimal,
} from "src/utils";

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

interface Configurations {
  fullTime: number;
  totalLevels: number;
}

export const getAsteroidRandomPath = (): AsteroidsModel.Path => {
  const from: AsteroidsModel.PathFrom = { left: "", top: "", bottom: "" };
  const to: AsteroidsModel.PathTo = { left: "", top: "", bottom: "" };
  const side = getAsteroidRandomOriginSide();

  let path = {} as AsteroidsModel.Path;

  switch (side) {
    case AsteroidOriginSide.TOP:
      from.left = `${getRandomIntFromInterval(85, 100)}%`;
      from.bottom = "100%";
      from.top = "Auto";

      to.left = "0";
      to.bottom = `${getRandomIntFromInterval(0, 80)}%`;

      break;
    case AsteroidOriginSide.BOTTOM:
      from.left = `${getRandomIntFromInterval(85, 100)}%`;
      from.top = "100%";
      from.bottom = "Auto";

      to.left = "0";
      to.top = `${getRandomIntFromInterval(0, 80)}%`;

      break;
    case AsteroidOriginSide.RIGHT:
      from.left = "100%";
      to.left = "0";

      const verticalSide = successByProbability(50)
        ? AsteroidOriginSide.TOP
        : AsteroidOriginSide.BOTTOM;

      const verticalRandomStart = getRandomIntFromInterval(0, 100);
      const verticalRandomEnd = getRandomIntFromInterval(0, 100);

      from.bottom =
        verticalSide === AsteroidOriginSide.BOTTOM
          ? `${verticalRandomStart}%`
          : "Auto";
      from.top =
        verticalSide === AsteroidOriginSide.TOP
          ? `${verticalRandomStart}%`
          : "Auto";

      to.bottom =
        verticalSide === AsteroidOriginSide.BOTTOM
          ? `${verticalRandomEnd}%`
          : "Auto";
      to.top =
        verticalSide === AsteroidOriginSide.TOP
          ? `${verticalRandomEnd}%`
          : "Auto";

      break;
  }
  path = {
    from,
    to,
  };
  return path;
};

export const getAsteroidRandomOriginSide = (): string => {
  if (successByProbability(50)) {
    return AsteroidOriginSide.RIGHT;
  } else if (successByProbability(50)) {
    return AsteroidOriginSide.BOTTOM;
  } else {
    return AsteroidOriginSide.TOP;
  }
};

export const getAsteroidsNumberPerLevel = (
  totalLevels: number
): AsteroidsModel.AsteroidsNumberPerLevel => {
  const asteroidNumberIncrementByLevel = 2;

  const asteroidsPerLevel: AsteroidsModel.AsteroidsNumberPerLevel = {};
  const baseAsteroidsNumber = 2;

  for (let i = 0; i < totalLevels; i++) {
    asteroidsPerLevel[i] =
      baseAsteroidsNumber + asteroidNumberIncrementByLevel * i;
  }
  return asteroidsPerLevel;
};

export const getAsteroidsTimeGapPerLevel = (
  configurations: Configurations,
  asteroidsPerLevel: AsteroidsModel.AsteroidsNumberPerLevel
): AsteroidsModel.AsteroidsTimeGapPerLevel => {
  const fullTime = configurations.fullTime;
  const totalLevels = configurations.totalLevels;

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

export const getAsteroidsWindowTimePerLevel = (
  configurations: Configurations,
  asteroidsPerLevel: AsteroidsModel.AsteroidsNumberPerLevel
): AsteroidsModel.AsteroidsWindowTimePerLevel => {
  const fullTime = configurations.fullTime;
  const totalLevels = configurations.totalLevels;

  const asteroidsWindowTimePerLevel: any = {};
  const asteroidsTimeGapPerLevel = getAsteroidsTimeGapPerLevel(
    configurations,
    asteroidsPerLevel
  );

  for (let level = 0; level < totalLevels; level++) {
    const timePerLevel = fullTime / totalLevels;
    asteroidsWindowTimePerLevel[level] = roundToDecimal(
      timePerLevel / asteroidsPerLevel[level] - asteroidsTimeGapPerLevel[level],
      2
    );
  }
  return asteroidsWindowTimePerLevel;
};

export const getAsteroidRandomDelay = (
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

export const getAsteroidRandomPathSpeed = (): number => {
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

export const getAsteroidRandomRotationSpeed = (): number => {
  const rotationSpeed = getRandomIntFromInterval(10, 30) / 10;

  return rotationSpeed;
};

export const getAsteroidRandomRockType = (): number => {
  const rockType = getRandomIntFromInterval(0, 8);

  return rockType;
};

export const isImpactRoute = (path: AsteroidsModel.Path): boolean => {
  const bottomValue = parseInt(path.to.bottom, 10);
  const topValue = parseInt(path.to.top, 10);

  const value = isNaN(bottomValue) ? topValue : bottomValue;

  return value > 84 || value < 5 ? false : true;
};

export const getAsteroids = (
  configurations: Configurations,
  asteroidsTimeGapPerLevel: AsteroidsModel.AsteroidsNumberPerLevel,
  asteroidsWindowTimePerLevel: AsteroidsModel.AsteroidsNumberPerLevel,
  asteroidsNumberPerLevel: AsteroidsModel.AsteroidsNumberPerLevel
) => {
  let baseTime = 0;
  const asteroids = [] as AsteroidsModel.Asteroid[];

  for (let level = 0; level < configurations.totalLevels; level++) {
    for (
      let asteroidIndex = 0;
      asteroidIndex < asteroidsNumberPerLevel[level];
      asteroidIndex++
    ) {
      const path = getAsteroidRandomPath();
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

      const asteroid: AsteroidsModel.Asteroid = {
        id: `${level}-${asteroidIndex}`,
        path,
        delay,
        rotationSpeed,
        pathSpeed,
        rockType,
        state: AsteroidState.IDLE,
        impactRoute,
      };
      asteroids.push(asteroid);
    }
  }

  return asteroids;
};
