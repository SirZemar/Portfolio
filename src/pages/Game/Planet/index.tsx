import React, { useEffect, useState } from "react";
import {motion } from "framer-motion";
import { PlanetMotion } from "./Planet.motion.styles";
import { planetImage } from "../../../images";

const planetImageVariants = {
  initial: { opacity: 0, translateX: 80 },
  isIntro: {
    opacity: 1,
    translateX: 100,
    transition: { opacity: { duration: 1 }, duration: 2 },
  },
  isGame: {
    opacity: 1,
    translateX: [100, 120, -350],
    rotate: "360deg",
    transition: {
      rotate: { duration: 40, repeat: Infinity, ease: "linear" },
      translateX: {
        duration: 2,
        time: [0, 0.5, 1],
        delay: 0.5,
        type: "spring",
      },
    },
  },
};

export const Planet: React.FC<any> = ({ gameStarted }) => {
  const [gameState, setGameState] = useState("isIntro");

  useEffect(() => {
    if (gameStarted) {
      setGameState("isGame");
    }
  }, [gameStarted]);

  return (
    <PlanetMotion as={motion.div}>
      <motion.img
        className="planet-image"
        src={planetImage}
        variants={planetImageVariants}
        initial={"initial"}
        animate={gameState}
      ></motion.img>
    </PlanetMotion>
  );
};
