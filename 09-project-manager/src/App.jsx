import { useState } from "react";
import { findProject } from "./utils/utils";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/projects/NewProject";
import NoProjectSelected from "./components/projects/NoProjectSelected";
import ProjectDetails from "./components/projects/ProjectDetail";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [content, setContent] = useState("no-project");
  const [project, setProject] = useState({});

  function saveProjectHandler(project) {
    setProjectList((prevList) => [project, ...prevList]);
  }

  function setContentHandler(contentId) {
    setContent(contentId);
  }

  function selectProjectHandler(projectId) {
    setProject(findProject(projectList, projectId));
    setContent("view-project");
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projectList}
        onProjectSelect={selectProjectHandler}
        selectedProjectId={project.id ? project.id : null}
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
      {content === "view-project" && <ProjectDetails project={project} />}
    </main>
  );
}

export default App;
