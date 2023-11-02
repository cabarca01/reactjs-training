// dependencies
import Header from "./components/UI/Header";
import CoreConceptsList from "./components/CoreConcepts/CoreConceptsList";
import ExamplesList from "./components/Examples/ExamplesList";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptsList />
        <ExamplesList />
      </main>
    </>
  );
}

export default App;
