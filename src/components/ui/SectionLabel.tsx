import type { ComponentProps } from "react";
import styles from "./section-label.module.css";

type SectionLabelProps = ComponentProps<"p">;

export function SectionLabel({ className, ...props }: SectionLabelProps) {
  return <p className={[styles.label, className].filter(Boolean).join(" ")} {...props} />;
}
