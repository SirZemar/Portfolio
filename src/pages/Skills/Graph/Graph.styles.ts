import { motion } from "framer-motion";
import styled from "styled-components";

interface Props {
  skill: {
    name: string;
    width: string;
  };
  alternate: boolean;
}

const background = {
  red: `rgb(230, 0, 0)`,
  pink: `rgb(230, 150, 200)`,
};

const shadow = {
  red: `0 0 8px rgb(255, 0, 0, 0.5)`,
  pink: `0 0 8px rgb(235, 150, 230, 0.5)`,
};

export const ProgressBar = styled(motion.div)<Props>`
  width: 0;
  background-color: ${({ alternate }) =>
    alternate ? background.red : background.pink};
  box-shadow: ${({ alternate }) => (alternate ? shadow.red : shadow.pink)};
`;

export const Container = styled.div`
  .bar-container {
    display: block;
    width: 100%;
    height: 3px;
    box-shadow: inset 0 0 0 3px grey;

    ${ProgressBar} {
      height: 100%;
      border-radius: 5px;
    }
  }
`;
