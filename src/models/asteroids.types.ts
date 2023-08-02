export interface Asteroid {
  id: string;
  delay: number;
  path: Path;
  rotationSpeed: number;
  pathSpeed: number;
  rockType: number;
  state: string;
  impactRoute: boolean;
  exitAsteroid: AsteroidExit;
  interceptLocation?: any;
  asteroidSize: number;
}

export interface AsteroidsPerLevels {
  [key: string]: Asteroid[];
}

export interface Path {
  from: {
    left: string;
    top: string;
  };
  to: {
    left: string;
    top: string;
  };
}
export interface ValuePerIndex {
  [key: number]: number;
}

export type AsteroidsNumberPerLevel = ValuePerIndex;
export type AsteroidsTimeGapPerLevel = ValuePerIndex;
export type AsteroidsWindowTimePerLevel = ValuePerIndex;
export type AsteroidExit = { path: Path; speed: number };
export type AsteroidDelay = { delay: Asteroid["delay"]; newBaseTime: number };

export type PathFrom = Path["from"];
export type PathTo = Path["to"];
