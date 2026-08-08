import { ArrowRight, Compass, Sparkles } from "lucide-react";

import { ConsultationCta } from "@/components/consultation-cta";
import { ActionAnchor } from "@/components/ui/action";
import { brandById, brands } from "@/content/brands";
import type { Brand } from "@/content/brands";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-background py-10 sm:py-14 lg:flex lg:min-h-[calc(100svh-4.75rem)] lg:items-center lg:py-10"
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
            <span className="mt-1 block text-primary">untuk setiap potensi anak.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg lg:text-xl">
            Gapai Mentorship menyatukan empat brand spesialis untuk membantu orang tua memahami
            kebutuhan anak dan menemukan pendampingan yang paling relevan.
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

          <div className="mt-8 border-t border-border/80 pt-5">
            <p className="text-xs font-bold tracking-[0.14em] text-ink-muted uppercase">
              Empat ruang tumbuh dalam satu ekosistem
            </p>

            <ul className="mt-3 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {brands.map((brand) => (
                <li
                  key={brand.id}
                  data-accent={brand.id}
                  className="group flex min-w-0 items-center gap-2.5 rounded-2xl border border-accent/20 bg-surface/75 px-3 py-2.5 shadow-[var(--shadow-soft)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/45"
                >
                  <span
                    aria-hidden="true"
                    className="size-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_var(--accent-soft)]"
                  />

                  <span className="min-w-0">
                    <span className="block truncate text-xs font-bold text-ink">{brand.name}</span>

                    <span className="block text-[0.68rem] font-semibold text-accent-ink">
                      {brand.verb}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
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
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
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
          <BrandVisualCard
            brand={brandById.els}
            priority
            className="col-start-1 col-span-7 row-start-1 row-span-7 z-10"
          />

          <BrandVisualCard
            brand={brandById.joytalk}
            className="col-start-8 col-span-5 row-start-1 row-span-5 z-20 translate-y-2"
          />

          <BrandVisualCard
            brand={brandById.brilia}
            className="col-start-1 col-span-5 row-start-8 row-span-5 z-20 -translate-y-1"
          />

          <BrandVisualCard
            brand={brandById.kidspro}
            className="col-start-6 col-span-7 row-start-6 row-span-7 z-20"
          />
        </div>

        <div className="absolute left-[53%] top-[53%] z-30 hidden size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[5px] border-background bg-deep text-center text-white shadow-[var(--shadow-raised)] sm:grid">
          <div>
            <span className="block text-xl font-extrabold leading-none">4</span>

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

type BrandVisualCardProps = {
  brand: Brand;
  className?: string;
  priority?: boolean;
};

function BrandVisualCard({ brand, className, priority = false }: BrandVisualCardProps) {
  return (
    <article
      data-accent={brand.id}
      className={cn(
        "group relative min-h-0 min-w-0 overflow-hidden",
        "rounded-[1.4rem] border-[3px] border-surface bg-accent-soft",
        "shadow-[var(--shadow-raised)]",
        "transition-all duration-500 ease-[var(--ease-gapai)]",
        "hover:z-40 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]",
        "sm:rounded-[1.75rem]",
        className,
      )}
    >
      <img
        src={brand.image.src}
        alt={brand.image.alt}
        width={brand.image.width}
        height={brand.image.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 70vw"
        style={{
          objectPosition: brand.image.objectPosition ?? "center",
        }}
        className="size-full object-cover transition-transform duration-700 ease-[var(--ease-gapai)] group-hover:scale-[1.045]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/5 to-transparent"
      />

      {brand.image.isTemporary ? (
        <span className="absolute right-2.5 top-2.5 rounded-full border border-white/20 bg-deep/75 px-2.5 py-1 text-[0.58rem] font-bold text-white backdrop-blur-sm sm:text-[0.65rem]">
          Ilustrasi sementara
        </span>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-accent" />

          <p className="truncate text-xs font-extrabold text-white sm:text-sm">{brand.name}</p>
        </div>

        <p className="mt-0.5 hidden truncate pl-4 text-[0.65rem] font-semibold text-white/65 sm:block">
          {brand.verb}
        </p>
      </div>
    </article>
  );
}
