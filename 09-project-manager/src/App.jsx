import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/projects/NewProject";
import NoProjectSelected from "./components/projects/NoProjectSelected";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [content, setContent] = useState("no-project");

  function saveProjectHandler(project) {
    setProjectList((prevList) => [project, ...prevList]);
  }

  function setContentHandler(contentId) {
    setContent(contentId);
  }

  function selectProjectHandler(projectId) {}
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projectList}
        onProjectSelect={selectProjectHandler}
        onCreate={() => {
          setContentHandler("new-project");
        }}
      />
      {content === "new-project" && (
        <NewProject
          onSave={saveProjectHandler}
          onCancel={() => {
            setContentHandler("no-project");
          }}
        />
      )}
      {content === "no-project" && (
        <NoProjectSelected
          onCreate={() => {
            setContentHandler("new-project");
          }}
        />
      )}
    </main>
  );
}

export default App;
