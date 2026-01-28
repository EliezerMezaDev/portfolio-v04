"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2 } from "lucide-react";
import Section from "@/components/ui/Section";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/dictionary";
import { getDictionary } from "@/lib/dictionary";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

interface ProjectsPreviewProps {
  dict: Dictionary;
  projects: Project[];
}

export default function ProjectsPreview({
  dict,
  projects,
}: ProjectsPreviewProps) {
  const featuredProjects = projects.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <Section id="projects" className="min-h-screen h-auto py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-16 self-start md:self-center">
          <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
            <Code2
              className="w-6 h-6 md:w-8 md:h-8 text-accent"
              strokeWidth={1.5}
            />
          </div>

          <h2 className="title --secondary">{dict.projects_section.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div key={project.slug}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/projects" className="button">
            {dict.projects_section.view_all_button}
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
