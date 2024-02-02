import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventFormComponent from "../components/EventForm";

export async function eventFormPostAction({ request, params }) {
  const data = await request.formData();
  const event = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  let response;
  let responseBody;

  try {
    response = await fetch("http://localhost:8080/events", {
      method: "POST",
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
  return <EventFormComponent event={event} method={event ? "patch" : "post"} />;
}
