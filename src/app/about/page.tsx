"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import FixedButton from "@components/ui/FixedButton";

import Portrait from "@public/image/portrait-long.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Me from "@components/about/Me";
import Skills from "@components/about/Skills";
import Experience from "@components/about/Experience";
import Education from "@components/about/Education";
import Hero from "@components/ui/Hero";
import { useFullPage } from "@alvalens/react-fullpage-snap";

const ScrollIndicator = () => {
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
};

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="overflow-hidden">
        <FixedButton href="/#about">
          <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
        </FixedButton>

        <Hero
          title="Sobre mi"
          desc="Un breve resumen de mi camino como desarrollador de software."
          coverImg={Portrait}
        />

        <div className="mx-auto container gap-10 grid grid-cols-1 my-10">
          <motion.div
            className="flex justify-center items-start flex-col mb-5"
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
  );
}
