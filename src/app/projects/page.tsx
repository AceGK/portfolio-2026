import { BackLink } from "@/components/ui/BackLink";
import { ListNav } from "@/components/ui/ListNav";
import { PageHeading } from "@/components/ui/PageHeading";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main>
      <div style={{width: "100%", maxWidth: "18rem"}}>
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
