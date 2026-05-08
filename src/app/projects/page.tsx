import { getVisibleProjects } from "@lib/projects"
import ProjectsClient from "./components/ProjectsClient"

export default function Page() {
  const projects = getVisibleProjects()

  return <ProjectsClient projects={projects} />
}