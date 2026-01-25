import Link from "next/link";
import { ChevronRight, ExternalLink } from "@/components/icons";
import styles from "./styles.module.scss";

export default function Nav() {
  return (
    <div className={styles.wrapper}>
      {/* <h1 className="title">A<span>ce</span> K<span>isch</span></h1> */}
      <h1 className="title">A<span>ce</span></h1>
      <p className="subtitle">software engineer</p>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/projects" className="link-underline">
              Projects <ChevronRight className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link href="/about" className="link-underline">
              About <ChevronRight className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/acegk"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Github <ExternalLink className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/acekisch/" target="_blank" rel="noopener noreferrer" className="link-underline">
              LinkedIn <ExternalLink className={styles.icon} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}