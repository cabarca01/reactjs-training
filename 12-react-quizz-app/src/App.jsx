import Header from "./components/UI/Header";
import Question from "./components/questions/Question";
import QuizContextProvider from "./contexts/quiz-context";

function App() {
  return (
    <>
      <Header />
      <QuizContextProvider>
        <main>
          <Question />
        </main>
      </QuizContextProvider>
    </>
  );
}

export default App;
