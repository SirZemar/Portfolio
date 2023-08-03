import React, {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useMemo,
} from "react";
import { motion, useAnimation } from "framer-motion";
import { PlanetMotion } from "./Planet.motion.styles";
import { planetImage } from "../../../images";

interface Props {
  gameStarted: boolean;
  planetImpact: boolean;
  setPlanetImpact: (x: boolean) => void;
}
enum PlanetAnimations {
  INTRO = "intro",
  INITIAL = "initial",
  Game = "game",
}
const planetImageVariants = {
  [PlanetAnimations.INITIAL]: { opacity: 0, translateX: -20, right: "50%" },
  [PlanetAnimations.INTRO]: {
    opacity: 1,
    right: "50%%",
    translateX: 0,
    transition: { opacity: { duration: 1 }, duration: 2 },
  },
  [PlanetAnimations.Game]: (right: number) => ({
    opacity: 1,
    right: ["50%", "45%", right],
    rotate: "360deg",
    translateX: 0,
    transition: {
      rotate: { duration: 40, repeat: Infinity, ease: "linear" },
      right: {
        duration: 2,
        time: [0, 0.5, 1],
        delay: 0.5,
        type: "spring",
      },
    },
  }),
};

const Planet: React.FC<Props> = ({
  gameStarted,
  planetImpact,
  setPlanetImpact,
}) => {
  const planetRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | undefined>(0);
  const [height, setHeight] = useState<number>(0);
  const [right, setRigth] = useState("");

  const controls = useAnimation();

  useMemo(() => {
    if (planetImpact) {
      controls
        .start({
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { duration: 0.4 },
        })
        .then(() => setPlanetImpact(false));
    }
  }, [planetImpact]);

  useLayoutEffect(() => {
    setWidth(planetRef.current ? planetRef.current.clientWidth : 0);
    setHeight(planetRef.current ? planetRef.current.offsetHeight : 0);

    if (width && height) {
      const rightNumber = 100 - (height * 100) / width / 3;
      setRigth(rightNumber + "%");
    }
  }, [width, height]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(planetRef.current ? planetRef.current.clientHeight : 0);
      setHeight(planetRef.current ? planetRef.current.offsetHeight : 0);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <PlanetMotion as={motion.div} ref={planetRef} animate={controls}>
      <motion.img
        className="planet-image"
        src={planetImage}
        custom={right}
        variants={planetImageVariants}
        initial={PlanetAnimations.INITIAL}
        animate={gameStarted ? PlanetAnimations.Game : PlanetAnimations.INTRO}
      ></motion.img>
    </PlanetMotion>
  );
};

export default Planet;