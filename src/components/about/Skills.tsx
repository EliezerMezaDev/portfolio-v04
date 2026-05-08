"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { LaptopIcon, WebhookIcon, MobileIcon } from "./icons"
import Hr from "@components/ui/Hr"
import Title from "./title"

const skillCategories = {
  web: {
    title: "Desarrollo web frontend",
    shortTitle: "Frontend",
    icon: LaptopIcon,
    description: "Creación de aplicaciones web modernas",
    languages: [
      { name: "React", highlight: true },
      { name: "NextJS", highlight: true },
      { name: "Vue", highlight: false },
      { name: "Nuxt", highlight: false },
      { name: "TypeScript", highlight: true },
      { name: "HTML", highlight: false },
      { name: "CSS", highlight: false },
      { name: "SCSS", highlight: false },
      { name: "TailwindCSS", highlight: true },
      { name: "Bootstrap", highlight: false },
      { name: "Inglés B1", highlight: false },
    ],
    tools: [
      "Vercel",
      "Vite",
      "Figma",
      "Docker",
      "Git",
      "Github",
      "GitLab",
      "Postman",
    ],
  },
  api: {
    title: "Desarrollo backend & API",
    shortTitle: "Backend",
    icon: WebhookIcon,
    description: "Creación de servicios backend robustos y escalables",
    languages: [
      { name: "NodeJS", highlight: false },
      { name: "ExpressJS", highlight: true },
      { name: "Bun", highlight: true },
      { name: "Strapi", highlight: true },
      { name: "FastAPI", highlight: false },
      { name: "Python", highlight: false },
      { name: "Django", highlight: false },
      { name: "PostgreSQL", highlight: true },
      { name: "MySQL", highlight: false },
      { name: "Firebase", highlight: false },
    ],
    tools: [
      "Docker",
      "Postman",
      "Swagger",
      "Git",
      "Github",
      "GitLab",
      "AWS",
      "Supabase",
    ],
  },
  mobile: {
    title: "Desarrollo Mobile",
    shortTitle: "Mobile",
    icon: MobileIcon,
    description: "Creación de aplicaciones móviles multiplataforma",
    languages: [
      { name: "React Native", highlight: true },
      { name: "Flutter", highlight: true },
      { name: "JavaScript", highlight: false },
      { name: "TypeScript", highlight: false },
      { name: "Dart", highlight: false },
      { name: "Ionic", highlight: false },
    ],
    tools: ["Android Studio", "React Native CLI", "Capacitor"],
  },
}

function SkillCard({
  skill,
  isSelected,
  onClick,
}: {
  skill: any
  isSelected: boolean
  onClick: () => void
}) {
  const Icon = skill.icon

  return (
    <motion.div
      onClick={onClick}
      className={`group relative cursor-pointer border px-2 py-4 transition-all duration-300 md:rounded-2xl ${
        isSelected
          ? "border border-main/75 bg-linear-to-r from-light/50 to-light-2/50"
          : "border-dark/25 bg-light/35 hover:scale-95 hover:border-main-dark"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-10 flex flex-col items-center text-center max-md:justify-center">
        <div
          className={`rounded-xl p-2 px-4 transition-all duration-300 md:p-4`}
        >
          <Icon className="h-10 w-10 text-dark" />
        </div>
        <div className="max-md:flex max-md:justify-start md:w-fit">
          <h3 className="hidden text-xl font-semibold text-darken md:mb-2 md:block md:text-lg">
            {skill.title}
          </h3>
          <h3 className="text-lg font-semibold text-darken md:hidden">
            {skill.shortTitle}
          </h3>

          <p className="hidden text-sm leading-relaxed text-dark md:block">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
}

function SkillDetails({ selectedSkill }: { selectedSkill: any }) {
  if (!selectedSkill) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 gap-6 md:grid-cols-[4fr_3fr] xl:grid-cols-[3fr_2fr]"
    >
      <motion.div
        className="rounded-2xl border border-dark/25 bg-light/35 p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="mb-6 text-center text-2xl font-semibold text-dark">
          Tech Stack
        </h3>
        <motion.div
          key={selectedSkill.title}
          className="flex flex-wrap justify-center gap-4"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
          }}
          initial="hidden"
          animate="show"
        >
          {selectedSkill.languages.map(
            (skill: { name: string; highlight: boolean }) => (
              <motion.span
                key={skill.name}
                variants={tagVariants}
                className={`flex cursor-default items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  skill.highlight
                    ? "z-10 scale-105 border-dark bg-linear-to-r from-main to-main/75 text-white shadow-md"
                    : "border border-dark/10 bg-linear-to-r from-light to-dark/5 text-dark"
                }`}
              >
                {skill.name}
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="rounded-2xl border border-dark/25 bg-light/35 p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="mb-6 text-center text-2xl font-semibold text-dark">
          Herramientas e infraestructura
        </h3>
        <motion.div
          key={selectedSkill.title}
          className="flex flex-wrap justify-center gap-4"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
          }}
          initial="hidden"
          animate="show"
        >
          {selectedSkill.tools.map((tool: string) => (
            <motion.span
              key={tool}
              variants={tagVariants}
              className="flex cursor-default items-center gap-2 rounded-full border border-dark/10 bg-linear-to-r from-light to-dark/5 px-4 py-2 text-sm font-medium text-dark transition-all duration-300"
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof skillCategories>("web")
  return (
    <section className="w-full">
      <Title title="Habilidades y competencias" isMain={false} />

      <div className="relative w-full">
        <div className="mx-auto grid grid-cols-1 gap-6 py-2 md:px-8 md:py-6">
          <div className="grid grid-cols-3 md:gap-6">
            {Object.entries(skillCategories).map(([key, skill], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SkillCard
                  skill={skill}
                  isSelected={selectedCategory === key}
                  onClick={() =>
                    setSelectedCategory(key as keyof typeof skillCategories)
                  }
                />
              </motion.div>
            ))}
          </div>

          {/* Skill Details */}
          <AnimatePresence mode="wait">
            <SkillDetails selectedSkill={skillCategories[selectedCategory]} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
