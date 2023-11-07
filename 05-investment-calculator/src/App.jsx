import { useState } from "react";
import Header from "./components/ui/Header";
import UserInputSection from "./components/user-input/UserInputSection";

function App() {
  const [investmentParams, setInvestmentParams] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function changeInvestmentParameterHandler(parameter, value) {
    setInvestmentParams((prevParams) => {
      return {
        ...prevParams,
        [parameter]: value,
      };
    });
  }

  return (
    <main>
      <Header />
      <UserInputSection parameters={investmentParams} onChangeParams={changeInvestmentParameterHandler} />
    </main>
  );
}

export default App;
