import {
  Typescript,
  React,
  Nextjs,
  Node,
  Sass,
  Tailwind,
  Git,
  Vercel,
  Sanity,
  Firebase,
  Mongodb,
  Algolia,
  Aws,
  Figma,
  Convex,
  Photoshop,
  Illustrator,
} from "@/components/icons";
import { ComponentType, SVGProps } from "react";

export interface Skill {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

// Map skill names to icons (keys should match your project tags)
export const skillsMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  TypeScript: Typescript,
  React: React,
  "Next.js": Nextjs,
  "Node.js": Node,
  SCSS: Sass,
  Tailwind: Tailwind,
  Git: Git,
  Vercel: Vercel,
  Sanity: Sanity,
  Firebase: Firebase,
  MongoDB: Mongodb,
  Algolia: Algolia,
  AWS: Aws,
  Figma: Figma,
  Convex: Convex,
  Photoshop: Photoshop,
  Illustrator: Illustrator,
};

// Grouped skills for the about page
export const skillGroups = [
  {
    label: "Dev",
    items: ["TypeScript", "React", "Next.js", "Node.js", "SCSS", "Tailwind", "Git", "Vercel"],
  },
  {
    label: "Data",
    items: ["AWS", "Sanity", "Algolia", "Convex", "Firebase", "MongoDB"],
  },
  {
    label: "Design",
    items: ["Figma", "Photoshop", "Illustrator"],
  },
];

export function getSkillIcon(name: string) {
  return skillsMap[name];
}