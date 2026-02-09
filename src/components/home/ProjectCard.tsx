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
        className="flex flex-col md:grid md:grid-cols-[auto_1fr] xl:flex xl:flex-col h-full bg-base-light/20 hover:bg-base shadow-lg origin-top backdrop-blur-lg overflow-hidden transform transition-all duration-300"
      >
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.portraitImage.src}
            alt={project.portraitImage.alt}
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
          <div className="absolute inset-0 bg-base-main/10 group-hover:bg-transparent transition-colors" />
        </div>

        <div className="p-6 flex flex-col grow border border-t-0 border-base/50">
          <h3 className="font-montserrat! text-xl font-black text-light tracking-wide mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-light-3 mb-6 line-clamp-2 grow">
            {project.summary}
          </p>

          <TechStackBadges tags={project.tags} />
        </div>
      </motion.div>
    </Link>
  );
}
