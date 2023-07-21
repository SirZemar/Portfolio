import React, { useEffect, useState } from "react";
import { Container } from "./AsteroidCluster.styles";
// Models
import { AsteroidsModel } from "@models";
// Helpers
import {
  getAsteroidsNumberPerLevel,
  getAsteroidsTimeGapPerLevel,
  getAsteroidsWindowTimePerLevel,
  getAsteroids,
} from "./AsteroidCluster.helpers";
import Asteroid from "../Asteroid";

interface Props {
  timer: number;
  gameIsOver: boolean;
  configurations: Configurations;
}

interface Configurations {
  fullTime: number;
  totalLevels: number;
}

const AsteroidCluster: React.FC<Props> = ({
  timer,
  gameIsOver,
  configurations,
}) => {
  const [asteroids, setAsteroids] = useState<AsteroidsModel.Asteroid[]>([]);

  useEffect(() => {
    const asteroidsNumberPerLevel = getAsteroidsNumberPerLevel(
      configurations.totalLevels
    );
    const asteroidsTimeGapPerLevel = getAsteroidsTimeGapPerLevel(
      configurations,
      asteroidsNumberPerLevel
    );
    const asteroidsWindowTimePerLevel = getAsteroidsWindowTimePerLevel(
      configurations,
      asteroidsNumberPerLevel
    );
    const asteroids = getAsteroids(
      configurations,
      asteroidsTimeGapPerLevel,
      asteroidsWindowTimePerLevel,
      asteroidsNumberPerLevel
    );

    setAsteroids(asteroids);
  }, []);

  return (
    <Container>
      {asteroids.map((asteroid) => (
        <Asteroid key={asteroid.id} asteroid={asteroid}></Asteroid>
      ))}
    </Container>
  );
};

export default AsteroidCluster;
