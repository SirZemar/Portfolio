import { motion } from "framer-motion";
import styled from "styled-components";

import { targetLock } from "../../../images";
interface Props {
  rocktype: number;
  rotationspeed: number;
  size: number;
}

export const AsteroidMotion = styled(motion.div)<Props>`
  display: grid;
  position: absolute;
  width: 75px;
  height: 75px;
  transform: scale(${({ size }) => size}) translate(-50%, -50%);
  transform-origim: center;

  animation: "rotateAnimationType${({ rocktype: rockType }) => rockType}"
    ${({ rotationspeed: rotationSpeed }) => rotationSpeed + "s"} steps(22)
    infinite;

  // =========== Note =========
  // Hard coded keyframes until better solution to use animation by steps with framer motion

  @keyframes rotateAnimationType0 {
    0% {
      background-position: calc(75px * 1) calc(-75px * 0);
    }
    100% {
      background-position: calc(75px * 23) calc(-75px * 0);
    }
  }

  @keyframes rotateAnimationType1 {
    0% {
      background-position: calc(75px * 1) calc(-75px * 1);
    }
    100% {
      background-position: calc(75px * 23) calc(-75px * 1);
    }
  }

  @keyframes rotateAnimationType2 {
    0% {
      background-position: calc(75px * 1) calc(-75px * 2);
    }
    100% {
      background-position: calc(75px * 23) calc(-75px * 2);
    }
  }

  @keyframes rotateAnimationType3 {
    0% {
      background-position: calc(75px * 1) calc(-75px * 3);
    }
    100% {
      background-position: calc(75px * 23) calc(-75px * 3);
    }
  }

  @keyframes rotateAnimationType4 {
    0% {
      background-position: calc(75px * 1) calc(-75px * 4);
    }
    100% {
      background-position: calc(75px * 23) calc(-75px * 4);
    }
  }

  @keyframes rotateAnimationType5 {
    0% {
      background-position: calc(75px * 1) calc(-75px * 5);
    }
    100% {
      background-position: calc(75px * 23) calc(-75px * 5);
    }
  }

  @keyframes rotateAnimationType6 {
    0% {
      background-position: calc(75px * 1) calc(-75px * 6);
    }
    100% {
      background-position: calc(75px * 23) calc(-75px * 6);
    }
  }

  @keyframes rotateAnimationType7 {
    0% {
      background-position: calc(75px * 1) calc(-75px * 7);
    }
    100% {
      background-position: calc(75px * 23) calc(-75px * 7);
    }
  }

  @keyframes rotateAnimationType8 {
    0% {
      background-position: calc(75px * 1) calc(-75px * 8);
    }
    100% {
      background-position: calc(75px * 23) calc(-75px * 8);
    }
  }
`;

export const AsteroidHitbox = styled.div`
  place-self: center;
  width: 95%;
  height: 95%;
  cursor: url("${targetLock}") 25 25, auto;
`;

export const ExplosionMotion = styled(motion.div)`
  animation: none;
`;