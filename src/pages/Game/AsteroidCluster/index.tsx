import React, { useEffect, useRef } from "react";
import { Container } from "./AsteroidCluster.styles";
import Asteroid from "../Asteroid";
import { useGenerateAsteroids } from "src/hooks/useGenerateAsteroids";

interface Props {
  configurations: AsteroidConfigurations;
  gameStarted: boolean;
  planetImpact: () => void;
}

export interface AsteroidConfigurations {
  fullTime: number;
  totalLevels: number;
  planetSize: number;
}

const AsteroidCluster: React.FC<Props> = ({
  configurations,
  gameStarted,
  planetImpact,
}) => {
  const asteroidsPerLevels = useGenerateAsteroids(configurations);

  return (
    <Container>
      {asteroidsPerLevels &&
        Object.values(asteroidsPerLevels)
          .flat()
          .map((asteroids) => asteroids)
          .map((asteroid) => {
            return gameStarted ? (
              <Asteroid
                key={asteroid.id}
                asteroid={asteroid}
                gamePlaying={gameStarted}
                planetImpact={planetImpact}
              ></Asteroid>
            ) : null;
          })}
    </Container>
  );
};

export default React.memo(AsteroidCluster);
