import React, { useEffect, useState } from "react";
import { Container } from "./Asteroids.styles";
// Images
import diffuse from "../../../images/asteroids/diffuse.png";
import filter from "../../../images/asteroids/filter5.png";
// Animation
import { motion } from "framer-motion";
import {
  getRandomIntFromInterval,
  roundToDecimal,
  successByProbability,
} from "../../../helpers/shared";
// model
import { AsteroidsModel } from "@models";
import { asteroidsMock } from "./asteroids.mock";
import { AsteroidDelay } from "src/models/asteroids";
import {
  getAsteroidNumberPerLevel,
  getAsteroidsTimeGapPerLevel,
  getAsteroidsWindowTimePerLevel,
  getRandomPath,
  getAsteroidDelay,
  getRandomRotation,
} from "src/helpers/asteroids";
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
    const asteroidsNumberPerLevel = getAsteroidNumberPerLevel(
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

        const rotation = getRandomRotation();

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
          <motion.div
            className={`unit ${asteroid.rotation}`}
            initial={{
              left: asteroid.path.from.left,
              top: asteroid.path.from.top,
              bottom: asteroid.path.from.bottom,
            }}
            animate={{
              left: asteroid.path.to.left,
              top: asteroid.path.to.top,
              bottom: asteroid.path.to.bottom,
              transition: {
                duration: 3,
                ease: "linear",
                delay: asteroid.delay,
              },
            }}
            key={asteroid.id}
            onAnimationComplete={() => {}}
          ></motion.div>
        );
      })}
    </Container>
  );
};

export default Asteroids;
