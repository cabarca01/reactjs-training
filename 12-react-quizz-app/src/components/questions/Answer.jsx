import { useContext } from "react";

import { QuizContext } from "../../contexts/quiz-context";

export default function Answer({ answer }) {
  const { onRegisterAnswer } = useContext(QuizContext);
  return (
    <li className="answer">
      <button
        onClick={() => {
          onRegisterAnswer(answer);
        }}
      >
        {answer}
      </button>
    </li>
  );
}
