import common from "@/i18n/common.json";

export type Locale = "es" | "en";

const dictionaries = {
  es: () => import("@/i18n/es.json").then((module) => module.default),
  en: () => import("@/i18n/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  const specific = await (dictionaries[locale] || dictionaries.es)();

  return {
    ...specific,

    personal_info: {
      ...common.personal_info,
      ...specific.personal_info,
    },

    technologies: common.technologies,

    skills_section: {
      title: specific.skills_section.title,
      frontend: {
        title: specific.skills_section.frontend_title,
        keys: common.skills_keys.frontend,
      },
      backend: {
        title: specific.skills_section.backend_title,
        keys: common.skills_keys.backend,
      },
      database: {
        title: specific.skills_section.database_title,
        keys: common.skills_keys.database,
      },
    },

    site: specific.site,
  };
};
