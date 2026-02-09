"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase } from "lucide-react";
import Section from "@/components/ui/Section";
import ExperienceItem from "./ExperienceItem";
import type { Experience } from "@/lib/dictionary";
import { getDictionary } from "@/lib/dictionary";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

interface ExperienceSectionProps {
  dict: Dictionary;
  data: Experience[];
}

export default function ExperienceSection({
  dict,
  data,
}: ExperienceSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const workExperience = data.filter((entry) => entry.type === "work");
  const consultingExperience = data.filter(
    (entry) => entry.type === "consulting",
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <Section id="experience" className="min-h-screen h-auto py-24 md:py-32">
      <div className="w-[90dvw] 2xl:w-[60dvw] mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-10 self-center">
          <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
            <Briefcase
              className="w-6 h-6 md:w-8 md:h-8 text-accent"
              strokeWidth={1.5}
            />
          </div>
          <h2 className="font-montserrat! text-4xl font-black text-light tracking-tight">
            {dict.experience_section.title}
          </h2>
        </div>

        <div ref={containerRef} className="relative w-full container mx-auto">
          {workExperience.length > 0 && (
            <div className="mb-16">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xl xl:text-2xl font-black text-center mb-8 text-light-4 hidden md:block"
              >
                {dict.experience_section.work_title}
              </motion.h3>

              <ol className="relative flex flex-col gap-12 md:gap-16">
                {workExperience.map((exp) => (
                  <ExperienceItem
                    key={exp.slug}
                    role={exp.role}
                    company={exp.company}
                    date={exp.date}
                    companyUrl={exp.companyUrl}
                    techStack={exp.techStack}
                  >
                    {exp.content}
                  </ExperienceItem>
                ))}
              </ol>
            </div>
          )}

          {consultingExperience.length > 0 && (
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-xl xl:text-2xl font-black text-center mb-8 text-light-4 hidden md:block"
              >
                {dict.experience_section.consulting_title}
              </motion.h3>
              <ol className="relative flex flex-col gap-16">
                {consultingExperience.map((exp) => (
                  <ExperienceItem
                    key={exp.slug}
                    role={exp.role}
                    company={exp.company}
                    date={exp.date}
                    companyUrl={exp.companyUrl}
                    techStack={exp.techStack}
                  >
                    {exp.content}
                  </ExperienceItem>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
