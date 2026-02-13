import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "@/components/icons";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { Tag } from "@/components/ui/Tag";
import { BackLink } from "@/components/ui/BackLink";
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
        <BackLink
          href="/projects"
          label="back to projects"
          className="fade-in-up"
        />

        <h1 className="title fade-in-up">{project.title}</h1>
        <div
          className={`${styles.imageWrapper} fade-in-up`}
          style={{ animationDelay: "0.05s" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
            className={styles.image}
          />
        </div>

        <div
          className={`${styles.tags} fade-in-up`}
          style={{ animationDelay: "0.1s" }}
        >
          {project.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
        <p
          className="fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          {project.longDescription}
        </p>

        <div
          className={`${styles.meta} fade-in-up`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className={styles.links}>
            {project.links.site && (
              <Link
                href={project.links.site}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-underline-muted ${styles.link}`}
              >
                <ExternalLink className="link-icon-static" />
                visit site
              </Link>
            )}
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-underline-muted ${styles.link}`}
              >
                <Github className="link-icon-static" />
                source
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
