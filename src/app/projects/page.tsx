import { getVisibleProjects } from "@lib/projects"
import ProjectsClient from "./components/ProjectsClient"

export default function Page() {
  const projects = getVisibleProjects()

  console.log("Projects:", projects)

  return <ProjectsClient projects={projects} />
}
