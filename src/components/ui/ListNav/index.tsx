import Link from "next/link";
import { ChevronRight, ExternalLink } from "@/components/icons";
import s from "./styles.module.scss";

export interface ListNavItem {
  label: string;
  description?: string;
  href: string;
  external?: boolean;
}

interface ListNavProps {
  items: ListNavItem[];
  className?: string;
  style?: React.CSSProperties;
  baseDelay?: number;
  delayStep?: number;
}

export function ListNav({
  items,
  className,
  style,
  baseDelay = 0.1,
  delayStep = 0.05,
}: ListNavProps) {
  return (
    <nav>
      <ul
        className={`${s.list}${className ? ` ${className}` : ""}`}
        style={style}
      >
        {items.map((item, index) => {
          const isExternal = item.external ?? item.href.startsWith("http");

          return (
            <li
              key={item.href}
              className="fade-in-up"
              style={{ animationDelay: `${baseDelay + index * delayStep}s` }}
            >
              <Link
                href={item.href}
                className="nav-link"
                {...(isExternal && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {item.description ? (
                  <div className={s.content}>
                    <span>{item.label}</span>
                    <span className={s.description}>{item.description}</span>
                  </div>
                ) : (
                  item.label
                )}
                {isExternal ? (
                  <ExternalLink className="link-icon" />
                ) : (
                  <ChevronRight className="link-icon" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
