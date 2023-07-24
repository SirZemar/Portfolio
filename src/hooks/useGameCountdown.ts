import { useEffect, useState, useRef } from "react";

export const useGameCountdown = (
  timeMiliseconds: number,
  gameStarted: boolean
) => {
  const [gameIsOver, setGameIsOver] = useState(false);
  const [timer, setTimer] = useState(timeMiliseconds);
  let intervalRef = useRef<any>();

  const decreaseTimer = (miliseconds: number = 1000) => {
    setTimer((prev) => prev - miliseconds);
  };

  useEffect(() => {
    if (gameStarted) {
      const miliseconds = 1000;
      intervalRef.current = setInterval(
        () => decreaseTimer(miliseconds),
        miliseconds
      );

      return () => clearInterval(intervalRef.current);
    }
  }, [gameStarted]);

  useEffect(() => {
    console.log("Countdown: ", timer);
    if (timer <= 0) {
      clearInterval(intervalRef.current);
      setGameIsOver(true);
    }
  }, [timer]);

  return { timer, intervalRef, gameIsOver };
};
