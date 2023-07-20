import { AsteroidsModel } from "@models";
import { AsteroidDelay } from "src/models/asteroids";
import {
  getRandomIntFromInterval,
  successByProbability,
  roundToDecimal,
} from "./shared";

enum Side {
  TOP = "top",
  BOTTOM = "bottom",
  RIGHT = "right",
}

interface Configurations {
  fullTime: number;
  totalLevels: number;
}

export const getRandomPath = (): AsteroidsModel.Path => {
  const from: AsteroidsModel.PathFrom = { left: "", top: "", bottom: "" };
  const to: AsteroidsModel.PathTo = { left: "", top: "", bottom: "" };
  const side = randomAsteroidSide();

  let path = {} as AsteroidsModel.Path;

  switch (side) {
    case Side.TOP:
      from.left = `${getRandomIntFromInterval(85, 100)}%`;
      from.bottom = "100%";
      from.top = "Auto";

      to.left = "0";
      to.bottom = `${getRandomIntFromInterval(0, 80)}%`;

      break;
    case Side.BOTTOM:
      from.left = `${getRandomIntFromInterval(85, 100)}%`;
      from.top = "100%";
      from.bottom = "Auto";

      to.left = "0";
      to.top = `${getRandomIntFromInterval(0, 80)}%`;

      break;
    case Side.RIGHT:
      from.left = "100%";
      to.left = "0";

      const verticalSide = successByProbability(50) ? Side.TOP : Side.BOTTOM;

      const verticalRandomStart = getRandomIntFromInterval(0, 100);
      const verticalRandomEnd = getRandomIntFromInterval(0, 100);

      from.bottom =
        verticalSide === Side.BOTTOM ? `${verticalRandomStart}%` : "Auto";
      from.top = verticalSide === Side.TOP ? `${verticalRandomStart}%` : "Auto";

      to.bottom =
        verticalSide === Side.BOTTOM ? `${verticalRandomEnd}%` : "Auto";
      to.top = verticalSide === Side.TOP ? `${verticalRandomEnd}%` : "Auto";

      break;
  }
  path = {
    from,
    to,
  };
  return path;
};

export const randomAsteroidSide = (): string => {
  if (successByProbability(50)) {
    return Side.RIGHT;
  } else if (successByProbability(50)) {
    return Side.BOTTOM;
  } else {
    return Side.TOP;
  }
};

export const getAsteroidNumberPerLevel = (
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

export const getAsteroidDelay = (
  level: number,
  asteroidIndex: number,
  baseTime: number,
  asteroidsTimeGapPerLevel: AsteroidsModel.AsteroidsNumberPerLevel,
  asteroidsWindowTimePerLevel: AsteroidsModel.AsteroidsNumberPerLevel
): AsteroidDelay => {
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

export const getRandomRotation = (): string => {
  const rotationNumber = getRandomIntFromInterval(1, 3);

  return `rotate${rotationNumber}`;
};
