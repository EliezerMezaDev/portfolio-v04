export interface Technology {
  id: string
  name: string
  category: string
}

export interface TechnologyCategory {
  id: string
  name: string
}

export interface TechnologyData {
  categories: TechnologyCategory[]
  technologies: Technology[]
}

export type ImageType = "flat" | "desktop" | "android"

export interface ProjectImage {
  src: string
  type?: ImageType
}

export interface ProjectFrontmatter {
  title: string
  slug: string
  date: string
  show: boolean
  own: boolean
  role: string
  preview?: string
  code?: string
  thumbnail: string
  images: ProjectImage[]
  category: number[]
  tech: string[]
}

export interface Project extends ProjectFrontmatter {
  content: string
}

export interface ExperienceFrontmatter {
  startDate: string
  endDate: string
  company: string
  site?: string
  position: string
  type: string
  location: string
  tech: string[]
}

export interface Experience extends ExperienceFrontmatter {
  content: string
}
