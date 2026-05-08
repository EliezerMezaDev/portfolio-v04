import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import BlurImage from "@public/image/placeholder/blur.jpg"
import { Project } from "@lib/types"

interface ProjectWithTechNames extends Project {
  techNames: string[]
}

interface ProjectCardProps {
  project: ProjectWithTechNames
  index: number
  activeCategory: string | null
}

const techCategoryMap: Record<string, string> = {
  nextjs: "frontend",
  react: "frontend",
  nuxt: "frontend",
  astro: "frontend",
  angular: "frontend",
  ionic: "mobile",
  flutter: "mobile",
  dart: "mobile",
  nodejs: "backend",
  django: "backend",
  strapi: "backend",
  bun: "backend",
  typescript: "tools",
  tailwindcss: "tools",
  shadcniui: "tools",
  prisma: "database",
  mysql: "database",
  postgresql: "database",
}

export default function ProjectCard({
  project,
  index,
  activeCategory,
}: ProjectCardProps) {
  if (activeCategory) {
    const projectCategories = project.tech.map(
      (id) => techCategoryMap[id] || id
    )
    if (!projectCategories.includes(activeCategory)) return null
  }

  const firstParagraph = project.content.split("\n\n")[0] || project.content

  return (
    <Link href={`projects/${project.slug}`}>
      <motion.div
        className="group/tes relative z-10 mb-5 flex aspect-video h-auto w-full flex-col items-start justify-center bg-darken px-5 py-20 md:px-10 md:py-2"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring" }}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          placeholder="blur"
          className="ease object-cover opacity-10 transition-all duration-500 group-hover/tes:opacity-100"
          blurDataURL={BlurImage.src}
        />
        <div className="absolute rounded-br-lg top-0 left-0 bg-dark px-4 py-2">
          <h4 className="font-medium text-light">{project.date}</h4>
        </div>
        {project.own && (
          <div className="absolute right-0 bottom-0 z-20 rounded-tl-lg bg-main px-3 py-1">
            <span className="text-base font-semibold text-white">Personal</span>
          </div>
        )}
        <div className="ease content z-10 text-center opacity-100 transition-all duration-500 group-hover/tes:opacity-0">
          <h1 className="mb-3 text-3xl font-bold text-light">
            {project.title}
          </h1>
          <p className="line-clamp-2 text-light-2">{firstParagraph}</p>
          <div className="mt-5 flex flex-row flex-wrap items-center justify-center gap-2">
            {project.techNames.map((name, idx) => (
              <span
                key={idx}
                className="rounded-full border-dark bg-linear-to-r from-main to-main/75 px-4 py-2 text-sm font-medium text-light shadow-md"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
