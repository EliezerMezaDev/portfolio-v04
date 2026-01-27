import fs from "fs";
import path from "path";
import matter from "gray-matter";

import commonData from "@/i18n/common.json";

export type Locale = "es" | "en";

export interface Technology {
  name: string;
  icon: string;
}

export interface Experience {
  slug: string;
  content: string;
  role: string;
  company: string;
  companyUrl?: string;
  date: string;
  type: "work" | "education";
  techStack: Technology[];
}

const dictionaries = {
  es: () => import("@/i18n/es.json").then((module) => module.default),
  en: () => import("@/i18n/en.json").then((module) => module.default),
};

const contentDirectory = path.join(process.cwd(), "src/content/experience");

export const getDictionary = async (locale: Locale) => {
  const specific = await (dictionaries[locale] || dictionaries.es)();

  return {
    ...specific,

    personal_info: {
      ...commonData.personal_info,
      ...specific.personal_info,
    },

    technologies: commonData.technologies,

    skills_section: {
      title: specific.skills_section.title,
      frontend: {
        title: specific.skills_section.frontend_title,
        keys: commonData.skills_keys.frontend,
      },
      backend: {
        title: specific.skills_section.backend_title,
        keys: commonData.skills_keys.backend,
      },
      database: {
        title: specific.skills_section.database_title,
        keys: commonData.skills_keys.database,
      },
    },

    site: specific.site,
  };
};

export async function getExperienceData(
  locale: "es" | "en",
): Promise<Experience[]> {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);

  const allExperienceData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      const languageRegex = new RegExp(`---${locale}---([\\s\\S]*?)(?=---|$)`);
      const match = content.match(languageRegex);

      const localizedContent = match ? match[1].trim() : "";

      const techStackData = data.techStack || [];
      const techStack: Technology[] = techStackData.map((techKey: string) => {
        const techInfo =
          commonData.technologies[
            techKey as keyof typeof commonData.technologies
          ];
        return techInfo || { name: techKey, icon: "lucide:code" };
      });

      return {
        slug,
        content: localizedContent,
        role: data.role[locale],
        company: data.company,
        companyUrl: data.companyUrl,
        date: data.date[locale],
        type: data.type,
        techStack,
      };
    });

  return allExperienceData.sort((a, b) => {
    const numA = parseInt(a.slug.split("_")[0]);
    const numB = parseInt(b.slug.split("_")[0]);
    return numA - numB;
  });
}
