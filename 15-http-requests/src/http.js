const server = "http://localhost:3000";

export async function getAvailablePlaces() {
  const response = await fetch(server + "/places");
  const respBody = await response.json();

  if (!response.ok) {
    throw new Error("Could not retrieve available places!");
  }

  return respBody.places;
}