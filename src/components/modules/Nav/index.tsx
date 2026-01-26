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
            <Link href="/projects" className="nav-link">
              Projects <ChevronRight className="link-icon" />
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About <ChevronRight className="link-icon" />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/acegk"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Github <ExternalLink className="link-icon" />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/acekisch/" target="_blank" rel="noopener noreferrer" className="nav-link">
              LinkedIn <ExternalLink className="link-icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}