import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredData, setEnteredData] = useState(defaultValue);
  const [isEditData, setIsEditData] = useState(true);

  const isDataValid = isEditData ? true : validationFn(enteredData);

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
    isDataValid,
    dataChangeHandler,
    inputBlurHandler,
    inputResetHandler
  }
}
