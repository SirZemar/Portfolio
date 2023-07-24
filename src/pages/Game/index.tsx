import React, { useEffect, useRef, useState } from "react";
import { Container } from "./Game.styles";

// Components
import Ripple from "./Ripple";
// Unique Id
import { v4 as uuid } from "uuid";
// Paths
import paths from "../../paths";
// Shuffle
import { shuffle } from "../../utils";
// Styles
import { Wrapper } from "../../common/Wrapper";

import Stars from "./Stars";
import AsteroidCluster from "./AsteroidCluster";

import { useGameCountdown } from "../../hooks/useGameCountdown";
import { Planet } from "./Planet";

export interface Coordenates {
  x: number;
  y: number;
  id: string;
}
const Game: React.FC = () => {
  const gameFullTime = 30000;
  const gameTotalLevels = 5;
  const [gameStarted, setGameStarted] = useState(false);

  const { timer, intervalRef, gameIsOver } = useGameCountdown(
    gameFullTime,
    gameStarted
  );

  console.log("Game rendered!");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (gameIsOver) {
      timeout = setTimeout(() => {
        alert("You are a hero! You saved our planet.");
      }, 6000);
    }
    return () => clearTimeout(timeout);
  }, [gameIsOver]);

  const [mousePositionArray, setMoussePositionArray] = useState<Coordenates[]>(
    []
  );
  const [pathArray, setPathArray] = useState<string[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const offset = e.currentTarget.getBoundingClientRect().x;
    const x = e.pageX - offset;
    const y = e.pageY;

    // Ripple child should be in charge of setting up the arrayy from the coordenates prop
    setMoussePositionArray(
      mousePositionArray.length > 0
        ? (prev) => [...prev, { x, y, id: uuid() }]
        : [{ x, y, id: uuid() }]
    );

    const newPaths = shuffle(paths);

    setPathArray(newPaths);
  };
  return (
    <Container onClick={handleClick}>
      <Ripple
        coordenatesArray={mousePositionArray}
        setCoordenatesArray={setMoussePositionArray}
        paths={pathArray}
      />
      <Wrapper>
        <Stars />
        <AsteroidCluster
          timer={timer}
          gameIsOver={gameIsOver}
          configurations={{
            fullTime: gameFullTime,
            totalLevels: gameTotalLevels,
          }}
          gameStarted={gameStarted}
        />
        <Planet gameStarted={gameStarted} />
      </Wrapper>
    </Container>
  );
};

export default Game;
