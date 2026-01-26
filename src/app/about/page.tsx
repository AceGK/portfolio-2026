import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import styles from "./styles.module.scss";

import { skillGroups, getSkillIcon } from "@/lib/skills";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className="title">
            A<span>bout</span>
          </h1>
          <p className="subtitle">
            new york
            <ArrowRight /> san jose
          </p>
        </header>

        <section className={styles.content}>
          <p className={styles.paragraph}>
            Building modern web applications since 2014. Mostly React, Next.js,
            and TypeScript. Currently focused on e-commerce and content
            platforms.
          </p>

          <p className={styles.paragraph}>
            Beyond code: photography, painting, music, reading. Partial to
            fantasy, sci-fi, and horror genres.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>skills</h2>
          <div className={styles.skills}>
            {skillGroups.map((group, index) => (
              <div
                key={group.label}
                className={styles.skillGroup}
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

        <section className={styles.footer}>
          <Link href="/" className={styles.back}>
            <ArrowLeft className={styles.backIcon} />
            back
          </Link>
        </section>
      </div>
    </main>
  );
}
