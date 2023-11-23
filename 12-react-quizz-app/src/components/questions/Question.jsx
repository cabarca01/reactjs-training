import { useContext, useCallback, useRef } from "react";
import { shuffleList } from "../../utils/utils";

import { QuizContext } from "../../contexts/quiz-context.jsx";
import AnswerList from "./AnswerList";
import AnswerTimer from "./AnswerTimer";
import Summary from "../UI/Summary.jsx";

export default function Question() {
  const context = useContext(QuizContext);

  const questionTime = 20000;
  const isQuizCompleted = context.availableQuestions.length === 0;
  const shuffledAnswerList = useRef();

  if (context.answerState === null && !isQuizCompleted) {
    shuffledAnswerList.current = shuffleList(context.currentQuestion.answers);
  }

  const answerTimeoutHandler = useCallback(() => {
    context.onRegisterAnswer(null);
  }, [context.onRegisterAnswer]);

  const selectAnswerHandler = useCallback(
    (answer) => {
      context.onRegisterAnswer(answer);
      const selectedTimer = setTimeout(() => {
        context.onUpdateAnswerState();
        setTimeout(() => {
          context.onUpdateAnswerState();
        }, 1000);
      }, 2000);
      return () => {
        clearTimeout(selectedTimer);
      };
    },
    [context.onUpdateAnswerState, context.onRegisterAnswer]
  );

  if (isQuizCompleted && context.answerState === null) {
    return <Summary />;
  }

  return (
    <div id="quiz">
      {context.answerState === null && (
        <AnswerTimer
          key={context.currentQuestion.id}
          timeout={questionTime}
          onTimeout={answerTimeoutHandler}
        />
      )}
      <div id="question">
        <p>{context.currentQuestion.text}</p>
        <AnswerList
          shuffledAnswers={shuffledAnswerList.current}
          onSelectAnswer={selectAnswerHandler}
        />
      </div>
    </div>
  );
}
