import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import {
  deleteEvent,
  fetchSingleEvent,
  queryClient,
} from "../../utils/http.js";
import Header from "../Header.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { eventId: id }],
    queryFn: ({ signal }) => fetchSingleEvent({ signal, id }),
  });

  const {
    mutate,
    isPending: isDeletePending,
    isError: isDeleteError,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  function deleteHandler() {
    mutate({ id });
  }

  function startDeleteHandler() {
    setIsDeleting(true);
  }

  function stopDeleteHandler() {
    setIsDeleting(false);
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={stopDeleteHandler}>
          {isDeleteError && (
            <ErrorBlock
              title="Failed to delete event"
              message={deleteError.info?.message}
            />
          )}
          <h2>Are you sure?</h2>
          <p>
            Do you really want to delete this event. Be aware that this action
            cannot be undone.
          </p>
          <div className="form-actions">
            {isDeletePending && <p>Deleting event...</p>}
            {!isDeletePending && (
              <>
                <button onClick={stopDeleteHandler}>Cancel</button>
                <button onClick={deleteHandler}>Delete</button>
              </>
            )}
          </div>
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isPending && (
        <div id="event-details-content" className="center">
          <p>Fetching event details...</p>
        </div>
      )}
      {isError && (
        <ErrorBlock
          title="Failed to fetch event details"
          message={error.info?.message}
        />
      )}
      {data && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>

            <nav>
              <button onClick={startDeleteHandler}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time
                  dateTime={`Todo-DateT$Todo-Time`}
                >{`${data.date} @ ${data.time}`}</time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
