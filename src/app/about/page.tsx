import { MoveRight } from "@/components/icons";
import { BackLink } from "@/components/ui/BackLink";
import { PageHeading } from "@/components/ui/PageHeading";
import { Separator } from "@/components/ui/Separator";
import { Tag } from "@/components/ui/Tag";
import { TagGroup } from "@/components/ui/Tag/TagGroup";
import { skillGroups } from "@/lib/skills";

export default function AboutPage() {
  return (
    <main>
      <div style={{width: "100%", maxWidth: "27rem"}}>
        <BackLink href="/" className="fade-in-up" />

        <PageHeading>
          A<span>bout</span>
        </PageHeading>
        <p className="subtitle fade-in-up" style={{ animationDelay: "0.05s" }}>
          New York
          <MoveRight /> San Jose
        </p>

        <section className="fade-in-up" style={{ animationDelay: "0.1s" }}>
          <p>
            Building modern web applications since 2014. Mostly React, Next.js,
            and TypeScript. Currently focused on e-commerce and content
            platforms.
          </p>

          <p>
            Beyond code: photography, painting, music, reading. Partial to
            fantasy, sci-fi, and horror genres.
          </p>
        </section>

        <Separator
          className="fade-in-up"
          style={{ margin: "2rem 0", animationDelay: "0.15s" }}
        />


          {skillGroups.map((group, index) => (
            <TagGroup
              key={group.label}
              label={group.label}
              spacing="1.5rem"
              className="fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {group.items.map((name) => (
                <Tag key={name} name={name} />
              ))}
            </TagGroup>
          ))}
  
      </div>
    </main>
  );
}
