import { useParams } from "react-router-dom";

export default function EventDetails() {
  const urlParams = useParams();
  return (
    <>
      <h1>Details for the event: {urlParams.eventId}</h1>
    </>
  );
}
