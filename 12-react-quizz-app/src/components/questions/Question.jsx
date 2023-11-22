import { useContext, useCallback } from "react";

import { QuizContext } from "../../contexts/quiz-context.jsx";
import AnswerList from "./AnswerList";
import AnswerTimer from "./AnswerTimer";
import Summary from "../UI/Summary.jsx";

export default function Question() {
  const { currentQuestion, availableQuestions, onRegisterAnswer } =
    useContext(QuizContext);
  const questionTime = 10000;
  const isQuizCompleted = availableQuestions.length === 0;

  const answerTimeoutHandler = useCallback(() => {
    onRegisterAnswer(null);
  }, [onRegisterAnswer]);

  if (isQuizCompleted) {
    return <Summary />;
  }

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
