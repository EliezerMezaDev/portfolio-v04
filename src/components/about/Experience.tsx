"use client";
import Hr from "@components/ui/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Title from "./title";

const experiences: {
  id: number;
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  type: string;
  site?: string;
  location: string;
  description: string;
  skills: string[];
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
    startDate: "Nov 2025",
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
];

experiences.reverse();

function ExperienceCard({
  experience,
  index,
  isEven,
}: {
  experience: any;
  index: number;
  isEven: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`relative group ${
        isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
      } md:w-1/2`}
    >
      {/* Card */}
      <div
        className={`bg-white/20 backdrop-blur-sm border border-gray-300/30 rounded-2xl p-6 shadow-lg 
				hover:shadow-xl hover:bg-white/30 transition-all duration-300 ml-6 md:ml-0`}
      >
        {/* Company & Position */}
        <div className="flex flex-col lg:flex-row justify-between mb-6">
          {experience.site ? (
            <a href={experience.site} target="_blank" rel="noopener noreferrer">
              <h3 className="font-bold text-2xl transition-all duration-300 cursor-pointer hover:text-accent">
                {experience.company}
              </h3>
            </a>
          ) : (
            <h3 className="font-bold text-2xl">{experience.company}</h3>
          )}

          <div className="text-black/85 font-bold flex flex-col lg:items-end">
            <h4>{`${experience.startDate} - ${experience.endDate}`}</h4>
            <span className="text-sm ">{`${experience.location}`}</span>
          </div>
        </div>

        <h5 className="font-medium text-lg text-black/85">
          {experience.position},
          <span className="font-normal text-black/50 ml-2">
            {experience.type}
          </span>
        </h5>

        {/* Description */}
        <p className="text-light-5 leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill: string, idx: number) => (
            <span
              key={idx}
              className="bg-linear-to-r from-light to-light-2/50 border border-gray-400/40 text-black px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <>
      <Title title="Experiencia" isMain={false} />

      <section className="relative w-full px-8 mx-auto">
        {/* Timeline line - hidden on mobile, visible on md+ */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-linear-to-b from-black via-light-3 to-transparent h-full" />
        {/* Mobile timeline line */}
        <div className="md:hidden absolute left-0 w-1 bg-linear-to-b from-black via-light-3 to-transparent h-full" />{" "}
        {/* Experience cards */}
        <div className="space-y-12 md:space-y-16 relative">
          <AnimatePresence>
            {displayedExperiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                <div
                  className={`absolute w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-30
										md:left-1/2 md:-translate-x-1/2 md:top-4
										left-0 -translate-x-1/2 top-5`}
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
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium 
									transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Ver menos
                  <svg
                    className="w-4 h-4 transform rotate-180"
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
                    className="w-4 h-4"
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
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stale-300 to-transparent pointer-events-none"></div>
        )}
      </section>
    </>
  );
}
