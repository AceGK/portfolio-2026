export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  image: string;
  tags: string[];
  wip?: boolean;
  links: {
    site?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "purple-lotus",
    title: "Purple Lotus",
    description: "Cannabis e-commerce",
    longDescription:
      "E-commerce platform for a San Jose cannabis dispensary. Built using Next.js, Sanity CMS, AWS Cognito, Jane Roots headless e-commerce, Algolia Instant Search, Google Maps API, Leaflet.js, and Swiper.js.",
    date: "2024",
    image: "/images/purple-lotus-screenshot.jpg",
    tags: ["TypeScript", "Next.js", "Sanity", "Algolia"],
    links: {
      site: "https://plpcsanjose.com/",
    },
  },
  {
    wip: true,
    slug: "imperial-archive",
    title: "Imperial Archive",
    description: "WH40K book database",
    longDescription:
      "Comprehensive Warhammer 40,000 book database with searchable catalog of novels, authors, and series. Built with Sanity CMS for content management and Algolia for fast, filterable search.",
    date: "2024",
    image: "/images/imperial-archive.jpg",
    tags: ["TypeScript", "Next.js", "Sanity", "Algolia", "Convex"],
    links: {
      site: "https://imperialarchive.com/",
      github: "https://github.com/acegk/imperial-archive",
    },
  },
  {
    slug: "black-mesa",
    title: "Black Mesa Research Facility",
    description: "Working toward a better tomorrow",
    longDescription:
      "Fictional corporate website for the Black Mesa Research Facility from Half-Life. Features research articles, careers page, and corporate propaganda. A love letter to the game.",
    date: "2024",
    image: "/images/black-mesa.jpg",
    tags: ["TypeScript", "Next.js"],
    links: {
      site: "https://blackmesa.acekisch.com/",
      github: "https://github.com/acegk/black-mesa",
    },
  },
  {
    slug: "weyland-yutani",
    title: "Weyland Yutani Corporation",
    description: "Building better worlds",
    longDescription:
      "Corporate site for the Weyland-Yutani Corporation from the Alien universe. Featuring mission statement, technology showcase, and subspace contact form. Building better worlds since 2024.",
    date: "2024",
    image: "/images/weyland-yutani.jpg",
    tags: ["TypeScript", "Next.js"],
    links: {
      site: "https://weyland-yutani.vercel.app/",
      github: "https://github.com/acegk/weyland-yutani",
    },
  },
    {
    wip: true,
    slug: "elementable",
    title: "Elementable",
    description: "Periodic table",
    longDescription:
      "Interactive periodic table with detailed element information including atomic properties, electron configurations, 3D Bohr models, and Wikipedia links. Color-coded by element series.",
    date: "2024",
    image: "/images/elementable.jpg",
    tags: ["TypeScript", "Next.js"],
    links: {
      site: "https://www.elementable.app/",
      github: "https://github.com/acegk/elementable",
    },
  },
  {
    slug: "tipper",
    title: "Tipper",
    description: "Tip calculator",
    longDescription:
      "Clean tip calculator with bill splitting. Preset tip percentages with custom option, per-person breakdown for group dining.",
    date: "2024",
    image: "/images/tipper.jpg",
    tags: ["TypeScript", "React"],
    links: {
      site: "https://tipper-ace.vercel.app/",
      github: "https://github.com/acegk/tipper",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}