import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  fetchSingleEvent,
  queryClient,
  updateEvent,
} from "../../utils/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { eventId: id }],
    queryFn: ({ signal }) => fetchSingleEvent({ signal, id }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const previousData = queryClient.getQueryData([
        "events",
        { eventId: id },
      ]);
      const newEvent = data.event;

      await queryClient.cancelQueries({
        queryKey: ["events", { eventId: id }],
      });
      queryClient.setQueryData(["events", { eventId: id }], newEvent);
      return { previousData };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(
        ["events", { eventId: id }],
        context.previousData
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(["events", { eventId: id }]);
    },
  });

  function handleSubmit(formData) {
    mutate({ id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  let content;
  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to fetch event"
          message={error.info?.message || "Failed to fetch event details"}
        />
        <div className="form-actions">
          <Link to="../">Okay</Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}
