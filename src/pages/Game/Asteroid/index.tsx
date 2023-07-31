import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { AsteroidsModel } from "@models";

import { asteroidType, targetLock } from "../../../images";

import { AsteroidHitbox, AsteroidMotion } from "./Asteroid.motion.styles";
import { AsteroidState } from "../AsteroidCluster/AsteroidCluster.helpers";
import { AnimationDefinition } from "framer-motion/types/render/utils/animation";
import RenderCount from "src/common/RenderCount";

interface Props {
  asteroid: AsteroidsModel.Asteroid;
  gamePlaying: boolean;
}

enum AsteroidAnimations {
  INITIAL = "initial",
  MOVE = "move",
  IMPACT = "impact",
  DESTROY = "destroy",
  MISS = "miss",
}

const Asteroid: React.FC<Props> = ({ asteroid }) => {
  const [isActive, setIsActive] = useState(true);
  const [interceptLocation, setInterceptLocation] = useState(false as any);
  const asteroidRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();

  if (isActive && asteroid.state === AsteroidState.IDLE) {
    controls.start(AsteroidAnimations.MOVE);
  }

  const onAnimationComplete = (definition: AnimationDefinition) => {
    if (asteroid.impactRoute) {
      console.log(definition, asteroid.id);
      asteroid.state = AsteroidState.IMPACT;
      controls.start(AsteroidAnimations.IMPACT).then(() => setIsActive(false));
    } else {
      console.log(definition, asteroid.id);
      asteroid.state = AsteroidState.MISSED;
      controls.start(AsteroidAnimations.MISS).then(() => setIsActive(false));
    }
  };

  const onAsteroidHitboxClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(asteroidRef.current?.style);

    const asteroidElement = asteroidRef.current;
    if (asteroidElement) {
      asteroid.state = AsteroidState.DESTROYED;
      controls.stop();
      controls.start(AsteroidAnimations.DESTROY).then(() => setIsActive(false));

      const left = asteroidElement.style.left;
      const bottom = asteroidElement.style.bottom;
      const top = asteroidElement.style.top;

      setInterceptLocation({
        left,
        bottom,
        top,
      });

      // TODO animation image console.log(interceptLocation);
    }
  };

  return (
    <>
      {isActive && (
        <AsteroidMotion
          ref={asteroidRef}
          rocktype={asteroid.rockType}
          rotationspeed={asteroid.rotationSpeed}
          as={motion.div}
          initial={"initial"}
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
            whileHover={{ cursor: `url('${targetLock}') 25 25, auto` }}
          ></AsteroidHitbox>
        </AsteroidMotion>
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
    bottom: asteroid.path.from.bottom,
    opacity: 0,
  }),
  [AsteroidAnimations.MOVE]: (asteroid: AsteroidsModel.Asteroid) => ({
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
  [AsteroidAnimations.MISS]: (asteroid: AsteroidsModel.Asteroid) => ({
    left: asteroid.exitAsteroid.path.to.left,
    bottom: asteroid.exitAsteroid.path.to.bottom,
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
    transition: { duration: 0 },
  }),
};
{
  /* {!isActive && asteroid.state === AsteroidState.IMPACT && (
<div
style={{
  position: "absolute",
  left: asteroid.path.to.left,
  bottom: asteroid.path.to.bottom,
  top: asteroid.path.to.top,
  backgroundColor: "red",
  height: "40px",
  width: "40px",
  opacity: 0.5,
}}
></div>
)} */
}
{
  /* {!isActive && asteroid.state === AsteroidState.DESTROYED && (
<motion.div
initial={{
position: "absolute",
left: interceptLocation.left,
bottom: interceptLocation.bottom,
top: interceptLocation.top,
backgroundColor: "orange",
height: "40px",
width: "40px",
opacity: 0.5,
}}
></motion.div>
)} */
}
