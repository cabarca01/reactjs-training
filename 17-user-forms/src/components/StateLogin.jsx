import { useState } from "react";

import { isNotEmpty, hasMinLength } from "../util/validation";

import Input from "./Input";

export default function Login() {
  const [enteredData, setEnteredData] = useState({
    email: "",
    password: "",
  });

  const [isEditData, setIsEditData] = useState({
    email: true,
    password: true,
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredData);
  }

  function handleReset() {
    setEnteredData({
      email: "",
      password: "",
    });
  }

  function dataChangeHandler(identifier, value) {
    setEnteredData((prevData) => ({
      ...prevData,
      [identifier]: value,
    }));

    setIsEditData((prevData) => ({
      ...prevData,
      [identifier]: true,
    }));
  }

  function inputBlurHandler(identifier) {
    setIsEditData((prevData) => ({
      ...prevData,
      [identifier]: false,
    }));
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
          onChange={(event) => dataChangeHandler("email", event.target.value)}
          onBlur={() => inputBlurHandler("email")}
          value={enteredData.email}
          error={!isEditData.email && !isNotEmpty(enteredData.email) && "Please enter a valid email"}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          onChange={(event) =>
            dataChangeHandler("password", event.target.value)
          }
          onBlur={() => inputBlurHandler("password")}
          value={enteredData.password}
          error={ !isEditData.password &&
            (!isNotEmpty(enteredData.password) ||
              !hasMinLength(enteredData.password, 6)) &&
            "Please enter a valid password"
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
