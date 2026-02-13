import { MoveRight } from "@/components/icons";
import { Separator } from "@/components/ui/Separator";
import { BackLink } from "@/components/ui/BackLink";
import styles from "./styles.module.scss";

import { skillGroups, getSkillIcon } from "@/lib/skills";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BackLink href="/" className="fade-in-up" />

        <header className={styles.header}>
          <h1 className="title fade-in-up">
            A<span>bout</span>
          </h1>
          <p className="subtitle fade-in-up" style={{ animationDelay: "0.05s" }}>
            New York
            <MoveRight /> San Jose
          </p>
        </header>

        <section
          className={`${styles.content} fade-in-up`}
          style={{ animationDelay: "0.1s" }}
        >
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

        <section className={styles.section}>
          <div className={styles.skills}>
            {skillGroups.map((group, index) => (
              <div
                key={group.label}
                className={`${styles.skillGroup} fade-in-up`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <span className={styles.skillLabel}>{group.label}</span>
                <div className={styles.skillIcons}>
                  {group.items.map((name) => {
                    const Icon = getSkillIcon(name);
                    return (
                      <div key={name} className={styles.skillItem}>
                        {Icon && <Icon className={styles.skillIcon} />}
                        <span className={styles.skillName}>{name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>


      </div>
    </main>
  );
}
