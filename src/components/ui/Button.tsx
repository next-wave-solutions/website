import type { ComponentProps } from "react";
import styles from "./button.module.css";

type Variant = "primary" | "secondary" | "tertiary";

type ButtonAsButton = ComponentProps<"button"> & {
  href?: undefined;
  variant?: Variant;
};

type ButtonAsLink = ComponentProps<"a"> & {
  href: string;
  variant?: Variant;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(" ");

  if (props.href !== undefined) {
    return <a className={classes} {...props} />;
  }

  const { type = "button", ...buttonProps } = props;
  return <button type={type} className={classes} {...buttonProps} />;
}
