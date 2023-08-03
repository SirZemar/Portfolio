import { useEffect, useState, useRef } from "react";

export const useGameCountdown = (
  timeMiliseconds: number,
  gameStarted: boolean
) => {
  const [gameIsOver, setGameIsOver] = useState(false);
  const timerRef = useRef(timeMiliseconds);

  let intervalRef = useRef<any>();

  const decreaseTimer = (miliseconds: number = 1000) => {
    timerRef.current = timerRef.current - miliseconds;
    console.log("Countdown: ", timerRef.current);

    if (timerRef.current <= 0) {
      clearInterval(intervalRef.current);
      const overTime = setTimeout(() => {
        setGameIsOver(true);
        return () => clearTimeout(overTime);
      }, 10000);
    }

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

  return { timer: timerRef.current, intervalRef, gameIsOver };
};
