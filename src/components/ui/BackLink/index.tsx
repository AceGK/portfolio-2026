import Link from "next/link";
import { ArrowLeft } from "@/components/icons";
import s from "./styles.module.scss";

interface BackLinkProps {
  href: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function BackLink({
  href,
  label = "back",
  className,
  style,
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className={`${s.back}${className ? ` ${className}` : ""}`}
      style={style}
    >
      <ArrowLeft className={s.icon} />
      {label}
    </Link>
  );
}
