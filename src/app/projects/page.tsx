"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@components/ui/Button";
import Image from "next/image";

// images
import ProjectAll from "@public/image/projects.png";

import Hr from "@components/ui/Hr";
import ProjectCard from "./components/ProjectCard";
import Projects from "@data/projects.json";
import FixedButon from "@components/ui/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Hightlight from "@components/projects/Hightlight";
import { CodeEffect } from "@components/ui/CodeEffect";
import Hero from "@components/ui/Hero";

const categories = [
  { id: 1, label: "Desarrollo Web" },
  { id: 2, label: "Mobile" },
  { id: 3, label: "Otro" },
];

export default function Page() {
  const [activeCategory, setActiveCategory] = useState(1);
  const projects = Projects.Projects.filter((item) => item.show === true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="overflow-hidden">
        <FixedButon href="/#projects">
          <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
        </FixedButon>

        <Hero
          title="Mis proyectos"
          desc="Aquí encontraras algunos de los proyectos en los que he trabajado"
          coverImg={ProjectAll}
        />

        <Hightlight />

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
          className="flex flex-row justify-center items-start flex-wrap gap-3 md:gap-5 my-5 "
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-2 md:px-4 py-2 rounded-lg cursor-pointer transition-all ease duration-300 focus:bg-gray-300 focus:text-black focus:ring focus:ring-slate-500 ${
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
        <div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">
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
          className="flex justify-center items-center flex-col my-5 self-start "
        >
          <Button variation="primary">
            <Link href="projects/archive">Ver en el archivo</Link>
          </Button>
        </motion.div>
      </main>
    </>
  );
}
