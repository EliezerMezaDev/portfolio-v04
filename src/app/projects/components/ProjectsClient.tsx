"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Button from "@components/ui/Button"
import ProjectCard from "./ProjectCard"
import FixedButon from "@components/ui/FixedButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { Project } from "@lib/types"
import Hr from "@components/ui/Hr"

interface ProjectWithTechNames extends Project {
  techNames: string[]
}

const categories = [
  { id: 0, label: "Todos", techCategory: null },
  { id: 1, label: "Frontend", techCategory: "frontend" },
  { id: 2, label: "Mobile", techCategory: "mobile" },
  { id: 3, label: "Backend", techCategory: "backend" },
]

interface ProjectsClientProps {
  projects: ProjectWithTechNames[]
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
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <main className="overflow-hidden">
        <FixedButon href="/#projects">
          <FontAwesomeIcon icon={faChevronLeft} className="pr-10 text-black" />
        </FixedButon>

        <div className="mt-16 flex w-full flex-col items-center justify-start pl-10 md:pl-32">
          <div className="my-5 flex flex-col items-center justify-center self-start">
            <Hr variant="long"></Hr>
            <motion.h1
              className="mt-3 text-3xl font-bold"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, type: "spring" }}
            >
              Proyectos
            </motion.h1>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring" }}
          className="my-5 flex flex-row flex-wrap items-start justify-center "
        >
          <span className="flex rounded-full border border-main overflow-hidden">
            {categories.map((category) => {
              const isActive = activeCategory === category.techCategory
              return (
                <button
                  key={category.id}
                  className={`title box-border cursor-pointer px-6 py-2 text-lg transition duration-300 ease-in-out ${
                    isActive
                      ? "border border-transparent bg-linear-to-r from-main to-main/85 text-light hover:scale-95"
                      : "border border-black/5 bg-linear-to-r from-light-2 to-light-3/15 text-main hover:scale-95"
                  }}`}
                  onClick={() => setActiveCategory(category.techCategory)}
                >
                  {category.label}
                </button>
              )
            })}
          </span>
        </motion.div>

        <div className="container mx-auto mb-10 grid w-screen cursor-pointer grid-cols-1 gap-4 md:px-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              index={index}
              project={project}
              key={project.slug}
              activeCategory={activeCategory}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="my-5 flex flex-col items-center justify-center self-start"
        >
          <Link href="projects/archive" className="hover:underline">
            Ver en el archivo
          </Link>
        </motion.div>
      </main>
    </>
  )
}
