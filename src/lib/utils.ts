import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const cn = (...inputs: any) => {
  return twMerge(clsx(inputs));
};

export const codeEffect = (text: string) => {
  const pascalCase = text
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  return `<${pascalCase} />`;
};
