import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");
  const resData = await response.json();
  return resData.events;
}

function Events() {
  const events = useLoaderData();

  return <EventsList events={events} />;
}

export default Events;
