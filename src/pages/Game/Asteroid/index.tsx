import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AsteroidsModel } from "@models";

import { asteroidType, targetLock } from "../../../images";

import { AsteroidHitbox, AsteroidMotion } from "./Asteroid.motion.styles";
import { AsteroidState } from "../AsteroidCluster/AsteroidCluster.helpers";

interface Props {
  asteroid: AsteroidsModel.Asteroid;
  gamePlaying: boolean;
}

const asteroidVariants = {
  initial: (asteroid: AsteroidsModel.Asteroid) => ({
    backgroundImage: `url(${asteroidType})`,
    backgroundPosition: `calc(75px * 0) calc(-75px * ${asteroid.rockType})`,
    left: asteroid.path.from.left,
    top: asteroid.path.from.top,
    bottom: asteroid.path.from.bottom,
    opacity: 0,
  }),
  moveAsteroid: (asteroid: AsteroidsModel.Asteroid) => ({
    left: asteroid.path.to.left,
    top: asteroid.path.to.top,
    bottom: asteroid.path.to.bottom,
    opacity: 1,
    transition: {
      duration: asteroid.pathSpeed,
      ease: "linear",
      delay: asteroid.delay,
      opacity: {
        duration: 0,
      },
    },
  }),
};

const Asteroid: React.FC<Props> = ({ asteroid, gamePlaying }) => {
  const [isDestroyed, setIsDestroyed] = useState(false);

  const onHitboxClick = () => {
    setIsDestroyed(true);
    console.log(asteroid);
  };

  useEffect(() => {
    if (isDestroyed) {
      asteroid.state = AsteroidState.DESTROYED;
    }
  }, [isDestroyed]);

  return (
    <>
      {isDestroyed === false && (
        <AsteroidMotion
          rocktype={asteroid.rockType}
          rotationspeed={asteroid.rotationSpeed}
          as={motion.div}
          initial={"initial"}
          variants={asteroidVariants}
          custom={asteroid}
          animate={gamePlaying ? "moveAsteroid" : ""}
          key={asteroid.id}
          onAnimationComplete={() => {
            if (asteroid.impactRoute) {
              asteroid.state = AsteroidState.IMPACT;
            } else {
              asteroid.state = AsteroidState.MISSED;
            }
          }}
        >
          <AsteroidHitbox
            as={motion.div}
            onClick={() => onHitboxClick()}
            whileHover={{ cursor: `url('${targetLock}') 25 25, auto` }}
          ></AsteroidHitbox>
        </AsteroidMotion>
      )}
    </>
  );
};
export default Asteroid;
