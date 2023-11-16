import { forwardRef } from "react";

const NewTask = forwardRef(function NewTask({ onSave }, ref) {
  function saveProjectHandler(event) {
    event.preventDefault();
    onSave();
  }

  return (
    <form onSubmit={saveProjectHandler}>
      <div className="flex items-center gap-4">
        <input
          ref={ref}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          required
        />
        <button className="text-stone-700 hover:text-stone-950" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
});

export default NewTask;
