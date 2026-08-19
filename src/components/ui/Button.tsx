import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-action-primary text-action-primary-text hover:bg-action-primary-hover border border-transparent",
  secondary:
    "border border-action-secondary-border bg-transparent text-action-secondary-text hover:bg-action-secondary-hover-bg hover:border-action-secondary-hover-border",
  ghost:
    "bg-transparent text-action-ghost-text hover:bg-action-ghost-hover-bg",
};

export function buttonStyles(
  variant: ButtonVariant = "primary",
  className?: string,
) {
  return cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    className,
  );
}

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles(variant, className)}
      {...props}
    />
  );
}