import type { ComponentProps } from "react";
import styles from "./section.module.css";

type SectionProps = ComponentProps<"section"> & {
  spacing?: "default" | "none";
};

export function Section({ spacing = "default", className, ...props }: SectionProps) {
  return (
    <section
      className={[spacing === "none" ? styles.none : styles.section, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
