import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function authenticateAction({ request }) {
  const data = await request.formData();
  const params = new URL(request.url).searchParams;
  const mode = params.get("mode");

  const actionUrl =
    mode === "login"
      ? "http://localhost:8080/login"
      : "http://localhost:8080/signup";

  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  let response;
  let responseBody;

  try {
    response = await fetch(actionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    responseBody = await response.json();
  } catch (error) {
    throw json(
      { message: "Failed to process request" },
      { status: response.status }
    );
  }

  if (response.status === 422 || response.status === 401) {
    return json(responseBody, { status: response.status });
  }

  if (!response.ok) {
    return json(
      { message: responseBody.message || "Failed to process request" },
      { status: response.status }
    );
  }

  const token = responseBody.token;
  const now = new Date();

  localStorage.setItem("token", token);
  localStorage.setItem("tokenExpiration", now.setHours(now.getHours() + 1));
  
  return redirect("/");
}
