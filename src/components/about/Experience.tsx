"use client"
import Hr from "@components/ui/Hr"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Title from "./title"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface Experience {
  startDate: string
  endDate: string
  company: string
  site?: string
  position: string
  type: string
  location: string
  tech: string[]
  techNames: string[]
  content: string
}

type ExperiencesResponse = Omit<Experience, "techNames"> & {
  techNames?: string[]
}

async function getAllExperiences() {
  const { getAllExperiencesServer } = await import("@lib/experiences-action")
  return getAllExperiencesServer()
}

function ExperienceCard({
  experience,
  index,
  isEven,
}: {
  experience: Experience
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
              <h3 className="cursor-pointer text-2xl font-bold transition-all duration-300 hover:text-main">
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

        <div className="mb-4 leading-relaxed text-light-5">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {experience.content}
          </ReactMarkdown>
        </div>

        <div className="flex flex-wrap gap-2">
          {experience.techNames.map((name, idx) => (
            <span
              key={idx}
              className="rounded-full border border-gray-400/40 bg-linear-to-r from-light to-light-2/50 px-3 py-1 text-sm font-medium text-darken backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    getAllExperiences().then((data: any[]) => {
      const withTechNames = data.map((exp) => {
        const allTech: Record<string, string> = {
          nextjs: "Next.js",
          react: "React",
          nuxt: "Nuxt",
          astro: "Astro",
          angular: "Angular",
          ionic: "Ionic",
          flutter: "Flutter",
          dart: "Dart",
          nodejs: "Node.js",
          django: "Django",
          strapi: "Strapi",
          bun: "Bun",
          typescript: "TypeScript",
          tailwindcss: "Tailwind CSS",
          shadcniui: "Shadcn UI",
          prisma: "Prisma",
          mysql: "MySQL",
          postgresql: "PostgreSQL",
        }
        const techNames = (exp.techNames || exp.tech || []).map(
          (id: string) => allTech[id] || id
        )
        return { ...exp, techNames }
      })
      setExperiences(withTechNames)
      setLoading(false)
    })
  }, [])

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3)

  if (loading) {
    return (
      <>
        <Title title="Experiencia" isMain={false} />
        <section className="relative mx-auto w-full px-8">
          <div className="flex justify-center py-10">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-darken border-t-transparent"></div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Title title="Experiencia" isMain={false} />
      <section className="relative mx-auto w-full px-8">
        <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-linear-to-b from-darken via-light-3 to-transparent md:block" />
        <div className="absolute left-0 h-full w-1 bg-linear-to-b from-darken via-light-3 to-transparent md:hidden" />

        <div className="relative space-y-12 md:space-y-16">
          <AnimatePresence>
            {displayedExperiences.map((experience, index) => (
              <div
                key={experience.company + experience.startDate}
                className="relative"
              >
                <div className="absolute top-5 left-0 z-30 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-darken shadow-lg md:top-4 md:left-1/2 md:-translate-x-1/2" />
                <ExperienceCard
                  experience={experience}
                  index={index}
                  isEven={index % 2 === 1}
                />
              </div>
            ))}
          </AnimatePresence>
        </div>

        {experiences.length > 2 && (
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
        )}

        {!showAll && (
          <div className="from-stale-300 pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />
        )}
      </section>
    </>
  )
}
