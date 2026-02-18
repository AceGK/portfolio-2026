import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { ExternalLink, Github } from "@/components/icons";
import { BackLink } from "@/components/ui/BackLink";
import { PageHeading } from "@/components/ui/PageHeading";
import { Tag } from "@/components/ui/Tag";
import { TagGroup } from "@/components/ui/Tag/TagGroup";
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
    <main>
      <div style={{width: "100%", maxWidth: "27rem"}}>
        <BackLink
          href="/projects"
          label="back to projects"
          className="fade-in-up"
        />

        <PageHeading fontSize="2.75rem" spacing="0.5rem">{project.title}</PageHeading>

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
            priority
          />
        </div>

        <TagGroup
          className="fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {project.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </TagGroup>

        <p
          className="fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          {project.longDescription}
        </p>

        <div
          className={`${styles.links} fade-in-up`}
          style={{ animationDelay: "0.2s" }}
        >
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
    </main>
  );
}
