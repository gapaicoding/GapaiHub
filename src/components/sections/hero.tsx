import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Sparkles } from "lucide-react";

import { ConsultationCta } from "@/components/consultation-cta";
import { ActionAnchor } from "@/components/ui/action";
import { brandById, type Brand } from "@/content/brands";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-background py-10 sm:py-14 lg:flex lg:min-h-[calc(100svh-5rem)] lg:items-center lg:py-10"
    >
      <HeroBackground />

      <div className="relative mx-auto grid w-full max-w-[1240px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 xl:gap-16">
        <div className="animate-rise min-w-0">
          <p className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.08em] text-primary uppercase">
            <span className="grid size-9 place-items-center rounded-2xl border border-primary/15 bg-surface shadow-[var(--shadow-soft)]">
              <Sparkles aria-hidden="true" className="size-4" />
            </span>
            Ekosistem pendidikan anak
          </p>

          <h1
            id="hero-title"
            className="mt-6 max-w-3xl text-4xl leading-[1.04] font-extrabold tracking-[-0.052em] text-balance-heading text-ink sm:text-5xl lg:text-[3.7rem] xl:text-[4.15rem]"
          >
            Arah yang tepat
            <span className="mt-1 block text-primary">
              untuk setiap potensi anak.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg lg:text-xl">
            Gapai Mentorship menyatukan empat brand spesialis untuk membantu
            orang tua memahami kebutuhan anak dan menemukan pendampingan yang
            paling relevan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ActionAnchor
              href="#program-finder"
              variant="primary"
              size="lg"
              className="group w-full sm:w-auto"
            >
              <Compass aria-hidden="true" className="size-4" />
              Temukan program untuk anak
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </ActionAnchor>

            <ConsultationCta
              channel="gapai"
              label="Konsultasikan kebutuhan anak"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        <div className="animate-rise min-w-0 [animation-delay:120ms]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-brand-lavender/45" />
      <div className="animate-pulse-soft absolute -left-40 top-8 size-[30rem] rounded-full bg-brand-sky/18 blur-3xl" />
      <div className="animate-pulse-soft absolute -right-40 -top-32 size-[34rem] rounded-full bg-primary/14 blur-3xl [animation-delay:900ms]" />
      <div className="absolute -bottom-48 left-1/3 size-96 rounded-full bg-brand-yellow/16 blur-3xl" />
      <div className="absolute left-[6%] top-[18%] hidden h-px w-32 rotate-[-12deg] bg-gradient-to-r from-transparent via-primary/20 to-transparent lg:block" />
      <div className="absolute bottom-[15%] right-[4%] hidden h-px w-40 rotate-[18deg] bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent lg:block" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

function HeroVisual() {
  return (
    <figure className="relative mx-auto w-full max-w-[590px]">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[3.5rem] bg-gradient-to-br from-primary/10 via-brand-lavender/30 to-brand-yellow/15 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-8 top-4 -z-10 size-28 rounded-full border border-primary/15"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-6 -left-7 -z-10 size-32 rounded-full bg-brand-yellow/25"
      />

      <div className="relative aspect-[6/5] w-full">
        <div
          aria-hidden="true"
          className="absolute inset-3 rounded-[2.25rem] border border-primary/10 bg-surface/55 shadow-[var(--shadow-float)] backdrop-blur-sm"
        />

        <div className="relative grid size-full grid-cols-12 grid-rows-12 gap-2.5 sm:gap-3">
          <BrandLogoCard
            brand={brandById.els}
            priority
            className="col-start-1 col-span-7 row-start-1 row-span-7 z-10"
          />

          <BrandLogoCard
            brand={brandById.joytalk}
            className="col-start-8 col-span-5 row-start-1 row-span-5 z-20 translate-y-2"
          />

          <BrandLogoCard
            brand={brandById.brilia}
            className="col-start-1 col-span-5 row-start-8 row-span-5 z-20 -translate-y-1"
          />

          <BrandLogoCard
            brand={brandById.kidspro}
            className="col-start-6 col-span-7 row-start-6 row-span-7 z-20"
          />
        </div>

        <div className="pointer-events-none absolute left-[53%] top-[53%] z-30 hidden size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[5px] border-background bg-deep text-center text-white shadow-[var(--shadow-raised)] sm:grid">
          <div>
            <span className="block text-xl leading-none font-extrabold">4</span>
            <span className="mt-1 block text-[0.58rem] leading-tight font-bold tracking-wide text-white/65 uppercase">
              Brand
              <br />
              spesialis
            </span>
          </div>
        </div>
      </div>

      <figcaption className="mx-auto mt-5 flex max-w-md items-start gap-3 rounded-2xl border border-border bg-surface/70 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-sm">
        <span
          aria-hidden="true"
          className="mt-1 size-2.5 shrink-0 rounded-full bg-primary shadow-[0_0_0_5px_var(--gapai-purple-100)]"
        />
        <p className="text-xs leading-relaxed text-ink-secondary sm:text-sm">
          Satu ekosistem untuk anak{" "}
          <span className="font-bold text-ink">
            belajar, berkomunikasi, berkarya, dan bertumbuh
          </span>
          .
        </p>
      </figcaption>
    </figure>
  );
}

type BrandLogoCardProps = {
  brand: Brand;
  className?: string;
  priority?: boolean;
};

function BrandLogoCard({
  brand,
  className,
  priority = false,
}: BrandLogoCardProps) {
  return (
    <Link
      to={brand.href}
      data-accent={brand.id}
      aria-label={`Lihat program ${brand.name}`}
      className={cn(
        "group relative min-h-0 min-w-0 overflow-hidden",
        "rounded-[1.4rem] border-[3px] border-surface bg-surface",
        "shadow-[var(--shadow-raised)] outline-none",
        "transition-all duration-500 ease-[var(--ease-gapai)]",
        "hover:z-40 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[var(--shadow-float)]",
        "focus-visible:z-40 focus-visible:ring-3 focus-visible:ring-accent/35",
        "sm:rounded-[1.75rem]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-accent-soft/70 to-surface" />

      <div
        aria-hidden="true"
        className="absolute -right-[18%] -top-[24%] size-[70%] rounded-full border border-accent/15 bg-accent/5 transition-transform duration-700 group-hover:scale-110"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-[28%] -left-[20%] size-[65%] rounded-full bg-accent/10 blur-2xl"
      />

      <div className="absolute inset-x-3 bottom-[3.5rem] top-5 flex items-center justify-center sm:inset-x-5 sm:bottom-[4.15rem] sm:top-7">
        <img
          src={brand.logo.src}
          alt={brand.logo.alt}
          width={brand.logo.width}
          height={brand.logo.height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 42vw, 68vw"
          className={cn(
            "object-contain transition-transform duration-500 ease-[var(--ease-gapai)] group-hover:scale-[1.045]",
            brand.logo.layout === "badge" && "size-[76%] max-h-full max-w-full",
            brand.logo.layout === "landscape" && "h-auto max-h-[82%] w-[88%]",
            brand.logo.layout === "wide" && "h-auto max-h-[76%] w-[92%]",
          )}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-accent/12 bg-surface/88 px-3 py-2.5 backdrop-blur-sm sm:px-4 sm:py-3">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="size-2 shrink-0 rounded-full bg-accent"
              />
              <p className="truncate text-xs font-extrabold text-ink sm:text-sm">
                {brand.name}
              </p>
            </div>
            <p className="mt-0.5 hidden truncate pl-4 text-[0.65rem] font-semibold text-accent-ink sm:block">
              {brand.verb}
            </p>
          </div>

          <ArrowRight
            aria-hidden="true"
            className="size-3.5 shrink-0 text-accent-ink transition-transform duration-200 group-hover:translate-x-0.5 sm:size-4"
          />
        </div>
      </div>
    </Link>
  );
}