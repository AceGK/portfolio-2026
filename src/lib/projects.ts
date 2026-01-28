export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  image: string;
  tags: string[];
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
    image: "/images/purple-lotus.jpg",
    tags: ["TypeScript", "Next.js", "Sanity", "Algolia"],
    links: {
      site: "https://plpcsanjose.com/",
    },
  },
    {
    slug: "imperial-archive",
    title: "Imperial Archive",
    description: "WH40K book database",
    longDescription:
      "Comprehensive Warhammer 40,000 book database with searchable catalog of novels, authors, and series. Built with Sanity CMS for content management and Algolia for fast, filterable search.",
    date: "2024",
    image: "/images/imperial-archive.jpg",
    tags: ["🚧 in progress", "TypeScript", "Next.js", "Sanity", "Algolia", "Convex"],
    links: {
      site: "https://imperialarchive.com/",
      github: "https://github.com/acegk/imperial-archive",
    },
  },
  {
    slug: "elementable",
    title: "Elementable",
    description: "Periodic table",
    longDescription:
      "Interactive periodic table with detailed element information including atomic properties, electron configurations, 3D Bohr models, and more.",
    date: "2024",
    image: "/images/elementable.jpg",
    tags: ["🚧 in progress", "TypeScript", "Next.js"],
    links: {
      site: "https://www.elementable.app/",
      github: "https://github.com/acegk/periodic-table",
    },
  },
  {
    slug: "tipper",
    title: "Tipper",
    description: "Tip calculator",
    longDescription:
      "Tip calculator with bill splitting. Preset tip percentages with custom option, per-person breakdown for group dining.",
    date: "2024",
    image: "/images/tipper.jpg",
    tags: ["TypeScript", "React"],
    links: {
      site: "https://tipper-ace.vercel.app/",
      github: "https://github.com/acegk/tip-calculator",
    },
  },
  {
    slug: "black-mesa",
    title: "Black Mesa Research Facility",
    description: "Working toward a better tomorrow",
    longDescription:
      "Fictional corporate website for the Black Mesa Research Facility from the Half-Life series. A love letter to the game.",
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
    title: "Weyland Yutani",
    description: "Building better worlds",
    longDescription:
      "Fictional corporate website for Weyland-Yutani, the infamous megacorporation from the Alien franchise.",
    date: "2024",
    image: "/images/weyland-yutani.jpg",
    tags: ["TypeScript", "Next.js"],
    links: {
      site: "https://weyland-yutani.vercel.app/",
      github: "https://github.com/acegk/weyland-yutani",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}