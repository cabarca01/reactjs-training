import { json, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

export default function EventDetails() {
  const event = useRouteLoaderData("event-detail");
  return <EventItem event={event} />;
}

export async function eventDetailLoader({ request, params }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId
  );
  if (!response.ok) {
    throw json(
      { message: "Could not fetch event details" },
      { status: response.status }
    );
  }
  const respBody = await response.json();
  return respBody.event;
}
