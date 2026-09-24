import type { ComponentProps } from "react";
import styles from "./gradient-text.module.css";

type GradientTextProps = ComponentProps<"span">;

export function GradientText({ className, ...props }: GradientTextProps) {
  return <span className={[styles.text, className].filter(Boolean).join(" ")} {...props} />;
}
