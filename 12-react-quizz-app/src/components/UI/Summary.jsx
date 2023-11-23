import quizCompletedImg from "../../assets/quiz-complete.png";

import { find, filter } from "lodash";
import { useContext } from "react";
import { QuizContext } from "../../contexts/quiz-context";
import { getAllQuestions } from "../../utils/utils";

export default function Summary() {
  const { answers } = useContext(QuizContext);
  const totalAnswers = answers.length;

  const quizStats = {
    skipped: filter(answers, { answer: null }).length,
    correct: filter(answers, { isCorrect: true }).length,
    wrong: filter(answers, { isCorrect: false }).length,
  };
  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="Trophy with star" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            {quizStats.skipped} (
            {Math.round((quizStats.skipped * 100) / totalAnswers)}%)
          </span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">
            {quizStats.correct} (
            {Math.round((quizStats.correct * 100) / totalAnswers)}%)
          </span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">
            {quizStats.wrong} (
            {Math.round((quizStats.wrong * 100) / totalAnswers)}%)
          </span>
          <span className="text">Incorrect</span>
        </p>
      </div>
      <ol>
        {getAllQuestions().map((question, index) => {
          const userAnswer = find(answers, { questionId: question.id });
          let answerCss = "user-answer";
          if (userAnswer.answer === null) {
            answerCss += " skipped";
          } else if (userAnswer.isCorrect) {
            answerCss += " correct";
          } else {
            answerCss += " wrong";
          }

          return (
            <li key={question.id}>
              <h3>{index + 1}</h3>
              <p className="question">{question.text}</p>
              <p className={answerCss}>{userAnswer.answer ?? "Skipped!"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
