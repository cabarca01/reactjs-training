const server = "http://localhost:3000";

export async function getMealList() {
  const response = await fetch(server + "/meals");

  if (!response.ok) {
    throw new Error("Could not fetch list of meals");
  }

  const respBody = await response.json();
  return respBody;
}
