"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <div className="flex justify-center items-center flex-col mt-5 overflow-hidden">
      <div className="flex justify-center items-center flex-col mt-5 self-center min-h-[75vh] border-b-2 min-w-[80vw] ">
        <Link href="/#contact">
          <motion.h5
            className="text-xl font-medium mt-3 text-center text-light-4  hover:underline whitespace-nowrap leading-none md:tracking-[0.5rem]"
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
            className="text-black text-4xl md:text-7xl font-medium mt-3 hover:underline whitespace-nowrap leading-none"
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
              className="text-4xl md:text-5xl max-md:-mb-1 ml-2 "
            />
          </motion.h4>
        </Link>
      </div>
      <footer className="flex justify-center items-center flex-col my-5 self-start]">
        <p className="text-black text-sm">
          &copy;{new Date().getFullYear()} -{" "}
          <span className="text-black text-lg">Eliezer A Meza</span>
        </p>
      </footer>
    </div>
  );
}
