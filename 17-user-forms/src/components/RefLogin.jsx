import { useRef } from "react";

export default function Login() {
  const emailRef = useRef();
  const pwdRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("email: " + emailRef.current.value );
    console.log("password: " + pwdRef.current.value );
  }

  function handleReset() {
    document.getElementById("loginForm").reset();
  }

  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={pwdRef} />
        </div>
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat"  onClick={handleReset}>Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
