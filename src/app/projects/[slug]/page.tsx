import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "@/components/icons";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import styles from "./styles.module.scss";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className="title">{project.title}</h1>
          <div className={styles.tags}>
            {project.wip && <span className={styles.tag}>🚧 in progress</span>}
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <p className="subtitle">{project.longDescription}</p>
        </header>

        <div className={styles.imageWrapper}>
          {project.links.site ? (
            <Link
              href={project.links.site}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageWrapper}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1920}
                height={1080}
                className={styles.image}
              />
            </Link>
          ) : (
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                width={1920}
                height={1080}
                className={styles.image}
              />
            </div>
          )}
        </div>

        <div className={styles.meta}>
          <div className={styles.links}>
            {project.links.site && (
              <Link
                href={project.links.site}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <ExternalLink className={styles.linkIcon} />
                visit site
              </Link>
            )}
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <Github className={styles.linkIcon} />
                source
              </Link>
            )}
          </div>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.back}>
            <ArrowLeft className={styles.backIcon} />
            back to projects
          </Link>
        </footer>
      </div>
    </main>
  );
}
