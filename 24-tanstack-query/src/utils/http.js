export async function fetchEvents({ searchTerm, signal }) {
  let fetchUrl = "http://localhost:3000/events";

  console.log(searchTerm);
  if (searchTerm && searchTerm != null) {
    fetchUrl += "?search=" + searchTerm;
  }

  const response = await fetch(fetchUrl, { signal: signal });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();

  return events;
}
