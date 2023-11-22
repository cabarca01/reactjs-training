import { useContext } from "react";

import { QuizContext } from "../../contexts/quiz-context.jsx";
import AnswerList from "./AnswerList.jsx";

export default function Question() {
  const { currentQuestion } = useContext(QuizContext);

  return (
    <div>
      <p>{currentQuestion.text}</p>
      <AnswerList/>
    </div>
  );
}
