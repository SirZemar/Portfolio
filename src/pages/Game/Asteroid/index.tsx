import React from "react";
import { motion } from "framer-motion";
import { AsteroidsModel } from "@models";

import { asteroidType } from "../../../images";

import { AsteroidMotion } from "./Asteroid.motion.styles";
interface Props {
  asteroid: AsteroidsModel.Asteroid;
}

const Asteroid: React.FC<Props> = ({ asteroid }) => (
  <AsteroidMotion
    rocktype={asteroid.rockType}
    rotationspeed={asteroid.rotationSpeed}
    as={motion.div}
    initial={{
      backgroundImage: `url(${asteroidType})`,
      backgroundPosition: `calc(75px * 0) calc(-75px * ${asteroid.rockType})`,
      left: asteroid.path.from.left,
      top: asteroid.path.from.top,
      bottom: asteroid.path.from.bottom,
      opacity: 0,
    }}
    onClick={() => console.log("Asteroid clicked")}
    animate={{
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
    }}
    key={asteroid.id}
    onAnimationComplete={() => {}}
  ></AsteroidMotion>
);
export default Asteroid;
