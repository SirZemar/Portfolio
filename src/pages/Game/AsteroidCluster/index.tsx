import React from "react";
import { Container } from "./AsteroidCluster.styles";
import Asteroid from "../Asteroid";
import { useGenerateAsteroids } from "src/hooks/useGenerateAsteroids";

interface Props {
  configurations: AsteroidConfigurations;
  gameStarted: boolean;
}

export interface AsteroidConfigurations {
  fullTime: number;
  totalLevels: number;
}

const AsteroidCluster: React.FC<Props> = ({ configurations, gameStarted }) => {
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
              ></Asteroid>
            ) : null;
          })}
    </Container>
  );
};

export default AsteroidCluster;
