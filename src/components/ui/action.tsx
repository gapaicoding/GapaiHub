import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export const actionVariants = cva(
  [
    "relative inline-flex select-none items-center justify-center gap-2",
    "rounded-2xl border font-bold",
    "transition-[transform,background-color,border-color,color,box-shadow]",
    "duration-200 ease-[var(--ease-gapai)]",
    "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/35",
    "focus-visible:ring-offset-3 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-55",
  ],
  {
    variants: {
      variant: {
        primary: [
          "border-primary bg-primary text-primary-foreground",
          "shadow-[var(--shadow-soft)]",
          "hover:-translate-y-0.5 hover:border-primary-hover hover:bg-primary-hover",
          "hover:shadow-[var(--shadow-raised)]",
          "active:translate-y-0 active:scale-[0.985] active:bg-primary-active",
        ],

        secondary: [
          "border-border-strong bg-surface text-ink",
          "shadow-[var(--shadow-soft)]",
          "hover:-translate-y-0.5 hover:border-primary/35",
          "hover:bg-surface-selected hover:text-primary",
          "active:translate-y-0 active:scale-[0.985]",
        ],

        ghost: [
          "border-transparent bg-transparent text-primary",
          "hover:border-primary/10 hover:bg-surface-selected",
          "active:scale-[0.985]",
        ],

        inverse: [
          "border-white bg-white text-deep",
          "shadow-[var(--shadow-raised)]",
          "hover:-translate-y-0.5 hover:bg-white/90",
          "active:translate-y-0 active:scale-[0.985]",
        ],

        outlineInverse: [
          "border-white/30 bg-white/5 text-inverse",
          "backdrop-blur-sm",
          "hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10",
          "active:translate-y-0 active:scale-[0.985]",
        ],

        accent: [
          "border-accent/35 bg-accent-soft text-accent-ink",
          "hover:-translate-y-0.5 hover:border-accent",
          "hover:shadow-[var(--shadow-soft)]",
          "active:translate-y-0 active:scale-[0.985]",
        ],

        brand: [
          "border-accent-strong bg-accent-strong text-white",
          "shadow-[var(--shadow-soft)]",
          "hover:-translate-y-0.5 hover:border-accent-ink hover:bg-accent-ink",
          "hover:shadow-[var(--shadow-raised)]",
          "active:translate-y-0 active:scale-[0.985]",
        ],

        brandOutline: [
          "border-accent/45 bg-surface text-accent-ink",
          "shadow-[var(--shadow-soft)]",
          "hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft",
          "hover:shadow-[var(--shadow-raised)]",
          "active:translate-y-0 active:scale-[0.985]",
        ],
      },

      size: {
        sm: "min-h-10 px-4 text-sm",
        md: "min-h-11 px-5 text-sm",
        lg: "min-h-13 px-6 text-base sm:px-7",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type Variants = VariantProps<typeof actionVariants>;

export function ActionButton({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & Variants) {
  return (
    <button
      className={cn(actionVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export function ActionLink({
  className,
  variant,
  size,
  to,
  ...props
}: Omit<ComponentProps<typeof Link>, "to"> &
  Variants & {
    to: string;
  }) {
  return (
    <Link
      to={to}
      className={cn(actionVariants({ variant, size }), className)}
      {...(props as Record<string, unknown>)}
    />
  );
}

export function ActionAnchor({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & Variants) {
  return (
    <a
      className={cn(actionVariants({ variant, size }), className)}
      {...props}
    />
  );
}