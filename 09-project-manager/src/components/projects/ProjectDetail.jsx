import { useRef } from "react";
import { getDateString } from "../../utils/utils";

import Tasks from "../tasks/Tasks";
import ConfirmModal from "../UI/ConfirmModal";

export default function ProjectDetails({
  project,
  onSaveTask,
  onDeleteProject,
  onDeleteTask,
}) {
  const confirmRef = useRef();

  function deleteProjectHandler() {
    confirmRef.current.open();
  }

  return (
    <>
      <ConfirmModal
        ref={confirmRef}
        onConfirm={() => {
          onDeleteProject(project.id);
        }}
      >
        <h2 className="text-xl font-bold text-stone-500 my-4">Warning!!</h2>
        <p className="text-stone-400 mb-4">
          You are about to delete the current project.
        </p>
        <p className="text-stone-400 mb-4">Do you want to proceed?</p>
      </ConfirmModal>

      <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">
              {project.title}
            </h1>
            <button
              className="text-stone-600 hover:text-stone-950"
              onClick={deleteProjectHandler}
            >
              Delete
            </button>
          </div>
          <p className="mb-4 text-stone-400">
            {getDateString(project.dueDate)}
          </p>
          <p className="text-stone-600 whitespace-pre-wrap">
            {project.description}
          </p>
        </header>

        <Tasks
          taskList={project.tasks}
          onTaskSave={onSaveTask}
          onTaskDelete={onDeleteTask}
        />
      </div>
    </>
  );
}
