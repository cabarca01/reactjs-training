import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventFormComponent from "../components/EventForm";

export async function eventFormSaveAction({ request, params }) {
  const data = await request.formData();
  const event = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const method = request.method;
  const url =
    method === "POST"
      ? "http://localhost:8080/events"
      : `http://localhost:8080/events/${params.eventId}`;

  let response;
  let responseBody;
  
  try {
    response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });

    responseBody = await response.json();
  } catch (error) {
    throw json(
      { message: "Could not save event" },
      { status: response.status }
    );
  }

  if (response.status === 422) {
    return new Response(JSON.stringify(responseBody), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!response.ok) {
    throw json(
      { message: responseBody.message || "Could not save event" },
      { status: response.status }
    );
  }

  return redirect("..");
}

export default function EventForm() {
  const event = useRouteLoaderData("event-detail");
  return <EventFormComponent event={event} method={event ? "PATCH" : "POST"} />;
}
