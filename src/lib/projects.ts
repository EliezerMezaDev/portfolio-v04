import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Project, ProjectFrontmatter } from "./types"
import { attachTechNamesToProject } from "./tech-utils"

const projectsDirectory = path.join(process.cwd(), "src/content/projects")

export function getAllProjects(): (Project & { techNames: string[] })[] {
  const files = fs.readdirSync(projectsDirectory).filter((file) => file.endsWith(".md"))

  const projects = files.map((filename) => {
    const filePath = path.join(projectsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)
    return { ...(data as ProjectFrontmatter), content }
  })

  return projects.sort((a, b) => Number(b.date) - Number(a.date)).map(attachTechNamesToProject)
}

export function getProjectBySlug(slug: string): (Project & { techNames: string[] }) | null {
  const filePath = path.join(projectsDirectory, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)
  return attachTechNamesToProject({ ...(data as ProjectFrontmatter), content })
}

export function getVisibleProjects(): (Project & { techNames: string[] })[] {
  return getAllProjects().filter((project) => project.show)
}