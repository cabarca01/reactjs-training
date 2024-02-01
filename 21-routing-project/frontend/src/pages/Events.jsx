import { Link } from "react-router-dom";

const eventList = [
  { id: "ev1", title: "Event 1" },
  { id: "ev2", title: "Event 2" },
  { id: "ev3", title: "Event 3" },
];

export default function Events() {
  return (
    <>
      <h1>Events Page</h1>
      <div>
        <ul>
          {eventList.map((event) => (
            <li key={event.id}>
              <Link to={event.id}>{event.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
