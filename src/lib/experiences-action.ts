"use server"

import { Experience } from "./types"

async function getAllExperiencesServer(): Promise<Experience[]> {
  const fs = require("fs")
  const path = require("path")

  const experiencesDirectory = path.join(process.cwd(), "src/content/experiences")

  const files = fs.readdirSync(experiencesDirectory).filter((file: string) => file.endsWith(".md"))

  const experiences = files.map((filename: string) => {
    const filePath = path.join(experiencesDirectory, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const matter = require("gray-matter")
    const { data, content } = matter(fileContent)
    const allTech: Record<string, string> = {
      nextjs: "Next.js", react: "React", nuxt: "Nuxt", astro: "Astro", angular: "Angular",
      ionic: "Ionic", flutter: "Flutter", dart: "Dart", nodejs: "Node.js", django: "Django",
      strapi: "Strapi", bun: "Bun", typescript: "TypeScript", tailwindcss: "Tailwind CSS",
      shadcniui: "Shadcn UI", prisma: "Prisma", mysql: "MySQL", postgresql: "PostgreSQL",
    }
    return {
      startDate: data.startDate,
      endDate: data.endDate,
      company: data.company,
      site: data.site,
      position: data.position,
      type: data.type,
      location: data.location,
      tech: data.tech || [],
      techNames: (data.tech || []).map((id: string) => allTech[id] || id),
      content,
    }
  })

  return experiences.sort((a: Experience, b: Experience) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
}

export { getAllExperiencesServer }