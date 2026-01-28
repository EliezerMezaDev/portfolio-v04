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
      className="flex items-start gap-x-4 md:gap-x-6 relative z-10"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-main/30 border-2 border-main shrink-0 mt-1 z-10">
        <div className="w-2.5 h-2.5 rounded-full bg-main" />
      </div>

      <div className="grow pt-1">
        <time className="block text-md font-mono font-bold text-main mb-2">
          {date}
        </time>

        <h3 className="title font-bold mb-2">{role}</h3>

        {companyUrl ? (
          <Link
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg xl:text-xl text-light-3 hover:text-accent transition-colors font-medium inline-block relative group"
          >
            @{company}
          </Link>
        ) : (
          <h4 className="text-xl text-light-3 font-medium">@{company}</h4>
        )}

        <div className="prose mt-4 mb-4 text-light-4 text-lg xl:text-xl">
          <Markdown>{children}</Markdown>
        </div>

        <TechStackBadges tags={techStack} />
      </div>
    </motion.li>
  );
}
