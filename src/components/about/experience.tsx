"use client";
import Hr from "@components/ui/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    startDate: "Oct 2021",
    endDate: "Ago 2023",
    company: "Spartan Techs C.A.",
    position: "Desarrollador Mobile",
    type: "Tiempo completo",
    location: "Nueva Esparta, Venezuela",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    skills: ["Ionic", "Angular"],
  },

  {
    id: 2,
    startDate: "Ago 2023",
    endDate: "Mar 2025",
    company: "Spartan Techs C.A.",
    position: "Desarrollador Fullstack",
    type: "Tiempo completo",
    location: "Nueva Esparta, Venezuela",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    skills: ["Angular", "Ionic", "Next.js", "Node.js", "TypeScript"],
  },
  {
    id: 3,
    startDate: "Abr 2025",
    endDate: "Dic 2025",
    company: "Kodea Labs",
    position: "Desarrollador Fullstack",
    type: "Tiempo completo",
    location: "Remoto",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    skills: ["Reactjs", "Nextjs", "TypeScript"],
  },
  {
    id: 5,
    startDate: "Nov 2024",
    endDate: "Actualidad",
    company: "Novanet Studio C.A.",
    position: "Desarrollador Fullstack",
    type: "Consultor",
    location: "Remoto",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    skills: ["Nextjs", "Nuxt", "Astro", "Strapi", "Bun", "PostgreSQL"],
  },
];

experiences.reverse();

function Title() {
  return (
    <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start">
        <Hr variant="long"></Hr>
        <motion.h1
          className="text-3xl font-bold mt-3"
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
          Experiencia
        </motion.h1>
      </div>
    </div>
  );
}

function TimelineCard({
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
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className={`flex ps-10 md:ps-0 ${
        isEven
          ? "md:justify-center md:translate-x-68"
          : "md:justify-center md:-translate-x-68"
      } justify-center mb-4`}
    >
      <div className="bg-main  text-light px-12 py-3 rounded-xl shadow-md min-w-max">
        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <div className="text-sm font-bold">{`${experience.startDate} - ${experience.endDate}`}</div>
          </div>

          <div className="w-px h-8 bg-light"></div>
          <div className="text-center">
            <div className="text-sm font-medium text-light/50">
              {experience.location}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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
				hover:shadow-xl hover:bg-white/30 transition-all duration-300 ml-12 md:ml-0`}
      >
        {/* Company & Position */}
        <div className="mb-4">
          <h3 className="font-bold text-xl text-black mb-1">
            {experience.company}
          </h3>
          <h4 className="font-medium text-lg text-black/65">
            {experience.position}
            <span className="text-sm font-normal text-light-4 ml-2">
              • {experience.type}
            </span>
          </h4>
        </div>

        {/* Description */}
        <p className="text-light-5 text-justify leading-relaxed mb-4">
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

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto container px-6 py-10">
      <div className="flex justify-center items-center flex-col">
        {children}
      </div>
    </div>
  );
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <>
      <Title />
      <Wrapper>
        {" "}
        <div className="relative w-full max-w-6xl mx-auto">
          {" "}
          {/* Timeline line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-linear-to-b from-black via-light-3 to-transparent h-full" />
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-0 w-1 bg-linear-to-b from-black via-light-3 to-transparent h-full" />{" "}
          {/* Experience cards */}
          <div className="space-y-12 md:space-y-16 relative">
            <AnimatePresence>
              {displayedExperiences.map((experience, index) => (
                <div key={experience.id} className="relative">
                  {/* Timeline period card - flows naturally above content */}
                  <TimelineCard
                    experience={experience}
                    index={index}
                    isEven={index % 2 === 1}
                  />

                  {/* Timeline dot - positioned at the start of the experience card */}
                  <div
                    className={`absolute w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-30
										md:left-1/2 md:-translate-x-1/2 md:top-4
										left-0 -translate-x-1/2 top-5`}
                  />

                  {/* Experience content card */}
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
                    Show Less
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
                    View More Experience
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
        </div>
      </Wrapper>
    </>
  );
}
