import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import { Container } from "./Game.styles";

// Components
import Button, { ButtonType } from "src/common/Button";
import Text from "src/common/Text";
import Planet from "./Planet";
import Stars from "./Stars";
import AsteroidCluster from "./AsteroidCluster";
// Styles
import { Wrapper } from "../../common/Wrapper";
// Images
import { aiming } from "../../images";

import { useGameCountdown } from "../../hooks/useGameCountdown";
import Scores from "./Scores";

const Game: React.FC = () => {
  // Configurations
  const gameFullTime = 30000;
  const gameTotalLevels = 5;

  const [gameStarted, setGameStarted] = useState(false);
  const { timer, intervalRef, gameIsOver } = useGameCountdown(
    gameFullTime,
    gameStarted
  );
  const [planetHit, setPlanetHit] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (gameIsOver) {
      timeout = setTimeout(() => {
        alert("You are a hero! You saved our planet.");
      }, 6000);
    }
    return () => clearTimeout(timeout);
  }, [gameIsOver]);

  const planetRef = useRef<any>(null);
  const [configurations, setConfigurations] = useState({
    fullTime: gameFullTime,
    totalLevels: gameTotalLevels,
    planetSize: 0,
  });

  const planetImpact = useCallback(() => {
    setPlanetHit(true);
  }, []);

  useLayoutEffect(() => {
    planetRef.current = document.querySelector(".planet-image");

    setConfigurations({
      ...configurations,
      planetSize: planetRef.current ? planetRef.current.clientHeight : 0,
    });
  }, []);

  useEffect(() => {
    if (gameStarted) return;
    const handleWindowResize = () => {
      setConfigurations({
        ...configurations,
        planetSize: planetRef.current ? planetRef.current.clientHeight : 0,
      });
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const offset = e.currentTarget.getBoundingClientRect().x;
  //   const x = e.pageX - offset;
  //   const y = e.pageY;

  //   // Ripple child should be in charge of setting up the arrayy from the coordenates prop
  //   setMoussePositionArray(
  //     mousePositionArray.length > 0
  //       ? (prev) => [...prev, { x, y, id: uuid() }]
  //       : [{ x, y, id: uuid() }]
  //   );

  //   const newPaths = shuffle(paths);

  //   setPathArray(newPaths);
  // };
  return (
    // Container onClick={handleClick}
    <Container>
      {gameIsOver && <Scores />}
      <Stars />
      <Wrapper
        style={{
          cursor: gameStarted ? `url(${aiming}) 25 25, auto` : "auto",
          display: "flex",
          alignItems: "center",
          userSelect: "none",
        }}
      >
        <AsteroidCluster
          configurations={configurations}
          gameStarted={gameStarted}
          planetImpact={planetImpact}
        />
        <div className="inner-container">
          <div className="inner-container__planet">
            <Planet
              gameStarted={gameStarted}
              planetImpact={planetHit}
              setPlanetImpact={setPlanetHit}
            />
          </div>
          {!gameStarted && (
            <div className="inner-container__intro">
              <Text>
                <h1>Planet danger!</h1>
                <p>
                  Iminence collision with an asteroid cluster guided by a
                  vengeful pointer. Our defenses lie dormant, lasers thirsting
                  for logic, but only a coding virtuoso can navigate this
                  intricate pipeline of impending doom. We need you now! Channel
                  your inner code maestro, steer those cannons with precision,
                  and let's debug this celestial catastrophe pronto!
                </p>
              </Text>
              <div className="inner-container__intro__start-button">
                <Button
                  type={ButtonType.CALLBACK}
                  fun={() => setGameStarted(true)}
                >
                  Start
                </Button>
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    </Container>
  );
};

export default Game;
