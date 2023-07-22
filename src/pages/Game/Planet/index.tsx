import React from "react";
import { AnimatePresence, motion, transform } from "framer-motion";
import { PlanetMotion } from "./Planet.motion.styles";
import { planetImage } from "../../../images";

const variants = {
  isIntro: { left: "200px", opacity: 1, transition: { duration: 2 } },
  isGame: {
    left: "-250px",
    opacity: 1,
    transition: {
      duration: 2,
      transform: {
        translate: "rotate(360deg)",
        transition: { repeat: Infinity, duration: 10 },
      },
    },
  },
};
export const Planet: React.FC<any> = ({ gameStarted }) => (
  <PlanetMotion as={motion.div}>
    <motion.img
      className="planet-image"
      src={planetImage}
      initial={{ opacity: 0, translateX: 80 }}
      animate={{
        rotate: gameStarted ? "360deg" : "0deg",
        opacity: 1,
        translateX: gameStarted ? -350 : 100,
        transition: {
          duration: 2,
          translateX: { duration: 3 },
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
        },
      }}
    ></motion.img>
  </PlanetMotion>
);
