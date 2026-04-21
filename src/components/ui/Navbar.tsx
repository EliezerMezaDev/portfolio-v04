"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CodeEffect } from "./CodeEffect";

const navVariant: any = {
  open: {
    clipPath: "circle(2000px at calc(100% - 40px) 40px)",
    transition: {
      type: "tween",
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  closed: {
    clipPath: "circle(0px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.3,
      type: "tween",
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const itemVariants: any = {
  open: (custom: any) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom,
      type: "tween",
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  closed: {
    opacity: 0,
    x: -80,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

const NavItems = ({ isNavOpen, setIsNavOpen }: { isNavOpen: boolean, setIsNavOpen: (value: boolean) => void }) => {
  const handleItemClick = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <motion.div
        className={`fixed z-[45] w-full h-screen flex items-center justify-center overflow-hidden`}
        variants={navVariant}
        animate={isNavOpen ? "open" : "closed"}
        initial={false}
      >
        <div className="relative flex flex-col items-center space-x-8 min-h-[100vh] bg-main min-w-[100vw] ">
          <div className="flex flex-col items-center space-y-8 my-auto mx-0 z-50">
            {/* title */}
            <motion.h1
              variants={itemVariants}
              animate={isNavOpen ? "open" : "closed"}
              className="text-6xl font-bold text-white "
            >
              Menu
            </motion.h1>
            <Link href="/#home">
              <div
                className="text-2xl font-bold text-white"
                onClick={handleItemClick}
              >
                <motion.h2
                  className="text-white"
                  variants={itemVariants}
                  animate={isNavOpen ? "open" : "closed"}
                  custom={0.1}
                >
                  Inicio
                </motion.h2>
              </div>
            </Link>
            <Link href="/about">
              <div
                onClick={handleItemClick}
                className="text-2xl font-bold text-white"
              >
                <motion.h2
                  className="text-white"
                  variants={itemVariants}
                  animate={isNavOpen ? "open" : "closed"}
                  custom={0.2}
                >
                  Sobre mí
                </motion.h2>
              </div>
            </Link>
            <Link href="/projects">
              <div
                onClick={handleItemClick}
                className="text-2xl font-bold text-white"
              >
                <motion.h2
                  className="text-white"
                  variants={itemVariants}
                  animate={isNavOpen ? "open" : "closed"}
                  custom={0.3}
                >
                  Proyectos
                </motion.h2>
              </div>
            </Link>
            <Link href="/#contact">
              <div
                onClick={handleItemClick}
                className="text-2xl font-bold text-white"
              >
                <motion.h2
                  className="text-white"
                  variants={itemVariants}
                  animate={isNavOpen ? "open" : "closed"}
                  custom={0.4}
                >
                  Contacto
                </motion.h2>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Navbar = () => {
  const navRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar px-5 md:px-24 w-screen fixed transition-colors ease duration-500 ${isNavOpen
          ? "backdrop-filter backdrop-blur-md bg-main"
          : "backdrop-filter backdrop-blur-md"
          } inset-0 flex flex-row justify-between items-center h-16 z-50 `}
      >
        <div>
          <Link href="/">
            <motion.h3
              className={`ml-2 md:ml-0 text-2xl md:text-3xl ${isNavOpen ? "text-white" : "text-accent"
                } font-bold`}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.1,
                type: "spring",
              }}
            >
              EaMZ
            </motion.h3>
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <button
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
            className="burger button flex flex-col justify-center items-center space-y-1.5 "
            onClick={toggleNav}
          >
            <div
              className={`w-10 h-1 bg-light-4 rounded-full transition-all ease duration-300 ${isNavOpen ? "rotate-45   bg-white translate-y-[2px]" : ""
                }`}
            ></div>
            <div
              className={`w-10 h-1 bg-light-4 rounded-full transition-all ease duration-300 ${isNavOpen ? "-rotate-45 -translate-y-2 bg-white" : ""
                }`}
            ></div>
          </button>
        </div>
      </nav>
      {/* items */}
      <NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  );
};
export default Navbar;
