import { createContext, useReducer } from "react";
import { getQuestion } from "../utils/utils.js";
import { filter } from "lodash";

import questions from "../questions.js";

export const QuizContext = createContext({
  currentQuestion: {},
  answers: [],
  availableQuestions: [],
  onRegisterAnswer: () => {},
});

function quizReducer(quizState, action) {
  const updatedState = { ...quizState };

  if (action.identifier === "REGISTER_ANSWER") {
    const userAnswer = {
      questionId: updatedState.currentQuestion.id,
      answer: action.payload.answer,
      isCorrect:
        updatedState.currentQuestion.answers[0] === action.payload.answer,
    };

    const updatedQuestionList = filter(
      updatedState.availableQuestions,
      (question) => question.id !== userAnswer.questionId
    );

    updatedState.currentQuestion = getQuestion(updatedQuestionList);
    updatedState.answers = [userAnswer, ...updatedState.answers];
    updatedState.availableQuestions = updatedQuestionList;
  }

  return updatedState;
}

export default function QuizContextProvider({ children }) {
  const [currentQuizState, quizDispatch] = useReducer(quizReducer, {
    currentQuestion: getQuestion(questions),
    availableQuestions: questions,
    answers: [],
  });

  function registerAnswerHandler(answer) {
    quizDispatch({
      identifier: "REGISTER_ANSWER",
      payload: {
        answer,
      },
    });
  }

  const quizProviderValue = {
    currentQuestion: currentQuizState.currentQuestion,
    answers: currentQuizState.answers,
    availableQuestions: currentQuizState.availableQuestions,
    onRegisterAnswer: registerAnswerHandler,
  };

  return (
    <QuizContext.Provider value={quizProviderValue}>
      {children}
    </QuizContext.Provider>
  );
}
