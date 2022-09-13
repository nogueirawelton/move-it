import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useChallenges } from "./ChallengesHook";

interface CountdownContextData {
  minutes: number;
  seconds: number
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

const countdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;
const timer = 20 * 60;

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const { startNewChallenge } = useChallenges();

  const [time, setTime] = useState(timer);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(timer);
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time == 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time])

  return (
    <countdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }}>
      {children}
    </countdownContext.Provider>
  )
}

export function useCountdown() {
  return useContext(countdownContext);
}