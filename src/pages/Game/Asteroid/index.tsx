import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { AsteroidsModel } from "@models";

import { asteroidExplosion, asteroidType } from "../../../images";

import {
  AsteroidHitbox,
  AsteroidMotion,
  ExplosionMotion,
} from "./Asteroid.motion.styles";
import { AnimationDefinition } from "framer-motion/types/render/utils/animation";
import RenderCount from "src/common/RenderCount";

interface Props {
  asteroid: AsteroidsModel.Asteroid;
  gamePlaying: boolean;
  planetImpact: () => void;
}

export enum AsteroidState {
  IDLE = "idle",
  IMPACT = "impact",
  MISSED = "missed",
  DESTROYED = "destroyed",
}

enum AsteroidAnimations {
  INITIAL = "initial",
  MOVE = "move",
  IMPACT = "impact",
  DESTROY = "destroy",
  MISS = "miss",
}

const Asteroid: React.FC<Props> = ({ asteroid, planetImpact }) => {
  const [isActive, setIsActive] = useState(true);
  const [interceptLocation, setInterceptLocation] = useState(false as any);
  const asteroidRef = useRef<HTMLDivElement>(null);
  const [destroy, setDestroy] = useState(false);
  const controls = useAnimation();

  if (isActive && asteroid.state === AsteroidState.IDLE) {
    controls.start(AsteroidAnimations.MOVE);
  }

  const onAnimationComplete = (definition: AnimationDefinition) => {
    if (asteroid.impactRoute) {
      asteroid.state = AsteroidState.IMPACT;

      if (!destroy) {
        planetImpact();
      }
      controls.start(AsteroidAnimations.IMPACT).then(() => setIsActive(false));
    } else {
      asteroid.state = AsteroidState.MISSED;
      controls.start(AsteroidAnimations.MISS).then(() => setIsActive(false));
    }
  };

  const onAsteroidHitboxClick = () => {
    const asteroidElement = asteroidRef.current;
    if (asteroidElement) {
      asteroid.state = AsteroidState.DESTROYED;
      controls.stop();
      controls.start(AsteroidAnimations.DESTROY).then(() => setIsActive(false));

      const left = asteroidElement.style.left;
      const top = asteroidElement.style.top;

      setInterceptLocation({
        left,
        top,
      });

      setDestroy(true);
    }
  };

  return (
    <>
      {isActive && (
        <AsteroidMotion
          ref={asteroidRef}
          rocktype={asteroid.rockType}
          rotationspeed={asteroid.rotationSpeed}
          size={asteroid.asteroidSize}
          as={motion.div}
          initial={AsteroidAnimations.INITIAL}
          variants={asteroidVariants}
          custom={asteroid}
          animate={controls}
          key={asteroid.id}
          onAnimationComplete={(definition: AnimationDefinition) => {
            onAnimationComplete(definition);
          }}
        >
          <AsteroidHitbox
            as={motion.div}
            onClick={onAsteroidHitboxClick}
          ></AsteroidHitbox>
        </AsteroidMotion>
      )}

      {isActive && destroy && (
        <ExplosionMotion
          initial={{
            position: "absolute",
            backgroundImage: `url(${asteroidExplosion})`,
            height: "90px",
            width: "90px",
            transform: `translate(-50%, -50%) scale(${asteroid.asteroidSize}`,
            backgroundOrigin: "center",
            opacity: 0,
            backgroundSize: "cover",
          }}
          animate={{
            opacity: [0, 1, 0],
            left: interceptLocation.left,
            top: interceptLocation.top,
            transition: {
              duration: 0.5,
              opacity: { times: [0, 0.1, 1] },
              left: { duration: 0 },
              top: { duration: 0 },
            },
          }}
        ></ExplosionMotion>
      )}
    </>
  );
};
export default React.memo(Asteroid);

const asteroidVariants = {
  [AsteroidAnimations.INITIAL]: (asteroid: AsteroidsModel.Asteroid) => ({
    backgroundImage: `url(${asteroidType})`,
    backgroundPosition: `calc(75px * 0) calc(-75px * ${asteroid.rockType})`,
    left: asteroid.path.from.left,
    top: asteroid.path.from.top,
    opacity: 0,
  }),
  [AsteroidAnimations.MOVE]: (asteroid: AsteroidsModel.Asteroid) => ({
    left: asteroid.path.to.left,
    top: asteroid.path.to.top,
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
  [AsteroidAnimations.MISS]: (asteroid: AsteroidsModel.Asteroid) => ({
    left: asteroid.exitAsteroid.path.to.left,
    top: asteroid.exitAsteroid.path.to.top,
    opacity: 0.5,
    transition: { duration: asteroid.exitAsteroid.speed, ease: "linear" },
  }),
  [AsteroidAnimations.IMPACT]: () => ({
    opacity: 0,
    transition: { duration: 0 },
  }),
  [AsteroidAnimations.DESTROY]: () => ({
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5, opacity: { duration: 0 } },
  }),
};
