import { find } from "lodash";

export function findProject(projects, projectId) {
  return find(projects, { id: projectId });
}

export function getDateString(date) {
    const options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    return date.toLocaleDateString('en-US', options);
}
