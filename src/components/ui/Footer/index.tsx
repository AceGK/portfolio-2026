"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin } from "@/components/icons";
import s from "./styles.module.scss";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <span className={s.copyright}>&copy; 2026 Ace Kisch</span>

        <span className={s.separator} />

        <nav className={s.nav}>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </div>

      <div className={s.socials}>
        <a
          href="https://www.linkedin.com/in/acekisch"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/acekisch"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github />
        </a>
      </div>
    </footer>
  );
}
