import { forwardRef, useRef, useImperativeHandle } from "react";

const NewTask = forwardRef(function NewTask({ onSave }, ref) {
  const taskRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      getValue() {
        return taskRef.current.value;
      },
      setValue(value) {
        taskRef.current.value = value;
      },
    };
  });

  return (
    <div className="flex items-center gap-4">
      <input
        ref={taskRef}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        required
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={onSave}>
        Add Task
      </button>
    </div>
  );
});

export default NewTask;
