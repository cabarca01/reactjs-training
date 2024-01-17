import { useState } from "react";

export function useInput(defaultValue) {
  const [enteredData, setEnteredData] = useState(defaultValue);
  const [isEditData, setIsEditData] = useState(true);

  function dataChangeHandler(event) {
    setEnteredData(event.target.value);
    setIsEditData(true);
  }

  function inputBlurHandler() {
    setIsEditData(false);
  }

  function inputResetHandler() {
    setEnteredData(defaultValue)
    setIsEditData(true);
  }

  return {
    enteredData,
    isEditData,
    dataChangeHandler,
    inputBlurHandler,
    inputResetHandler
  }
}
