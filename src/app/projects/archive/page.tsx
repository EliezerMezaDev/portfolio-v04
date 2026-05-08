import { getAllProjects } from "@lib/projects"
import ArchiveClient from "./ArchiveClient"

export default function Page() {
  const projects = getAllProjects()
  return <ArchiveClient projects={projects} />
}