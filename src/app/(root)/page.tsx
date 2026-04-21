"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FullPageWrapper,
  Section,
  useFullPage,
} from "@alvalens/react-fullpage-snap";

// components
import Button from "@components/ui/Button";
import Me from "@public/image/portrait-long.jpg";
import MeAbout from "@public/image/me1.jpg";
import Setup from "@public/image/setup.jpg";
import ProjectAll from "@public/image/projects.png";
import Hr from "@components/ui/Hr";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { CodeEffect } from "@components/ui/CodeEffect";

function ScrollIndicator() {
  const { activeIndex } = useFullPage();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (activeIndex !== 0) setDismissed(true);
  }, [activeIndex]);

  return (
    <AnimatePresence>
      {activeIndex === 0 && !dismissed && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <span className="text-[10px] uppercase tracking-[4px] text-light-4 font-medium">
            Scroll
          </span>
          <motion.div
            className="w-[1.5px] h-14 bg-accent origin-top"
            animate={{
              scaleY: [0, 1, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const MyPage = () => {
  return (
    <FullPageWrapper>
      <Section>
        <div className="ml-20 w-[82%] max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden">
          <motion.div
            className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
            }}
          >
            <div className="block md:hidden col-span-1 mx-auto my-10">
              <div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0 transition-all ease duration-300">
                <Image
                  src={Me}
                  width={500}
                  height={500}
                  className="rounded-full w-full h-full object-cover "
                  alt="EaMZ"
                  placeholder="blur"
                />
              </div>
            </div>
            <motion.h3
              className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-light-4"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
              }}
            >
              Eliezer A Meza
            </motion.h3>
            <CodeEffect
              className="mb-2 md:mb-5 text-5xl md:text-7xl"
              symbolClassName="text-black/10"
              children={<motion.h1
                className="text-accent font-bold "
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                }}
              >
                FullstackDeveloper </motion.h1>
              }
            />


            <motion.p
              className="title text-md 2xl:text-xl mt-4 tracking-wider text-light-4 leading-[1.7rem]"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                type: "spring",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam, temporibus!
            </motion.p>
            <motion.div
              className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                type: "spring",
              }}
            >
              <Button variation="primary">
                <Link
                  href={"/docs/cv.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Descargar CV
                </Link>
              </Button>
              <Button variation="secondary">
                <a href="#contact">Contáctame</a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="hidden md:flex col-span-1 mx-auto justify-center items-center "
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.7,
              type: "spring",
            }}
          >
            <div className="rounded-full h-auto w-auto max-w-[20vw] bg-red-500  transition-all ease duration-300">
              <Image
                src={Me}
                width={400}
                height={550}
                placeholder="blur"
                alt="EaMZ"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>
      <Section>
        <div className="relative md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden">
          <div className="z-0 mb-48 md:mb-0  md:absolute md:top-1/2  md:right-[10%] md:-translate-y-1/2">
            <motion.div
              className="relative bg-slate-300 rounded-sm h-[400px] md:h-[60vh] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
              initial={{
                x: 300,
                opacity: 0,
                z: -100,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                z: 0,
              }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <Image
                src={MeAbout}
                fill
                sizes="(max-width: 768px) 80vw, 30vw"
                className="object-cover"
                alt="EaMZ"
                placeholder="blur"
              />
            </motion.div>
          </div>
          <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
            <CodeEffect
              className="mb-2 md:mb-5 text-5xl md:text-7xl"
              symbolClassName="text-black/10"
              children={
                <motion.h2
                  className="bg-white lg:bg-transparent bg-opacity-50 text-main font-bold"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                  }}
                >
                  SobreMi
                </motion.h2>
              }
            />

            <Hr />
            <motion.p
              className="title  text-xl mt-4 tracking-wider text-light-4 leading-[1.7rem] mb-5"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
              }}
            >
              Una breve introducción a mi viaje como desarrollador de software.
            </motion.p>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                type: "spring",
              }}
            >
              <Button variation="primary">
                <Link href="/about">Saber más</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
          <div className="z-0 mb-48 md:mb-0  md:absolute md:top-1/2  md:right-[10%] md:-translate-y-1/2">
            <motion.div
              className="relative bg-slate-300 rounded-sm h-[400px] md:h-[60vh] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
              initial={{
                x: 300,
                opacity: 0,
                z: -100,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                z: 0,
              }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <Image
                src={ProjectAll}
                fill
                sizes="(max-width: 768px) 80vw, 30vw"
                className="object-cover"
                alt="EaMZ Setup"
                placeholder="blur"
              />
            </motion.div>
          </div>
          <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
            <CodeEffect
              className="mb-2 md:mb-5 text-5xl md:text-7xl"
              symbolClassName="text-black/10"
              children={
                <motion.h2
                  className="bg-white lg:bg-transparent bg-opacity-50 text-main font-bold"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                  }}
                >
                  Proyectos
                </motion.h2>
              }
            />

            <Hr />
            <motion.p
              className="title  text-xl mt-4 tracking-wider text-light-4 leading-[1.7rem] mb-5"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
              }}
            >
              Proyectos destacados que he creado a lo largo de los años. <br />
              <span className="bg-transparent md:bg-black bg-opacity-50 xl:bg-transparent">
                y en los que estoy trabajando actualmente.
              </span>
            </motion.p>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                type: "spring",
              }}
            >
              <Button variation="primary">
                <Link href="/projects">Ver más</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="relative md:h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
          <div className="z-0 mb-48 md:mb-0  md:absolute md:top-1/2  md:right-[10%] md:-translate-y-1/2">
            <motion.div
              className="relative bg-slate-300 rounded-sm h-[400px] md:h-[60vh] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
              initial={{
                x: 300,
                opacity: 0,
                z: -100,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                z: 0,
              }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <Image
                src={Setup}
                fill
                sizes="(max-width: 768px) 80vw, 30vw"
                className="object-cover"
                alt="EaMZ Setup"
                placeholder="blur"
              />
            </motion.div>
          </div>
          <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
            <CodeEffect
              className="mb-2 md:mb-5 text-5xl md:text-7xl"
              symbolClassName="text-black/10"
              children={
                <motion.h2
                  className="bg-white lg:bg-transparent bg-opacity-50 text-main font-bold"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                  }}
                >
                  Contactame
                </motion.h2>
              }
            />

            <Hr />
            <motion.p
              className="title text-xl mt-4 tracking-wider text-light-4 leading-[1.7rem] md:mb-10"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
              }}
            >
              No dudes en contactarme si tienes alguna idea o proyecto en mente.
            </motion.p>

            {/* icons */}
            <div className="flex justify-center items-center space-x-4">
              <motion.a
                href="mailto:eliezermeza.dev@gmail.com?subject=Hola&body=Hello Eliezer,"
                aria-label="Send email"
                className="flex justify-center items-center bg-main w-14 h-14 rounded-full text-light hover:scale-95 transition-all ease-in-out duration-300"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  y: { delay: 0.1 },
                  opacity: { delay: 0.2 },
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
              </motion.a>

              <motion.a
                href="https://github.com/EliezerMezaDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex justify-center items-center bg-main w-14 h-14 rounded-full text-light hover:scale-95 transition-all ease-in-out duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  y: { delay: 0.2 },
                  opacity: { delay: 0.3 },
                }}
              >
                <FontAwesomeIcon icon={faGithub} className="text-3xl" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/eliezer-a-meza-7a1b882b9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex justify-center items-center bg-main w-14 h-14 rounded-full text-light hover:scale-95 transition-all ease-in-out duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  y: { delay: 0.4 },
                  opacity: { delay: 0.5 },
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
              </motion.a>
            </div>
          </div>
        </div>
      </Section>
      <ScrollIndicator />
    </FullPageWrapper>
  );
};

export default MyPage;
