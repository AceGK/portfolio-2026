import { projects } from "@/lib/projects";
import { ListNav } from "@/components/ui/ListNav";
import { BackLink } from "@/components/ui/BackLink";
import styles from "./styles.module.scss";

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BackLink href="/" className="fade-in-up" />

        <h1 className="title fade-in-up">
          P<span>rojects</span>
        </h1>
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
