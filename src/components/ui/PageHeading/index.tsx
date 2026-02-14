interface PageHeadingProps {
  children: React.ReactNode;
  fontSize?: string;
  spacing?: string;
}

export function PageHeading({ children, fontSize, spacing }: PageHeadingProps) {
  const style: React.CSSProperties = {
    ...(fontSize && { fontSize }),
    ...(spacing && { marginBottom: spacing }),
  };

  return (
    <h1
      className="title fade-in-up"
      style={Object.keys(style).length ? style : undefined}
    >
      {children}
    </h1>
  );
}
