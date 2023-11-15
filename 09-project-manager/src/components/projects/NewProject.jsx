import { useRef } from "react";
import { v4 as uuidV4 } from "uuid";

import Input from "../UI/Input";

export default function NewProject({ onSave, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function clearForm() {
    titleRef.current.clear();
    descriptionRef.current.clear();
    dateRef.current.clear();
  }

  function saveProjectHandler(event) {
    event.preventDefault();

    const newProject = {
      id: uuidV4(),
      title: titleRef.current.value(),
      description: descriptionRef.current.value(),
      dueDate: new Date(dateRef.current.value()),
    };
    clearForm();
    onSave(newProject);
  }

  return (
    <form onSubmit={saveProjectHandler}>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            {" "}
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
      </div>

      <Input
        key="titleInput"
        ref={titleRef}
        type="text"
        label="Title"
        required
      />
      <Input
        key="descriptionInput"
        ref={descriptionRef}
        type="textarea"
        label="Description"
        required
      />
      <Input
        key="dueDateInput"
        ref={dateRef}
        type="date"
        label="Due Date"
        required
      />
    </form>
  );
}
