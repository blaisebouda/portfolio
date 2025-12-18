type StackProps = {
  gap?: string;
  direction?: "row" | "column";
  center?: boolean;
  between?: boolean;
  wrap?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Flex({
  gap = "1em",
  direction = "row",
  center = false,
  between = false,
  wrap = false,
  className,
  children,
}: StackProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        gap: gap,
        flexDirection: direction,
        alignItems: center ? "center" : "",
        justifyContent: between ? "space-between" : "",
        flexWrap: wrap ? "wrap" : "nowrap",
      }}
    >
      {children}
    </div>
  );
}
