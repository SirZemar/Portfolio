import styled from "styled-components";
import { motion } from "framer-motion";

export const PlanetMotion = styled(motion.div)`
  z-index: -1;
  height: 100%;
  position: fixed;
  width: 100%;
  top: 50%;
  max-height: 70%;
  transform: translateY(-50%);

  .planet-image {
    position: absolute;
    height: 100%;
  }
`;
