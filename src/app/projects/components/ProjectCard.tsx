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
  activeCategory: number
}

export default function ProjectCard({ project, index, activeCategory }: ProjectCardProps) {
  if (!project.category.includes(activeCategory)) return null

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
        <div className="absolute top-0 left-0 bg-dark px-4 py-2">
          <h4 className="font-medium text-light">{project.year}</h4>
        </div>
        <div className="ease content z-10 text-center opacity-100 transition-all duration-500 group-hover/tes:opacity-0">
          <h1 className="mb-3 text-3xl font-bold text-light">{project.title}</h1>
          <p className="line-clamp-2 text-light-2">{firstParagraph}</p>
          <div className="mt-5 flex flex-row flex-wrap items-center justify-center gap-2">
            {project.techNames.map((name, idx) => (
              <span key={idx} className="rounded-full border-dark bg-linear-to-r from-main to-main/75 px-4 py-2 text-sm font-medium text-light shadow-md">
                {name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}