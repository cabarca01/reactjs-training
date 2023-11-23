import { useContext } from "react";

import { QuizContext } from "../../contexts/quiz-context";

export default function Answer({ answer, onSelectAnswer }) {
  const { answerState, answers } = useContext(QuizContext);
  const buttonClasses =
    answers.length > 0 && answers[0].answer === answer ? answerState : null;
  return (
    <li className="answer">
      <button
        className={buttonClasses}
        disabled={answerState !== null}
        onClick={() => {
          onSelectAnswer(answer);
        }}
      >
        {answer}
      </button>
    </li>
  );
}
