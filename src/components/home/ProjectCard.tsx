"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/dictionary";
import TechStackBadges from "../ui/TechStackBadges";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col h-full bg-base/50 hover:bg-base overflow-hidden transform transition-all duration-300"
      >
        <div className="relative h-48 md:h-60 overflow-hidden w-full">
          <Image
            src={project.portraitImage.src}
            alt={project.portraitImage.alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-base-main/10 group-hover:bg-transparent transition-colors" />
        </div>

        <div className="p-6 flex flex-col grow">
          <h3 className="title --tertiary text-light transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-lg font-medium text-light-4 mb-6 line-clamp-5 leading-relaxed grow">
            {project.summary}
          </p>

          <TechStackBadges tags={project.tags} />
        </div>
      </motion.div>
    </Link>
  );
}
