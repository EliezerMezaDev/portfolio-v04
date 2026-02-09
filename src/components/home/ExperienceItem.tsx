"use client";

import { motion } from "framer-motion";
import Markdown from "react-markdown";
import Link from "next/link";
import {
  Smartphone,
  Database,
  Server,
  Globe,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Atom,
  Zap,
  Box,
  FileCode,
} from "lucide-react";
import type { Technology } from "@/lib/dictionary";
import TechStackBadges from "../ui/TechStackBadges";

const getLucideIcon = (iconString: string) => {
  const key = iconString.toLowerCase();

  if (
    key.includes("flutter") ||
    key.includes("ionic") ||
    key.includes("android") ||
    key.includes("ios")
  )
    return Smartphone;

  if (key.includes("react")) return Atom;
  if (key.includes("next") || key.includes("astro")) return Zap;
  if (key.includes("vue") || key.includes("angular")) return Layers;

  if (key.includes("typescript") || key.includes("javascript")) return FileCode;

  if (key.includes("node") || key.includes("bun") || key.includes("server"))
    return Server;

  if (key.includes("sql") || key.includes("base") || key.includes("mongo"))
    return Database;

  if (key.includes("tailwind") || key.includes("css") || key.includes("sass"))
    return Box;

  return Terminal;
};

interface ExperienceItemProps {
  role: string;
  company: string;
  date: string;
  companyUrl?: string;
  techStack: Technology[];
  children: string;
}

export default function ExperienceItem({
  role,
  company,
  date,
  companyUrl,
  techStack,
  children,
}: ExperienceItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-start px-3 py-4 md:px-4 md:py-6  gap-x-4 relative z-10 bg-base-light/20 backdrop-blur-lg border-base/50 shadow-lg origin-top"
    >
      <div className="default-clip flex items-center justify-center w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-linear-to-r from-main to-main-light shrink-0 mt-1 z-15" />

      <div className="grow pt-1">
        <time className="block text-md font-bold text-main mb-2">{date}</time>

        <h3 className="mb-2 font-montserrat! text-xl lg:text-2xl font-black text-light tracking-tight">
          {role}
        </h3>

        {companyUrl ? (
          <Link
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md 2xl:text-lg text-light-3 hover:text-accent transition-colors font-medium inline-block relative group"
          >
            @{company}
          </Link>
        ) : (
          <h4 className="text-xl text-light-3 font-medium">@{company}</h4>
        )}

        <div className="prose mt-4 mb-4 text-light-4 text-md 2xltext-lg 3xl:text-xl">
          <Markdown>{children}</Markdown>
        </div>

        <TechStackBadges tags={techStack} />
      </div>
    </motion.li>
  );
}
