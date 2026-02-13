import s from "./styles.module.scss";

interface SeparatorProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Separator({ className, style }: SeparatorProps) {
  return (
    <div
      className={`${s.separator}${className ? ` ${className}` : ""}`}
      style={style}
    />
  );
}