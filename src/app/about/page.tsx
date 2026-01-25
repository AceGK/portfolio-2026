import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Typescript,
  Javascript,
  React,
  Nextjs,
  Node,
  Html,
  Css,
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
  Lightroom,
  Illustrator,
} from "@/components/icons";
import styles from "./styles.module.scss";

const skills = [
  {
    label: "dev",
    items: [
      { name: "TypeScript", icon: Typescript },
      { name: "React", icon: React },
      { name: "Next.js", icon: Nextjs },
      { name: "Node.js", icon: Node },
      // { name: "HTML", icon: Html },
      // { name: "CSS", icon: Css },
      { name: "SCSS", icon: Sass },
      { name: "Tailwind", icon: Tailwind },
      { name: "Git", icon: Git },
      { name: "Vercel", icon: Vercel },
    ],
  },
  {
    label: "data",
    items: [
      { name: "AWS", icon: Aws },
      { name: "Sanity", icon: Sanity },
      { name: "Algolia", icon: Algolia },
      { name: "Convex", icon: Convex },
      { name: "Firebase", icon: Firebase },
      { name: "MongoDB", icon: Mongodb },
    ],
  },
  {
    label: "design",
    items: [
      { name: "Figma", icon: Figma },
      { name: "Photoshop", icon: Photoshop },
      { name: "Illustrator", icon: Illustrator },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className="title">
            A<span>bout</span>
          </h1>
          <p className="subtitle">
            new york
            <ArrowRight /> san jose
          </p>
        </header>

        <section className={styles.content}>
          <p className={styles.paragraph}>
            Building modern web applications since 2014. Mostly React, Next.js,
            and TypeScript. Currently focused on e-commerce and content
            platforms.
          </p>

          <p className={styles.paragraph}>
            Outside of code, I&apos;m into photography, painting, music, and
            reading. I love fantasy, sci-fi, and horror genres.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>skills</h2>
          <div className={styles.skills}>
            {skills.map((group, index) => (
              <div
                key={group.label}
                className={styles.skillGroup}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <span className={styles.skillLabel}>{group.label}</span>
                <div className={styles.skillIcons}>
                  {group.items.map((skill) => (
                    <div key={skill.name} className={styles.skillItem}>
                      <skill.icon className={styles.skillIcon} />
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.footer}>
          <Link href="/" className={styles.back}>
            <ArrowLeft className={styles.backIcon} />
            back
          </Link>
        </section>
      </div>
    </main>
  );
}
