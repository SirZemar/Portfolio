import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { AsteroidsModel } from "@models";

import { asteroidType, targetLock } from "../../../images";

import { AsteroidHitbox, AsteroidMotion } from "./Asteroid.motion.styles";
import { AsteroidState } from "../AsteroidCluster/AsteroidCluster.helpers";
import RenderCount from "src/common/RenderCount";

interface Props {
  asteroid: AsteroidsModel.Asteroid;
  gamePlaying: boolean;
}

const Asteroid: React.FC<Props> = ({ asteroid, gamePlaying }) => {
  const [isActive, setIsActive] = useState(true);
  const [interceptLocation, setInterceptLocation] = useState(false as any);
  const [destroy, setDestroy] = useState(false);

  const controls = useAnimation();

  const onAnimationComplete = () => {
    if (destroy) {
      console.log("exitDestroy", asteroid.id);
      controls.start("exitDestroy").then(() => setIsActive(false));
    } else if (asteroid.impactRoute) {
      console.log("exitImpact", asteroid.id);
      controls.start("exitImpact").then(() => setIsActive(false));
    } else {
      console.log("exitMiss", asteroid.id);
      controls.start("exitMiss").then(() => setIsActive(false));
    }
  };

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
    exitMiss: (asteroid: AsteroidsModel.Asteroid) => ({
      left: asteroid.exitAsteroid.path.to.left,
      bottom: asteroid.exitAsteroid.path.to.bottom,
      top: asteroid.exitAsteroid.path.to.top,
      opacity: 0.5,
      transition: { duration: asteroid.exitAsteroid.speed, ease: "linear" },
    }),
    exitImpact: () => ({
      opacity: 0,
      transition: { duration: 0 },
    }),
    exitDestroy: () => ({
      opacity: 0,
      transition: { duration: 0 },
    }),
  };

  const onAsteroidHitboxClick = (e: any) => {
    setDestroy(true);
    asteroid.state = AsteroidState.DESTROYED;

    const elStyles = e.currentTarget.parentNode.style;

    elStyles.display = "none";
    const left = elStyles.left;
    const bottom = elStyles.bottom;
    const top = elStyles.top;

    setInterceptLocation({
      left,
      bottom,
      top,
    });
  };

  useEffect(() => {
    if (gamePlaying) {
      controls.start("moveAsteroid");
    }
  }, [gamePlaying]);

  return (
    <>
      {isActive && (
        <AsteroidMotion
          rocktype={asteroid.rockType}
          rotationspeed={asteroid.rotationSpeed}
          as={motion.div}
          initial={"initial"}
          variants={asteroidVariants}
          custom={asteroid}
          animate={controls}
          key={asteroid.id}
          onAnimationComplete={(definition: any) => {
            onAnimationComplete();
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
