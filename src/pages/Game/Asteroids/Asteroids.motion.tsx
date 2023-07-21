import React from "react";
import { motion } from "framer-motion";
import { AsteroidsModel } from "@models";

interface Props {
  asteroid: AsteroidsModel.Asteroid;
}

const AsteroidMotion: React.FC<Props> = ({ asteroid }) => {
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
};

export default AsteroidMotion;
