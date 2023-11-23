import { useContext } from "react";

import { QuizContext } from "../../contexts/quiz-context";
import Answer from "./Answer";

export default function AnswerList({ shuffledAnswers, onSelectAnswer }) {
  const { currentQuestion } = useContext(QuizContext);

  return (
    <menu>
      <ul id="answers">
        {shuffledAnswers.map((answer, index) => (
          <Answer
            key={currentQuestion.id + "_" + index}
            answer={answer}
            onSelectAnswer={onSelectAnswer}
          />
        ))}
      </ul>
    </menu>
  );
}
