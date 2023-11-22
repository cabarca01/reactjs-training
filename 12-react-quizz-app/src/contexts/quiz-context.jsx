import { createContext, useReducer } from "react";
import { find, random } from "lodash";

import questions from "../questions.js";

export const QuizContext = createContext({
  currentQuestion: null,
  answers: [],
  availableQuestions: [],
  onRegisterAnswer: () => {},
});

function quizReducer({ quizState, action }) {
  const updatedState = { ...quizState };
  return updatedState;
}

function getQuestion(questionList) {
  const index = random(questionList.length - 1);
  return questionList[index];
}

export default function QuizContextProvider({ children }) {
  const [currentQuizState, quizDispatch] = useReducer(quizReducer, {
    currentQuestion: getQuestion(questions),
    availableQuestions: questions,
    answers: [],
  });

  const quizProviderValue = {
    currentQuestion: currentQuizState.currentQuestion,
    answers: currentQuizState.answers,
    availableQuestions: currentQuizState.availableQuestions,
    onRegisterAnswer: () => {},
  };

  return (
    <QuizContext.Provider value={quizProviderValue}>
      {children}
    </QuizContext.Provider>
  );
}
