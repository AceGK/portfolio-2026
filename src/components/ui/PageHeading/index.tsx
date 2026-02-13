interface PageHeadingProps {
  children: React.ReactNode;
  fontSize?: string;
}

export function PageHeading({ children, fontSize }: PageHeadingProps) {
  return (
    <h1
      className="title fade-in-up"
      style={fontSize ? { fontSize } : undefined}
    >
      {children}
    </h1>
  );
}
