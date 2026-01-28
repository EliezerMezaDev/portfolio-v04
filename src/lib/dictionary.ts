import fs from "fs";
import path from "path";
import matter from "gray-matter";

import commonData from "@/i18n/common.json";

export type Locale = "es" | "en";

export interface Technology {
  name: string;
  icon: string;
}

export interface LocalizedImage {
  src: string;
  alt: string;
}

export interface Experience {
  slug: string;
  content: string;
  role: string;
  company: string;
  companyUrl?: string;
  date: string;
  type: "work" | "consulting";
  techStack: Technology[];
}

export interface Project {
  slug: string;
  content: string;
  title: string;
  summary: string;
  isFeatured: boolean;
  tags: Technology[];
  repoUrl?: string;
  liveUrl?: string;
  portraitImage: LocalizedImage;
  galleryImages: LocalizedImage[];
}

const dictionaries = {
  es: () => import("@/i18n/es.json").then((module) => module.default),
  en: () => import("@/i18n/en.json").then((module) => module.default),
};

const experienceDir = path.join(process.cwd(), "src/content/experience");
const projectsDir = path.join(process.cwd(), "src/content/projects");

const extractLocalizedContent = (fullContent: string, locale: string) => {
  const regex = new RegExp(`---${locale}---([\\s\\S]*?)(?=---|$)`);
  const match = fullContent.match(regex);

  return match ? match[1].trim() : "";
};

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

const mapTechnologies = (tags: string[] = []): Technology[] => {
  return tags.map((techKey) => {
    const techInfo =
      commonData.technologies[techKey as keyof typeof commonData.technologies];

    return techInfo || { name: techKey, icon: "lucide:code" };
  });
};

export async function getExperienceData(
  locale: "es" | "en",
): Promise<Experience[]> {
  if (!fs.existsSync(experienceDir)) return [];

  const fileNames = fs.readdirSync(experienceDir);

  const allData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(experienceDir, fileName);
      const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));

      return {
        slug,
        content: extractLocalizedContent(content, locale),
        role: data.role[locale],
        company: data.company,
        companyUrl: data.companyUrl,
        date: data.date[locale],
        type: data.type,
        techStack: mapTechnologies(data.techStack),
      };
    });

  return allData.sort((a, b) => parseInt(a.slug) - parseInt(b.slug));
}

export async function getProjectsData(locale: "es" | "en"): Promise<Project[]> {
  if (!fs.existsSync(projectsDir)) return [];

  const fileNames = fs.readdirSync(projectsDir);

  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(projectsDir, fileName);
      const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));

      return {
        slug,
        content: extractLocalizedContent(content, locale),
        title: data.title[locale],
        summary: data.summary[locale],
        isFeatured: data.isFeatured ?? false,
        repoUrl: data.repoUrl,
        liveUrl: data.liveUrl,
        tags: mapTechnologies(data.tags),

        portraitImage: {
          src: data.portraitImage.src,
          alt: data.portraitImage.alt[locale],
        },

        galleryImages: (data.galleryImages || []).map((img: any) => ({
          src: img.src,
          alt: img.alt[locale],
        })),
      };
    });

  return allProjects.sort((a, b) =>
    a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1,
  );
}
