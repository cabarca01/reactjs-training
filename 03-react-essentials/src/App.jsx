// dependencies
import Header from "./components/UI/Header";
import CoreConceptsList from "./components/CoreConcepts/CoreConceptsList";
import ExamplesList from "./components/Examples/ExamplesList";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConceptsList />
        <ExamplesList />
      </main>
    </div>
  );
}

export default App;
