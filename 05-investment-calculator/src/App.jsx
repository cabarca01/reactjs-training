import { useState } from "react";
import Header from "./components/ui/Header";
import UserInputSection from "./components/user-input/UserInputSection";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [investmentParams, setInvestmentParams] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1,
  });

  function changeInvestmentParameterHandler(parameter, value) {
    setInvestmentParams((prevParams) => {
      return {
        ...prevParams,
        [parameter]: parseFloat(value),
      };
    });
  }

  return (
    <main>
      <Header />
      <UserInputSection parameters={investmentParams} onChangeParams={changeInvestmentParameterHandler} />
      <ResultsTable parameters={investmentParams} />
    </main>
  );
}

export default App;
