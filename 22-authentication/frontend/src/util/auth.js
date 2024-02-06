import { redirect } from "react-router-dom";

function removeAuthData() {
  localStorage.removeItem("token");
  localStorage.removeItem("tokenExpiration");
}

export function getAuthToken() {
  const token = localStorage.getItem("token");
  const tokenExpiration = new Date(localStorage.getItem("tokenExpiration"));
  const now = new Date();

  if (tokenExpiration.getTime() - now.getTime() < 0) {
    removeAuthData();
    return null;
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token || token === null) {
    return redirect("/auth?mode=login");
  }

  return null;
}
