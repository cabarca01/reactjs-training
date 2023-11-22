import { useContext } from "react";

import { QuizContext } from "../../contexts/quiz-context";

export default function Answer({ id, answer }) {
  const { onRegisterAnswer } = useContext(QuizContext);
  return (
    <li className="answer">
      <button
        onClick={() => {
          onRegisterAnswer(id);
        }}
      >
        {answer}
      </button>
    </li>
  );
}
