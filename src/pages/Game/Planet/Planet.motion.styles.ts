import styled from "styled-components";
import { motion } from "framer-motion";

export const PlanetMotion = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: -1;
  height: 100%;
  top: 0;
  left: 0;

  .planet-image {
  }
`;
