"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@components/ui/Button";
import Image from "next/image";

// images
import Intervyou1 from "@public/image/projects/web/intervyou/intervyou-1.png";
import Intervyou2 from "@public/image/projects/web/intervyou/intervyou-2.png";
import Intervyou3 from "@public/image/projects/web/intervyou/intervyou-3.png";
import ProjectAll from "@public/image/projects.png";

import Hr from "@components/ui/Hr";
import ProjectCard from "./components/ProjectCard";
import Projects from "@data/projects.json";
import FixedButon from "@components/ui/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Hightlight from "@components/projects/Hightlight";
import { CodeEffect } from "@components/ui/CodeEffect";

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
        <div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
          <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.6 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 "
            >
              <Image
                src={ProjectAll}
                alt="EaMZ"
                fill
                placeholder="blur"
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 30vw"
              />
            </motion.div>
          </div>
          <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
            <CodeEffect
              className="mb-2 md:mb-5 text-5xl md:text-7xl"
              symbolClassName="text-black/10"
              children={
                <motion.h1
                  className="bg-white lg:bg-transparent bg-opacity-50 text-main font-bold"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                  }}
                >
                  MisProyectos
                </motion.h1>
              }
            />
            <Hr />
            <p className="title  text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
              Algunos proyectos que he creado a lo largo de los años <br /> y en
              los que estoy trabajando actualmente.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              onClick={() => {
                window.scrollTo({
                  top: 1000,
                  behavior: "smooth",
                });
              }}
              className="mb-3"
            >
              <Button variation="primary">Scroll Down</Button>
            </motion.div>
          </div>
        </div>

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
