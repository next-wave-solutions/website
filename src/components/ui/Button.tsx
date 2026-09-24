import type { ComponentProps } from "react";
import styles from "./button.module.css";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "tertiary";
};

export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={[styles.button, styles[variant], className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
