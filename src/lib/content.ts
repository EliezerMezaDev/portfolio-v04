import fs from "fs";
import path from "path";
import matter from "gray-matter";
import commonData from "@/i18n/common.json";

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
  type: "work" | "consulting";
  techStack: Technology[];
}

const contentDirectory = path.join(process.cwd(), "src/content/experience");

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
