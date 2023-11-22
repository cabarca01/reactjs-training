import { useContext } from "react";
import { shuffleList } from "../../utils/utils";

import { QuizContext } from "../../contexts/quiz-context";
import Answer from "./Answer";

export default function AnswerList() {
  const { currentQuestion } = useContext(QuizContext);
  const answers = shuffleList(currentQuestion.answers);

  return (
    <menu>
      <ul id="answers">
        {answers.map((answer, index) => (
          <Answer
            key={currentQuestion.id + "_" + index}
            answer={answer}
          />
        ))}
      </ul>
    </menu>
  );
}
