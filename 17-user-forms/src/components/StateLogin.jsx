import { useInput } from "./../hooks/useInput.js";

import { isNotEmpty, hasMinLength, isEmail } from "../util/validation";

import Input from "./Input";

function isEmailValid(data) {
  return isNotEmpty(data) && isEmail(data);
}

function isPasswordValid(data) {
  return isNotEmpty(data) && hasMinLength(data, 6);
}

export default function Login() {
  const {
    enteredData: emailData,
    isDataValid: emailValidation,
    dataChangeHandler: emailDataHandler,
    inputBlurHandler: emailBlurHandler,
    inputResetHandler: emailReset,
  } = useInput("", isEmailValid);

  const {
    enteredData: passwordData,
    isDataValid: passwordValidation,
    dataChangeHandler: passwordDataHandler,
    inputBlurHandler: passwordBlurHandler,
    inputResetHandler: passwordReset,
  } = useInput("", isPasswordValid);

  function handleSubmit(event) {
    event.preventDefault();
    if (!emailValidation || !passwordValidation) {
      return;
    }
    console.log("Sending HTML Form...");
  }

  function handleReset() {
    emailReset();
    passwordReset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          onChange={emailDataHandler}
          onBlur={emailBlurHandler}
          value={emailData}
          error={!emailValidation && "Please enter a valid email"}
          required
        />

        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          onChange={passwordDataHandler}
          onBlur={passwordBlurHandler}
          value={passwordData}
          error={!passwordValidation && "Please enter a valid password"}
          required
        />
      </div>

      <p className="form-actions">
        <button
          type="button"
          className="button button-flat"
          onClick={handleReset}
        >
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
