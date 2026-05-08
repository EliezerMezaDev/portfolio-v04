"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

import FixedButton from "@components/ui/FixedButton"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import Me from "@components/about/Me"
import Skills from "@components/about/Skills"
import Experience from "@components/about/Experience"
import Education from "@components/about/Education"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <main className="overflow-hidden">
        <FixedButton href="/#about">
          <FontAwesomeIcon icon={faChevronLeft} className="pr-10 text-black" />
        </FixedButton>

        {/* <Hero
          title="Sobre mi"
          desc="Un breve resumen de mi camino como desarrollador de software."
          coverImg={Portrait}
        /> */}

        <div className="container mx-auto my-10 grid grid-cols-1 gap-10">
          <motion.div
            className="mb-5 flex flex-col items-start justify-center"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <Me />

            <Skills />

            <Experience />

            <Education />
          </motion.div>
        </div>
      </main>
    </>
  )
}
