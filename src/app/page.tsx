import { AnimatedTextSlider } from "@/components/ui/AnimatedTextSlider";
import { ListNav } from "@/components/ui/ListNav";
import { PageHeading } from "@/components/ui/PageHeading";

export default function Home() {
  return (
    <main>
      <div style={{width: "100%", maxWidth: "16rem"}}>
        <PageHeading>
          A<span>ce</span> K<span>isch</span>
        </PageHeading>
        <AnimatedTextSlider
          texts={[
            "Software Engineer",
            "Full-Stack Developer",
            "UI/UX Enthusiast",
          ]}
          className="subtitle fade-in-up"
          interval={3000}
          style={{ animationDelay: "0.05s" }}
        />
        <ListNav
          items={[
            { label: "Projects", href: "/projects" },
            { label: "About", href: "/about" },
            { label: "Github", href: "https://github.com/acegk" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/acekisch/" },
          ]}
          style={{ textTransform: "lowercase" }}
        />
      </div>
    </main>
  );
}
