import { shuffle, find } from "lodash";
import questions from "../questions.js";

export function shuffleList(list) {
  return shuffle(list);
}

export function getQuestion(questionList) {
  const shuffleList = shuffle(questionList);
  return shuffleList[0];
}

export function getAllQuestions( id ) {
  return questions;
}