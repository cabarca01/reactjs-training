import { useRef } from "react";
import { v4 as uuidV4 } from "uuid";
import NewTask from "./NewTask";

export default function Tasks({ taskList, onTaskSave }) {
  const taskRef = useRef();

  function saveTaskHandler() {
    const task = {
      id: uuidV4(),
      title: taskRef.current.value,
    };
    taskRef.current.value = "";
    onTaskSave(task);
  }

  return (
    <section className="text-stone-800 my-4">
      <div>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onSave={saveTaskHandler} />

        {taskList.length === 0 && (
          <p className="text-stone-800 my-4">
            No tasks defined yet for this project.
          </p>
        )}
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {taskList.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              {task.title}
              <button className="text-stone-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
