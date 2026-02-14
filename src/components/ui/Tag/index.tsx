import { getSkillIcon, getSkillColor } from "@/lib/skills";
import styles from "./styles.module.scss";

interface TagProps {
  name: string;
  showIcon?: boolean;
  variant?: "default" | "wip";
}

export function Tag({ name, showIcon = true, variant = "default" }: TagProps) {
  if (variant === "wip") {
    return (
      <span className={styles.tag}>
        <span className={styles.name}>🚧 in progress</span>
      </span>
    );
  }

  const Icon = getSkillIcon(name);
  const color = getSkillColor(name);

  return (
    <span
      className={styles.tag}
      style={color ? { "--brand-color": color } as React.CSSProperties : undefined}
    >
      {showIcon && Icon && <Icon className={styles.icon} />}
      <span className={styles.name}>{name}</span>
    </span>
  );
}