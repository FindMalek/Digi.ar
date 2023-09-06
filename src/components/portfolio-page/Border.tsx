import clsx from "clsx";

interface BorderProps {
  className?: string;
  position?: "top" | "left";
  invert?: boolean;
  as?: React.ElementType;
  children?: React.ReactNode;
}

export default function Border({
  className,
  position = "top",
  invert = false,
  as: Component = "div",
  ...props
}: BorderProps) {
  return (
    <Component
      className={clsx(
        className,
        "relative before:absolute after:absolute",
        invert
          ? "before:bg-white after:bg-white/10"
          : "before:bg-pink-500 after:bg-pink-950/10",
        position === "top" &&
          "before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px",
        position === "left" &&
          "before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
      )}
      {...props}
    />
  );
}
