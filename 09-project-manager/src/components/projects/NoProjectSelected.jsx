import logoImg from "../../assets/no-projects.png";
import Button from "../UI/Button";

export default function NoProjectSelected( {onCreate} ) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={logoImg}
        className="w-16 h-16 object-contain mx-auto"
        alt="Clipboard with pen"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Please select a project in the sidebar or add a new one
      </p>

      <p className="mt-8">
        <Button onClick={onCreate}>Create new project</Button>
      </p>
    </div>
  );
}
