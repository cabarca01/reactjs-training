const server = "http://localhost:3000";

export async function getAvailablePlaces() {
  const response = await fetch(server + "/places");
  
  if (!response.ok) {
    throw new Error("Could not retrieve available places!");
  }

  const respBody = await response.json();
  return respBody.places;
}

export async function getSelectedPlaces (){
    const response = await fetch(server + "/user-places");
  
    if (!response.ok) {
      throw new Error("Could not retrieve user-selected places!");
    }
  
    const respBody = await response.json();
    return respBody;
}

export async function updateSelectedPlaces(placeList) {
  const response = await fetch(server + "/user-places", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({places: placeList}),
  });

  if (!response.ok) {
    throw new Error("Could not update selected places!");
  }

  const respBody = response.json();
  return respBody.message; 
}
