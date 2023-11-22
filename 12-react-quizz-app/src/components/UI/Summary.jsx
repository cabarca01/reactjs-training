import quizCompletedImg from "../../assets/quiz-complete.png";

export default function Summary() {
  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="Cup with star" />
      <h2>Quiz Completed!</h2>
    </div>
  );
}
