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

const categories: { id: number; label: string }[] = [
  { id: 1, label: "Desarrollo Web" },
  { id: 2, label: "Mobile" },
  { id: 3, label: "Otro" },
]

interface ProjectsClientProps {
  projects: ProjectWithTechNames[]
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [activeCategory, setActiveCategory] = useState<number>(1)

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
              Otros proyectos
            </motion.h1>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring" }}
          className="my-5 flex flex-row flex-wrap items-start justify-center gap-3 md:gap-5"
        >
          {categories.map((category, index) => {
            const isActive = activeCategory === category.id
            return (
              <Button
                key={index}
                variation={isActive ? "primary" : "secondary"}
                onClick={() => !isActive && setActiveCategory(category.id)}
              >
                {category.label}
              </Button>
            )
          })}
        </motion.div>

        <div className="container mx-auto mb-10 grid w-screen cursor-pointer grid-cols-1 gap-4 px-10 md:grid-cols-2">
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