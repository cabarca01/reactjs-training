import { useContext, useCallback } from "react";

import { QuizContext } from "../../contexts/quiz-context.jsx";
import AnswerList from "./AnswerList";
import AnswerTimer from "./AnswerTimer";

export default function Question() {
  const { currentQuestion, onRegisterAnswer } = useContext(QuizContext);
  const questionTime = 10000;

  const answerTimeoutHandler = useCallback(() => {
    onRegisterAnswer(null);
  }, [onRegisterAnswer]);

  return (
    <div id="quiz">
      <AnswerTimer
        key={currentQuestion.id}
        timeout={questionTime}
        onTimeout={answerTimeoutHandler}
      />
      <div id="question">
        <p>{currentQuestion.text}</p>
        <AnswerList />
      </div>
    </div>
  );
}
