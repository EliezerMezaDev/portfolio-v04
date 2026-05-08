import { Experience, Project } from "./types"

export function getTechnologyById(id: string): string {
  const allTech: Record<string, string> = {
    nextjs: "Next.js", react: "React", nuxt: "Nuxt", astro: "Astro", angular: "Angular",
    ionic: "Ionic", flutter: "Flutter", dart: "Dart", nodejs: "Node.js", django: "Django",
    strapi: "Strapi", bun: "Bun", typescript: "TypeScript", tailwindcss: "Tailwind CSS",
    shadcniui: "Shadcn UI", prisma: "Prisma", mysql: "MySQL", postgresql: "PostgreSQL",
  }
  return allTech[id] || id
}

export function resolveTechNames(techIds: string[]): string[] {
  return techIds.map((id) => getTechnologyById(id))
}

export function attachTechNames<T extends { tech: string[] }>(item: T): T & { techNames: string[] } {
  return { ...item, techNames: resolveTechNames(item.tech) }
}

export function attachTechNamesToItems<T extends { tech: string[] }>(items: T[]): (T & { techNames: string[] })[] {
  return items.map(attachTechNames)
}

export function attachTechNamesToExperience(exp: Experience): Experience & { techNames: string[] } {
  return { ...exp, techNames: resolveTechNames(exp.tech) }
}

export function attachTechNamesToProject(proj: Project): Project & { techNames: string[] } {
  return { ...proj, techNames: resolveTechNames(proj.tech) }
}