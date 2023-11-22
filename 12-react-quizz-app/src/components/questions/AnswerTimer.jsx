import { useEffect, useState } from "react";

export default function AnswerTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const countdown = setTimeout(() => {
      onTimeout();
    }, timeout);
    return () => {
      clearTimeout(countdown);
    };
  }, [timeout, onTimeout]);

  return <progress max={timeout} value={remainingTime} />;
}
