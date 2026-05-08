"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LaptopIcon, WebhookIcon, MobileIcon } from "./icons";
import Hr from "@components/ui/Hr";
import Title from "./title";

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
};

function SkillCard({
  skill,
  isSelected,
  onClick,
}: {
  skill: any;
  isSelected: boolean;
  onClick: () => void;
}) {
  const Icon = skill.icon;

  return (
    <motion.div
      onClick={onClick}
      className={`relative cursor-pointer group px-2 py-4 md:rounded-2xl border transition-all duration-300  ${
        isSelected
          ? "bg-linear-to-r from-accent/5 to-accent-light/10 border-accent/75 border"
          : "border-black/5 hover:border-black/20 hover:scale-95"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-10 flex flex-col max-md:justify-center items-center text-center">
        <div
          className={`p-2 px-4 md:p-4 rounded-xl transition-all duration-300`}
        >
          <Icon className="w-10 h-10 text-black" />
        </div>
        <div className="max-md:flex max-md:justify-start md:w-fit">
          <h3 className="hidden md:block font-semibold text-black text-xl md:text-lg md:mb-2">
            {skill.title}
          </h3>
          <h3 className="md:hidden font-semibold text-black text-lg">
            {skill.shortTitle}
          </h3>

          <p className="hidden md:block text-gray-600 text-sm leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

function SkillDetails({ selectedSkill }: { selectedSkill: any }) {
  if (!selectedSkill) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-[4fr_3fr] xl:grid-cols-[3fr_2fr] gap-6"
    >
      <motion.div
        className="bg-light border border-black/10 rounded-2xl p-8 shadow-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-black mb-6 text-center">
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default flex items-center gap-2
                ${
                  skill.highlight
                    ? "bg-linear-to-r from-accent to-accent/75 text-white shadow-md border-black scale-105 z-10 hover:shadow-lg"
                    : "bg-linear-to-r from-light to-black/5 border border-black/10 text-black hover:bg-white/60"
                }`}
              >
                {skill.name}
              </motion.span>
            ),
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-light border border-black/10 rounded-2xl p-8 shadow-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-black mb-6 text-center">
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
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default flex items-center gap-2 bg-linear-to-r from-light to-black/5 border border-black/10 text-black hover:bg-white/60"
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof skillCategories>("web");
  return (
    <section>
      <Title title="Habilidades y competencias" isMain={false} />

      <div className="relative">
        <div className="mx-auto md:px-8 py-2 md:py-6 grid grid-cols-1 gap-6">
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
  );
}
