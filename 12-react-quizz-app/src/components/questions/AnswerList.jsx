import { useContext } from "react";

import { QuizContext } from "../../contexts/quiz-context";
import Answer from "./Answer";

export default function AnswerList() {
  const { currentQuestion } = useContext(QuizContext);
  return (
    <menu>
      <ul>
        {currentQuestion.answers.map((answer, index) => (
          <Answer
            key={currentQuestion.id + "_" + index}
            id={index}
            answer={answer}
          />
        ))}
      </ul>
    </menu>
  );
}
