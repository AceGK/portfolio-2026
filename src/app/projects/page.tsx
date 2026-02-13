import { projects } from "@/lib/projects";
import { ListNav } from "@/components/ui/ListNav";
import { PageHeading } from "@/components/ui/PageHeading";
import { BackLink } from "@/components/ui/BackLink";
import styles from "./styles.module.scss";

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BackLink href="/" className="fade-in-up" />

        <PageHeading>
          P<span>rojects</span>
        </PageHeading>
        <p className="subtitle fade-in-up" style={{ animationDelay: "0.05s" }}>
          Featured Work
        </p>

        <ListNav
          items={projects.map((p) => ({
            label: p.title,
            description: p.description,
            href: `/projects/${p.slug}`,
          }))}
        />
      </div>
    </main>
  );
}
