import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function fetchEvents({ searchTerm, signal }) {
  let fetchUrl = "http://localhost:3000/events";

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

export async function createEvent(eventData) {
  const response = await fetch("http://localhost:3000/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    const error = new Error("An error occurred while saving the new event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();

  return event;
}

export async function fetchEventImages({ signal }) {
  const response = await fetch("http://localhost:3000/events/images", {
    signal: signal,
  });

  if (!response.ok) {
    const error = new Error(
      "An error occurred while fetching the list of event images"
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { images } = await response.json();
  return images;
}
