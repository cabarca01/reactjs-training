import { useState, useEffect } from "react";

export default function ProgressBar({ maxValue }) {
  const [remainigTime, setRemainingTime] = useState(maxValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress max={maxValue} value={remainigTime} />;
}
