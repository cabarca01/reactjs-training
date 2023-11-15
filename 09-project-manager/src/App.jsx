import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/projects/NewProject";

function App() {
  const [projectList, setProjectList] = useState([]);

  function saveProjectHandler(project) {
    setProjectList((prevList) => ([project, ...prevList]));
  }

  function selectProjectHandler(projectId) {}
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projectList} onProjectSelect={selectProjectHandler} />
      <NewProject onSave={saveProjectHandler}/>
    </main>
  );
}

export default App;
