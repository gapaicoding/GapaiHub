import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
  inverse?: boolean;
};

export function Wordmark({
  className,
  inverse = false,
}: WordmarkProps) {
  return (
    <span
      className={cn(
        "inline-flex h-12 shrink-0 items-center",
        inverse && "rounded-2xl bg-white px-3 py-2",
        className,
      )}
    >
      <img
        src="/logo-gapai-wordmark.png"
        alt="Gapai Mentorship"
        width={800}
        height={474}
        decoding="async"
        className="block h-full w-auto object-contain"
      />
    </span>
  );
}