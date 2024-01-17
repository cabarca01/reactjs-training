import { useInput } from "./../hooks/useInput.js";

import { isNotEmpty, hasMinLength } from "../util/validation";

import Input from "./Input";

export default function Login() {
  const {
    enteredData: emailData,
    isEditData: emailEdit,
    dataChangeHandler: emailDataHandler,
    inputBlurHandler: emailBlurHandler,
    inputResetHandler: emailReset
  } = useInput("");

  const {
    enteredData: passwordData,
    isEditData: passwordEdit,
    dataChangeHandler: passwordDataHandler,
    inputBlurHandler: passwordBlurHandler,
    inputResetHandler: passwordReset
  } = useInput("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Sending HTML Form...");
    handleReset();
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
          error={
            !emailEdit &&
            !isNotEmpty(emailData) &&
            "Please enter a valid email"
          }
        />

        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          onChange={passwordDataHandler}
          onBlur={passwordBlurHandler}
          value={passwordData}
          error={
            !passwordEdit &&
            (!isNotEmpty(passwordData) ||
              !hasMinLength(passwordData, 6)) &&
            "Please enter a valid password"
          }
        />
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat" onClick={handleReset}>
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
