import { createContext, useReducer } from "react";
import { getQuestion, getAllQuestions } from "../utils/utils.js";
import { filter } from "lodash";

export const QuizContext = createContext({
  currentQuestion: {},
  answers: [],
  answerState: "",
  availableQuestions: [],
  onRegisterAnswer: () => {},
  onUpdateAnswerState: () => {},
});

function quizReducer(quizState, action) {
  const updatedState = { ...quizState };

  if (action.identifier === "REGISTER_ANSWER") {
    console.log("REGISTER_ANSWER");
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

    updatedState.answers = [userAnswer, ...updatedState.answers];
    updatedState.availableQuestions = updatedQuestionList;
    if (userAnswer.answer === null) {
      updatedState.answerState = null;
      updatedState.currentQuestion = getQuestion(updatedQuestionList);
    } else {
      updatedState.answerState = "selected";
    }
  } else if (action.identifier === "UPDATE_ANSWER_STATE") {
    if (updatedState.answerState === "selected") {
      updatedState.answerState = updatedState.answers[0].isCorrect
        ? "correct"
        : "wrong";
    } else {
      updatedState.answerState = null;
      updatedState.currentQuestion = getQuestion(
        updatedState.availableQuestions
      );
    }
  }
  return updatedState;
}

export default function QuizContextProvider({ children }) {
  const [currentQuizState, quizDispatch] = useReducer(quizReducer, {
    currentQuestion: getQuestion(getAllQuestions()),
    answerState: null,
    availableQuestions: getAllQuestions(),
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

  function updateAnswerStateHandler(state) {
    quizDispatch({
      identifier: "UPDATE_ANSWER_STATE",
      payload: {},
    });
  }

  const quizProviderValue = {
    currentQuestion: currentQuizState.currentQuestion,
    answers: currentQuizState.answers,
    answerState: currentQuizState.answerState,
    availableQuestions: currentQuizState.availableQuestions,
    onRegisterAnswer: registerAnswerHandler,
    onUpdateAnswerState: updateAnswerStateHandler,
  };

  return (
    <QuizContext.Provider value={quizProviderValue}>
      {children}
    </QuizContext.Provider>
  );
}
