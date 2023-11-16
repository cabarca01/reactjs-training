import Button from "./UI/Button";

export default function Sidebar({
  projects,
  selectedProjectId,
  onProjectSelect,
  onCreate,
}) {
  const buttonClasses = "w-full text-left px-2 py-1 rounded-sm my-1";

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <div>
        <Button onClick={onCreate}>+ Add Project</Button>
      </div>

      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              className={
                buttonClasses + (project.id === selectedProjectId
                  ? " text-stone-200 bg-stone-800"
                  : " hover:text-stone-200 hover:bg-stone-800")
              }
              onClick={() => {
                onProjectSelect(project.id);
              }}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
