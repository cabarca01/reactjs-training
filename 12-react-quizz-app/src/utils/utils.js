import { shuffle } from "lodash";

export function shuffleList(list) {
  return shuffle(list);
}

export function getQuestion(questionList) {
  const shuffleList = shuffle(questionList);
  return shuffleList[0];
}
