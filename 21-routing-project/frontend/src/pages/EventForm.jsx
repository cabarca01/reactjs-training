import { useRouteLoaderData } from "react-router-dom";
import EventFormComponent from "../components/EventForm";

export default function EventForm() {
  const event = useRouteLoaderData("event-detail");
  return (
    <EventFormComponent event={event} method={event ? "edit" : "create"} />
  );
}
