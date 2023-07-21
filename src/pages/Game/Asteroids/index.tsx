import React, { useEffect, useState } from "react";
import { Container } from "./Asteroids.styles";
// Images
import diffuse from "../../../images/asteroids/diffuse.png";
import filter from "../../../images/asteroids/filter5.png";
// Models
import { AsteroidsModel } from "@models";
// Helpers
import {
  getAsteroidsNumberPerLevel,
  getAsteroidsTimeGapPerLevel,
  getAsteroidsWindowTimePerLevel,
  getRandomPath,
  getAsteroidDelay,
  getAsteroidRandomRotation,
} from "./Asteroids.helpers";
import AsteroidMotion from "./Asteroids.motion";

interface Props {
  timer: number;
  gameIsOver: boolean;
  configurations: Configurations;
}

interface Configurations {
  fullTime: number;
  totalLevels: number;
}

const Asteroids: React.FC<Props> = ({ timer, gameIsOver, configurations }) => {
  const [asteroids, setAsteroids] = useState<AsteroidsModel.Asteroid[]>([]);

  useEffect(() => {
    const asteroidsNumberPerLevel = getAsteroidsNumberPerLevel(
      configurations.totalLevels
    );
    const asteroidsTimeGapPerLevel = getAsteroidsTimeGapPerLevel(
      configurations,
      asteroidsNumberPerLevel
    );
    const asteroidsWindowTimePerLevel = getAsteroidsWindowTimePerLevel(
      configurations,
      asteroidsNumberPerLevel
    );
    const asteroids = [] as AsteroidsModel.Asteroid[];

    let baseTime = 0;

    for (let level = 0; level < configurations.totalLevels; level++) {
      for (
        let asteroidIndex = 0;
        asteroidIndex < asteroidsNumberPerLevel[level];
        asteroidIndex++
      ) {
        const path = getRandomPath();

        const { delay, newBaseTime } = getAsteroidDelay(
          level,
          asteroidIndex,
          baseTime,
          asteroidsTimeGapPerLevel,
          asteroidsWindowTimePerLevel
        );

        baseTime = newBaseTime;

        const rotation = getAsteroidRandomRotation();

        const asteroid: AsteroidsModel.Asteroid = {
          id: `${level}-${asteroidIndex}`,
          path,
          delay,
          rotation,
        };
        asteroids.push(asteroid);
      }
    }
    setAsteroids(asteroids);
  }, []);

  return (
    <Container diffuse={diffuse} filter={filter}>
      {asteroids.map((asteroid) => {
        return (
          <AsteroidMotion
            key={asteroid.id}
            asteroid={asteroid}
          ></AsteroidMotion>
        );
      })}
    </Container>
  );
};

export default Asteroids;
