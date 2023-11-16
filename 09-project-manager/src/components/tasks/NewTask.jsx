export default function NewTask({ onSave }) {
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
}
