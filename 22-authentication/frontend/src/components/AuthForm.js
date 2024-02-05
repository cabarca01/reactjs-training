import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const [params] = useSearchParams();
  const isLogin = params.get("mode") === "login";
  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>

        {actionData && actionData.errors && (
          <ul>
            {Object.values(actionData.errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={navigation.state === "submitting"}>
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
