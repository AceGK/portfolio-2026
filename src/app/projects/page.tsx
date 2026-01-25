import Link from "next/link";
import { ArrowLeft, ChevronRight } from "@/components/icons";
import { projects } from "@/lib/projects";
import styles from "./styles.module.scss";

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className="title">P<span>rojects</span></h1>
          <p className="subtitle">selected work</p>
        </header>

        <ul className={styles.list}>
          {projects.map((project, index) => (
            <li
              key={project.slug}
              className={styles.item}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className={styles.link}
              >
                <div className={styles.content}>
                  <span className={styles.projectTitle}>{project.title}</span>
                  <span className={styles.description}>
                    {project.description}
                  </span>
                </div>
                <ChevronRight className={styles.icon} />
              </Link>
            </li>
          ))}
        </ul>

        <footer className={styles.footer}>
          <Link href="/" className={styles.back}>
            <ArrowLeft className={styles.backIcon} />
            back
          </Link>
        </footer>
      </div>
    </main>
  );
}