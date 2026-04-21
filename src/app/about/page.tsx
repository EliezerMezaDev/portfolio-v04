"use client";
import { useEffect } from "react";
import FixedButton from "@components/ui/FixedButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import About from "@components/about/about/about";
import Skills from "@components/about/skills/skills";
import Experience from "@components/about/experience";
import Education from "@components/about/education";


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

        <div className="h-10" />

        <About />

        <Skills />

        <Experience />

        <Education />
      </main>
    </>
  );
}
