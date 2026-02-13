import styles from "./styles.module.scss";

interface TagGroupProps {
  label?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  spacing?: string;
}

export function TagGroup({ label, children, className, style, spacing = "1rem" }: TagGroupProps) {
  return (
    <div
      className={`${styles.group} ${className ?? ""}`}
      style={{ marginBottom: spacing, ...style }}
    >
      {label && <span className={styles.groupLabel}>{label}</span>}
      <div className={styles.groupItems}>{children}</div>
    </div>
  );
}
