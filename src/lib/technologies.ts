import technologiesData from "@data/technologies.json"
import { Technology, TechnologyCategory, TechnologyData } from "./types"

const data = technologiesData as TechnologyData

export function getAllTechnologies(): Technology[] {
  return data.technologies
}

export function getAllCategories(): TechnologyCategory[] {
  return data.categories
}

export function getTechnologyById(id: string): Technology | undefined {
  return data.technologies.find((tech) => tech.id === id)
}

export function getTechnologiesByIds(ids: string[]): Technology[] {
  return data.technologies.filter((tech) => ids.includes(tech.id))
}

export function getTechnologiesByCategory(category: string): Technology[] {
  return data.technologies.filter((tech) => tech.category === category)
}

export function getCategoryById(id: string): TechnologyCategory | undefined {
  return data.categories.find((cat) => cat.id === id)
}