// https://react-icons.github.io/react-icons
// UI icons (Lucide)
export {
  LuChevronRight as ChevronRight,
  LuChevronLeft as ChevronLeft,
  LuExternalLink as ExternalLink,
  LuArrowLeft as ArrowLeft,
  LuArrowRight as ArrowRight,
  LuMoveRight as MoveRight,
  LuMenu as Menu,
  LuX as X,
  LuMail as Mail,
} from "react-icons/lu";

// Brand icons (Simple Icons)
export {
  // Languages & Frameworks
  SiJavascript as Javascript,
  SiTypescript as Typescript,
  SiNodedotjs as Node,
  SiReact as React,
  SiNextdotjs as Nextjs,
  SiHtml5 as Html,
  SiCss3 as Css,
  SiSass as Sass,
  SiTailwindcss as Tailwind,
  SiLeaflet as Leaflet,
  SiSwiper as Swiper,

  // Tools & Version Control
  SiGit as Git,
  SiGithub as Github,
  SiVercel as Vercel,
  SiLinkedin as Linkedin,

  // Data & Backend
  SiFirebase as Firebase,
  SiMongodb as Mongodb,
  SiAlgolia as Algolia,

  // Design
  SiFigma as Figma,
  SiAdobe as Adobe,
  SiSketch as Sketch,
  SiAdobephotoshop as Photoshop,
  SiAdobelightroom as Lightroom,
  SiAdobeillustrator as Illustrator,
} from "react-icons/si";

// Font Awesome (for AWS)
export { FaAws as Aws } from "react-icons/fa";

// Custom icons
export const Sanity = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="m23.327 15.205-.893-1.555-4.321 2.632 4.799-6.11.726-.426-.179-.27.33-.421-1.515-1.261-.693.883-13.992 8.186 5.173-6.221 9.636-5.282-.915-1.769-5.248 2.876 2.584-3.106-1.481-1.305-5.816 6.994-5.777 3.168 4.423-5.847 2.771-1.442-.88-1.789-8.075 4.203L6.186 4.43 4.648 3.198 0 9.349l.072.058.868 1.768 5.153-2.683-4.696 6.207.77.617.458.885 5.425-2.974-5.974 7.185 1.481 1.304.297-.358 14.411-8.459-4.785 6.094.078.065-.007.005.992 1.726 6.364-3.877-2.451 3.954 1.642 1.077L24 15.648z" />
  </svg>
);

export const Convex = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    className={className}
    style={style}
    viewBox="28 28 128 132"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path
      // fill="#F3B01C"
      d="M108.092 130.021c18.166-2.018 35.293-11.698 44.723-27.854-4.466 39.961-48.162 65.218-83.83 49.711-3.286-1.425-6.115-3.796-8.056-6.844-8.016-12.586-10.65-28.601-6.865-43.135 10.817 18.668 32.81 30.111 54.028 28.122Z"
    />
    <path
      // fill="#8D2676"
      d="M53.401 90.174c-7.364 17.017-7.682 36.94 1.345 53.336-31.77-23.902-31.423-75.052-.388-98.715 2.87-2.187 6.282-3.485 9.86-3.683 14.713-.776 29.662 4.91 40.146 15.507-21.3.212-42.046 13.857-50.963 33.555Z"
    />
    <path
      // fill="#EE342F"
      d="M114.637 61.855C103.89 46.87 87.069 36.668 68.639 36.358c35.625-16.17 79.446 10.047 84.217 48.807.444 3.598-.139 7.267-1.734 10.512-6.656 13.518-18.998 24.002-33.42 27.882 10.567-19.599 9.263-43.544-3.065-61.704Z"
    />
  </svg>
);
