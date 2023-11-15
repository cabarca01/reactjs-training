import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, duration }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(duration * 1000);

  const isStarted = timeRemaining > 0 && timeRemaining < duration * 1000;

  if (timeRemaining <= 0) {
    stopTimerHandler();
  }

  function resetTimerHandler() {
    setTimeRemaining(duration * 1000);
  }

  function startTimerHandler() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function stopTimerHandler() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        expectedDuration={duration}
        timeRemaining={timeRemaining}
        onResetTimer={resetTimerHandler}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <div className="challenge-time">
          {duration} second{duration === 1 ? null : "s"}
        </div>
        <button onClick={isStarted ? stopTimerHandler : startTimerHandler}>
          {isStarted ? "Stop" : "Start"} Challenge
        </button>
        <p className={isStarted ? "active" : undefined}>
          {isStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
