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
  Mysql, 
  Postgresql,
  Algolia,
  Leaflet,
  Swiper,
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

// Map skill names to icons and brand colors
export const skillsMap: Record<string, {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color?: string;
}> = {
  TypeScript: { icon: Typescript, color: "var(--brand-typescript)" },
  React: { icon: React, color: "var(--brand-react)" },
  "Next.js": { icon: Nextjs, color: "var(--brand-nextjs)" },
  "Node.js": { icon: Node, color: "var(--brand-node)" },
  SCSS: { icon: Sass, color: "var(--brand-sass)" },
  Tailwind: { icon: Tailwind, color: "var(--brand-tailwind)" },
  Git: { icon: Git, color: "var(--brand-git)" },
  Vercel: { icon: Vercel, color: "var(--brand-vercel)" },
  Sanity: { icon: Sanity, color: "var(--brand-sanity)" },
  Firebase: { icon: Firebase, color: "var(--brand-firebase)" },
  MongoDB: { icon: Mongodb, color: "var(--brand-mongodb)" },
  MySQL: { icon: Mysql, color: "var(--brand-mysql)" },
  PostgreSQL: { icon: Postgresql, color: "var(--brand-postgresql)" },
  Algolia: { icon: Algolia, color: "var(--brand-algolia)" },
  AWS: { icon: Aws, color: "var(--brand-aws)" },
  Figma: { icon: Figma, color: "var(--brand-figma)" },
  Convex: { icon: Convex, color: "var(--brand-convex)" },
  Photoshop: { icon: Photoshop, color: "var(--brand-photoshop)" },
  Illustrator: { icon: Illustrator, color: "var(--brand-illustrator)" },
  Leaflet: { icon: Leaflet, color: "var(--brand-leaflet)" },
  Swiper: { icon: Swiper, color: "var(--brand-swiper)" },
};

// Grouped skills for the about page
export const skillGroups = [
  {
    label: "Dev",
    items: ["TypeScript", "React", "Next.js", "Node.js", "SCSS", "Tailwind", "Vercel"],
  },
  {
    label: "Data",
    items: ["MongoDB", "MySQL", "PostgreSQL", "AWS", "Convex", "Firebase", "Sanity", "Algolia"],
  },
  {
    label: "Design",
    items: ["Figma", "Photoshop", "Illustrator"],
  },
];

export function getSkillIcon(name: string) {
  return skillsMap[name]?.icon;
}

export function getSkillColor(name: string) {
  return skillsMap[name]?.color;
}