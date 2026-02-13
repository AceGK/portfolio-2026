import styles from "./styles.module.scss";

interface TagGroupProps {
  label?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function TagGroup({ label, children, className, style }: TagGroupProps) {
  return (
    <div className={`${styles.group} ${className ?? ""}`} style={style}>
      {label && <span className={styles.groupLabel}>{label}</span>}
      <div className={styles.groupItems}>{children}</div>
    </div>
  );
}
