import { useContext } from "react";

import { QuizContext } from "../../contexts/quiz-context.jsx";

export default function Question() {
  const { currentQuestion } = useContext(QuizContext);

  return (
    <div>
      <p>{currentQuestion.text}</p>
    </div>
  );
}
