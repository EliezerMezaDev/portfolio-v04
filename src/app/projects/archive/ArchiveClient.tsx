"use client"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import FixedButon from "@components/ui/FixedButton"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { Project } from "@lib/types"

interface ProjectWithTechNames extends Project {
  techNames: string[]
}

interface ArchiveClientProps {
  projects: ProjectWithTechNames[]
}

export default function ArchiveClient({ projects }: ArchiveClientProps) {
  return (
    <>
      <main className="overflow-hidden">
        <FixedButon href="/projects">
          <FontAwesomeIcon icon={faChevronLeft} className="pr-10 text-black" />
        </FixedButon>
        <div className="mt-10 mb-10 flex min-h-screen w-screen flex-col items-center justify-center p-10 md:mt-0">
          <div className="my-5 flex flex-col items-center justify-center self-start">
            <motion.div
              className="mb-3 h-1 w-28 self-start rounded-full bg-gray-700"
              initial={{ opacity: 0, x: -250 }}
              animate={{ opacity: 1, x: 50 }}
              transition={{ delay: 0.5, duration: 1, type: "spring" }}
            />
            <motion.div
              className="h-1 w-28 rounded-full bg-gray-700"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1, type: "spring" }}
            />
            <motion.h1
              className="mt-3 text-3xl font-bold"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 1, type: "spring" }}
            >
              Archivos
            </motion.h1>
          </div>

          <div className="w-full mx-auto grid grid-cols-1 md:px-10">
            <table className="space-y-3">
              <thead>
                <tr className="ease transition-all duration-500">
                  <th className="text-start">Fecha</th>
                  <th className="text-start">Proyecto</th>
                  <th className="text-start">Stack</th>
                  <th className="text-start">Enlances</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.slug} className="ease transition-all duration-500">
                    <td>{project.date}</td>
                    <td>
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </td>
                    <td>{project.techNames.join(", ")}</td>
                    <td>
                      <div className="flex flex-row items-center justify-start">
                        {project.code && (
                          <a href={project.code} title="Ver en GitHub">
                            <FontAwesomeIcon icon={faGithub} className="mr-2 text-xl" />
                          </a>
                        )}
                        {project.preview && (
                          <a href={project.preview} title="Ver proyecto">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xl" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}