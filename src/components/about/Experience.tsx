"use client"
import Hr from "@components/ui/Hr"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Title from "./title"

const experiences: {
  id: number
  startDate: string
  endDate: string
  company: string
  position: string
  type: string
  site?: string
  location: string
  description: string
  skills: string[]
}[] = [
  {
    id: 1,
    startDate: "Oct 2021",
    endDate: "Ago 2023",
    company: "Spartan Techs C.A.",
    site: "https://www.grupospartan.com/",
    position: "Desarrollador Mobile",
    type: "Tiempo completo",
    location: "Nueva Esparta, Venezuela",
    description:
      "Diseño y desarrollo de aplicaciones móviles empresariales orientadas a la gestión de inventarios y análisis de costos.",
    skills: ["Ionic", "Angular"],
  },
  {
    id: 2,
    startDate: "Ago 2023",
    endDate: "Mar 2025",
    company: "Spartan Techs C.A.",
    site: "https://www.grupospartan.com/",
    position: "Desarrollador Fullstack",
    type: "Tiempo completo",
    location: "Nueva Esparta, Venezuela",
    description:
      "Desarrollo integral de plataformas web y móviles, asegurando la cohesión entre el frontend y backend para sistemas administrativos y transaccionales.",
    skills: ["Angular", "Ionic", "Next.js", "Node.js", "TypeScript"],
  },
  {
    id: 3,
    startDate: "Abr 2025",
    endDate: "Dic 2025",
    company: "Kodea Labs",
    site: "https://www.kodea.la/",
    position: "Desarrollador Fullstack",
    type: "Tiempo completo",
    location: "Remoto",
    description:
      "Arquitectura de aplicaciones móviles hibridas para criptomonedas y plataformas fintech, implementando flujos de transacciones cifradas y gestión de estado avanzada.",
    skills: ["Next.js", "Django", "Flutter", "Dart"],
  },
  {
    id: 4,
    startDate: "ENE 2026",
    endDate: "Actualidad",
    company: "Xiiball",
    position: "Desarrollador web",
    type: "Freelance",
    location: "Remoto",
    description:
      "Desarrollo de interfaces interactivas con inteligencia artificial conversacional y gestión de arquitecturas escalables basadas en monorepositorios.",
    skills: ["Reactjs", "Nextjs", "TypeScript"],
  },
  {
    id: 5,
    startDate: "Nov 2024",
    endDate: "Actualidad",
    company: "Novanet Studio C.A.",
    site: "https://novanet.studio/",
    position: "Desarrollador Fullstack",
    type: "Consultor",
    location: "Remoto",
    description:
      "Consultoría técnica para la planificación de nuevas plataformas web y el mantenimiento de sistemas ERP con integración de módulos de pago.",
    skills: ["Nextjs", "Nuxt", "Astro", "Strapi", "Bun", "PostgreSQL"],
  },
]

experiences.reverse()

function ExperienceCard({
  experience,
  index,
  isEven,
}: {
  experience: any
  index: number
  isEven: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`group relative ${
        isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
      } md:w-1/2`}
    >
      {/* Card */}
      <div
        className={`ml-6 rounded-2xl border border-dark/25 bg-light/35 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl md:ml-0`}
      >
        {/* Company & Position */}
        <div className="mb-6 flex flex-col justify-between lg:flex-row">
          {experience.site ? (
            <a href={experience.site} target="_blank" rel="noopener noreferrer">
              <h3 className="hover:text-main cursor-pointer text-2xl font-bold transition-all duration-300">
                {experience.company}
              </h3>
            </a>
          ) : (
            <h3 className="text-2xl font-bold">{experience.company}</h3>
          )}

          <div className="flex flex-col font-bold text-dark lg:items-end">
            <h4>{`${experience.startDate} - ${experience.endDate}`}</h4>
            <span className="text-sm">{`${experience.location}`}</span>
          </div>
        </div>

        <h5 className="text-lg font-medium text-dark">
          {experience.position},
          <span className="ml-2 font-normal text-darken/50">
            {experience.type}
          </span>
        </h5>

        {/* Description */}
        <p className="mb-4 leading-relaxed text-light-5">
          {experience.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill: string, idx: number) => (
            <span
              key={idx}
              className="rounded-full border border-gray-400/40 bg-linear-to-r from-light to-light-2/50 px-3 py-1 text-sm font-medium text-darken backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false)
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2)

  return (
    <>
      <Title title="Experiencia" isMain={false} />

      <section className="relative mx-auto w-full px-8">
        {/* Timeline line - hidden on mobile, visible on md+ */}
        <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-linear-to-b from-darken via-light-3 to-transparent md:block" />
        {/* Mobile timeline line */}
        <div className="absolute left-0 h-full w-1 bg-linear-to-b from-darken via-light-3 to-transparent md:hidden" />{" "}
        {/* Experience cards */}
        <div className="relative space-y-12 md:space-y-16">
          <AnimatePresence>
            {displayedExperiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                <div
                  className={`absolute top-5 left-0 z-30 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-darken shadow-lg md:top-4 md:left-1/2 md:-translate-x-1/2`}
                />

                <ExperienceCard
                  experience={experience}
                  index={index}
                  isEven={index % 2 === 1}
                />
              </div>
            ))}
          </AnimatePresence>
        </div>
        {/* Expand/Collapse button */}
        {experiences.length > 3 && (
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 rounded-full bg-darken px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800"
            >
              {showAll ? (
                <>
                  Ver menos
                  <svg
                    className="h-4 w-4 rotate-180 transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </>
              ) : (
                <>
                  Ver más
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
        )}{" "}
        {/* Gradient fade effect at bottom */}
        {!showAll && (
          <div className="from-stale-300 pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent"></div>
        )}
      </section>
    </>
  )
}
