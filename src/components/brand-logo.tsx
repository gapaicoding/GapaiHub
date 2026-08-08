import type { Brand } from "@/content/brands";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  brand: Pick<Brand, "name" | "logo">;
  className?: string;
};

const layoutClasses = {
  badge: "max-h-40 max-w-40 sm:max-h-44 sm:max-w-44",
  landscape: "max-h-40 max-w-[17rem] sm:max-h-44 sm:max-w-[19rem]",
  wide: "max-h-32 max-w-[20rem] sm:max-h-36 sm:max-w-[23rem]",
} as const;

export function BrandLogo({ brand, className }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "flex w-full items-center justify-center",
        className,
      )}
    >
      <img
        src={brand.logo.src}
        alt={brand.logo.alt}
        width={brand.logo.width}
        height={brand.logo.height}
        loading="lazy"
        decoding="async"
        sizes="(min-width: 768px) 22rem, 75vw"
        className={cn(
          "h-auto w-auto object-contain transition-transform duration-500 ease-[var(--ease-gapai)]",
          layoutClasses[brand.logo.layout],
        )}
      />
    </span>
  );
}