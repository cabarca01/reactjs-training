import quizLogoImg from "../../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={quizLogoImg} alt="A quiz sheet to fill out" />
      <h1>REACT QUIZ</h1>
    </header>
  );
}
