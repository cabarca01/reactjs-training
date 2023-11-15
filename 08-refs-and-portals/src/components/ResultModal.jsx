import { forwardRef, useRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal(
  { expectedDuration, timeRemaining, onResetTimer },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  const score = Math.round(
    100 - (timeRemaining * 100) / (expectedDuration * 1000)
  );

  const isGameOver = timeRemaining <= 0;

  return (
    <dialog ref={dialog} className="result-modal" onClose={onResetTimer}>
      {isGameOver ? (
        <h2>You lost!!</h2>
      ) : (
        <h2>
          Your score: <strong>{score}</strong>
        </h2>
      )}
      <p>
        The target time was{" "}
        <strong>
          {expectedDuration} second{expectedDuration === 1 ? null : "s"}.
        </strong>
      </p>
      {isGameOver ? (
        <p>You didn't stop the timer on time!</p>
      ) : (
        <p>
          You stopped the timer with{" "}
          <strong>{formattedTimeRemaining} seconds left</strong>.
        </p>
      )}
      <form method="dialog">
        <button onClick={onResetTimer}>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
