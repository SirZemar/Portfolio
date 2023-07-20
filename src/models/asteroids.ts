export interface Asteroid {
  id: string;
  delay: number;
  path: Path;
  rotation: string;
}

export interface Path {
  from: {
    left: string;
    top: string;
    bottom: string;
  };
  to: {
    left: string;
    top: string;
    bottom: string;
  };
}

export interface ValuePerIndex {
  [key: number]: number;
}

export type AsteroidsNumberPerLevel = ValuePerIndex;
export type AsteroidsTimeGapPerLevel = ValuePerIndex;
export type AsteroidsWindowTimePerLevel = ValuePerIndex;
export type AsteroidDelay = { delay: Asteroid["delay"]; newBaseTime: number };

export type PathFrom = Path["from"];
export type PathTo = Path["to"];
