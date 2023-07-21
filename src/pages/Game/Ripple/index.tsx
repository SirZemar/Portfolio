import React from "react";
// Styles
import { SVG } from "./Ripple.styles";
// Animation
import { motion } from "framer-motion";
// Type
import { Coordenates } from "..";

interface Props {
  coordenatesArray: Coordenates[];
  setCoordenatesArray: React.Dispatch<React.SetStateAction<Coordenates[]>>;
  paths: string[];
}

interface variantProps {
  coordenates: Coordenates;
  paths: string[];
}

const variants = {
  initial: ({ coordenates }: variantProps) => ({
    scale: 0,
    opacity: 0.8,
    x: coordenates.x,
    y: coordenates.y,
  }),
  animate: ({ paths }: variantProps) => ({
    scale: 2,
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
    d: paths,
  }),
};

const Ripple: React.FC<Props> = ({
  coordenatesArray,
  setCoordenatesArray,
  paths,
}) => {
  const onComplete = (key: string) => {
    setCoordenatesArray(
      coordenatesArray.filter((coordenates) => coordenates.id !== key)
    );
  };

  const variantsProps = (coordenates: Coordenates) => ({ coordenates, paths });

  return (
    <>
      {coordenatesArray.map((coordenates) => (
        <SVG key={coordenates.id}>
          <g className="blob">
            <motion.path
              variants={variants}
              custom={variantsProps(coordenates)}
              initial={"initial"}
              animate={"animate"}
              onAnimationComplete={() => onComplete(coordenates.id)}
              className="blob-path"
              fill="none"
              stroke="#F7770F"
              strokeWidth="3"
            ></motion.path>
          </g>
        </SVG>
      ))}
    </>
  );
};

export default Ripple;
