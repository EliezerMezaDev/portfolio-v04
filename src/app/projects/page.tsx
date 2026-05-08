"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Button from "@components/ui/Button"
import Image from "next/image"

// images
import ProjectAll from "@public/image/projects.png"

import Hr from "@components/ui/Hr"
import ProjectCard from "./components/ProjectCard"
import Projects from "@data/projects.json"
import FixedButon from "@components/ui/FixedButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Hightlight from "@components/projects/Hightlight"
import { CodeEffect } from "@components/ui/CodeEffect"
import Hero from "@components/ui/Hero"

const categories = [
  { id: 1, label: "Desarrollo Web" },
  { id: 2, label: "Mobile" },
  { id: 3, label: "Otro" },
]

export default function Page() {
  const [activeCategory, setActiveCategory] = useState(1)
  const projects = Projects.Projects.filter((item) => item.show === true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <main className="overflow-hidden">
        <FixedButon href="/#projects">
          <FontAwesomeIcon icon={faChevronLeft} className="pr-10 text-black" />
        </FixedButon>

        <Hero
          title="Mis proyectos"
          desc="Aquí encontraras algunos de los proyectos en los que he trabajado"
          coverImg={ProjectAll}
        />

        <Hightlight />

        <div className="mt-16 flex w-full flex-col items-center justify-start pl-10 md:pl-32">
          <div className="my-5 flex flex-col items-center justify-center self-start">
            <Hr variant="long"></Hr>
            <motion.h1
              className="mt-3 text-3xl font-bold"
              initial={{
                opacity: 0,
                x: -200,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.7,
                type: "spring",
              }}
            >
              Otros proyectos destacados
            </motion.h1>
          </div>
        </div>

        {/* choose category */}
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "spring",
          }}
          className="my-5 flex flex-row flex-wrap items-start justify-center gap-3 md:gap-5"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`ease cursor-pointer rounded-lg px-2 py-2 transition-all duration-300 focus:bg-gray-300 focus:text-black focus:ring focus:ring-slate-500 md:px-4 ${
                activeCategory === category.id
                  ? "bg-gray-300 text-black hover:bg-gray-700 hover:text-white"
                  : "bg-gray-700 text-white hover:bg-gray-300 hover:text-black"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* projects */}
        <div className="container mx-auto mb-10 grid w-screen cursor-pointer grid-cols-1 gap-4 px-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              index={index}
              project={project}
              key={index}
              activeCategory={activeCategory}
            />
          ))}
        </div>

        {/* view in archive btn */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          className="my-5 flex flex-col items-center justify-center self-start"
        >
          <Button variation="primary">
            <Link href="projects/archive">Ver en el archivo</Link>
          </Button>
        </motion.div>
      </main>
    </>
  )
}
