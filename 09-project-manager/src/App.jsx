import { useState } from "react";
import { findProject } from "./utils/utils";
import { filter, concat } from "lodash";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/projects/NewProject";
import NoProjectSelected from "./components/projects/NoProjectSelected";
import ProjectDetails from "./components/projects/ProjectDetail";

function App() {
  const [projectState, setProjectState] = useState({
    projects: [],
    selectedProject: undefined,
  });

  const isProjectSelected =
    projectState.selectedProject && projectState.selectedProject !== null;

  function saveProjectHandler(project) {
    setProjectState((prevState) => ({
      projects: [...prevState.projects, project],
      selectedProject: project,
    }));
  }

  function saveTaskHandler(task) {
    setProjectState((prevState) => {
      const newProjectList = filter(
        prevState.projects,
        (project) => project.id !== prevState.selectedProject.id
      );
      const updatedProject = {
        ...prevState.selectedProject,
        tasks: [...prevState.selectedProject.tasks, task],
      };
      return {
        projects: concat(newProjectList, updatedProject),
        selectedProject: updatedProject,
      };
    });
  }

  function deleteProjectHandler(projectId) {
    setProjectState((prevState) => ({
      projects: filter(
        prevState.projects,
        (project) => project.id !== projectId
      ),
      selectedProject: undefined,
    }));
  }

  function deleteTaskHandler(taskId) {
    setProjectState((prevState) => {
      const newProjectList = filter(
        prevState.projects,
        (project) => project.id !== prevState.selectedProject.id
      );
      const updatedProject = {
        ...prevState.selectedProject,
        tasks: filter(
          prevState.selectedProject.tasks,
          (task) => task.id !== taskId
        ),
      };
      return {
        projects: concat(newProjectList, updatedProject),
        selectedProject: updatedProject,
      };
    });
  }

  function selectProjectHandler(projectId) {
    const project =
      !projectId || projectId === null
        ? projectId
        : findProject(projectState.projects, projectId);
    setProjectState((prevState) => ({
      ...prevState,
      selectedProject: project,
    }));
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projectState.projects}
        onProjectSelect={selectProjectHandler}
        selectedProjectId={
          isProjectSelected ? projectState.selectedProject.id : null
        }
        onCreate={() => {
          selectProjectHandler(null);
        }}
      />
      {projectState.selectedProject === null && (
        <NewProject
          onSave={saveProjectHandler}
          onCancel={() => {
            selectProjectHandler(undefined);
          }}
        />
      )}
      {projectState.selectedProject === undefined && (
        <NoProjectSelected
          onCreate={() => {
            selectProjectHandler(null);
          }}
        />
      )}
      {isProjectSelected && (
        <ProjectDetails
          project={projectState.selectedProject}
          onSaveTask={saveTaskHandler}
          onDeleteProject={deleteProjectHandler}
          onDeleteTask={deleteTaskHandler}
        />
      )}
    </main>
  );
}

export default App;
