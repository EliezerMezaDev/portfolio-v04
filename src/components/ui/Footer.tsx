"use client"
import { motion } from "framer-motion"
import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons"

export default function Footer() {
  return (
    <div className="mt-5 flex flex-col items-center justify-center overflow-hidden">
      <div className="mt-5 flex min-h-[75vh] min-w-[80vw] flex-col items-center justify-center self-center border-b-2">
        <Link href="/#contact">
          <motion.h5
            className="mt-3 text-center text-xl leading-none font-medium whitespace-nowrap text-light-5 hover:underline md:tracking-[0.5rem]"
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            ¿Quieres algo como esto?
          </motion.h5>
          <motion.h4
            className="mt-3 text-4xl leading-none font-medium whitespace-nowrap text-black hover:underline md:text-7xl"
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
            }}
          >
            Ponte en contacto{" "}
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="ml-2 text-4xl max-md:-mb-1 md:text-5xl"
            />
          </motion.h4>
        </Link>
      </div>
      <footer className="self-start] my-5 flex flex-col items-center justify-center">
        <p className="text-sm text-black">
          &copy;{new Date().getFullYear()} -{" "}
          <span className="text-lg text-black">Eliezer A Meza</span>
        </p>
      </footer>
    </div>
  )
}
