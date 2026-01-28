"use client";

import {
  Smartphone,
  Database,
  Server,
  Zap,
  Layers,
  Terminal,
  Box,
  FileCode,
  Atom,
} from "lucide-react";
import type { Technology } from "@/lib/dictionary";

const getLucideIcon = (iconString: string) => {
  const key = iconString.toLowerCase();
  if (
    key.includes("flutter") ||
    key.includes("ionic") ||
    key.includes("mobile")
  )
    return Smartphone;
  if (key.includes("react")) return Atom;
  if (key.includes("next") || key.includes("astro")) return Zap;
  if (key.includes("vue") || key.includes("angular") || key.includes("nuxt"))
    return Layers;
  if (key.includes("typescript") || key.includes("javascript")) return FileCode;
  if (key.includes("node") || key.includes("bun") || key.includes("strapi"))
    return Server;
  if (key.includes("sql") || key.includes("base") || key.includes("mongo"))
    return Database;
  if (
    key.includes("tailwind") ||
    key.includes("css") ||
    key.includes("sass") ||
    key.includes("scss")
  )
    return Box;
  return Terminal;
};

export default function TechBadges({ tags }: { tags: Technology[] }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mt-auto">
      {tags.map((tech) => {
        const IconComponent = getLucideIcon(tech.icon);

        return (
          <div
            key={tech.name}
            className="flex items-center gap-1.5 px-4 py-2 bg-base-light text-md font-mono font-medium text-light select-none group/pill"
          >
            <IconComponent
              size={18}
              strokeWidth={3}
              className="text-light group-hover/pill:text-light transition-colors"
            />
            <span className="mt-0.5">{tech.name}</span>
          </div>
        );
      })}
    </div>
  );
}
