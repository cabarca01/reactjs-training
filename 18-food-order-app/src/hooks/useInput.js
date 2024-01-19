import { useState } from "react";

export default function useInput(defaultValue, validationFn) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isEditing, setIsEditing] = useState(true);

  function onChangeHandler(event) {
    setIsEditing(true);
    setInputValue(event.target.value);
  }

  function onBlurHandler() {
    setIsEditing(false);
  }

  function resetHandler() {
    setIsEditing(true);
    setInputValue(defaultValue);
  }

  const isInputValid = isEditing ? true : validationFn(inputValue);

  return {
    inputValue,
    isInputValid,
    onChangeHandler,
    onBlurHandler,
    resetHandler,
  };
}
