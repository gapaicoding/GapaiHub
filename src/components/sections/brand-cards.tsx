import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  AudioLines,
  BookOpenText,
  Check,
  Code2,
  Languages,
  Layers3,
  MessageCircle,
  Mic2,
  Sparkles,
} from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { actionVariants } from "@/components/ui/action";
import type { BrandId } from "@/content/brands";
import { brands } from "@/content/brands";
import { cn } from "@/lib/utils";

export function BrandCards() {
  return (
    <section
      aria-labelledby="brand-cards-title"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <BrandSectionBackground />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-end gap-7 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-primary uppercase">
              <Layers3 aria-hidden="true" className="size-4" />
              Empat brand spesialis
            </p>

            <h2
              id="brand-cards-title"
              className="mt-4 max-w-2xl text-3xl leading-tight font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
            >
              Empat identitas, satu arah pendampingan
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink-secondary lg:justify-self-end lg:text-lg">
            Setiap brand memiliki keahlian dan pendekatan yang berbeda. Pilih
            berdasarkan kemampuan yang ingin dikembangkan anak.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {brands.map((brand, index) => (
            <li
              key={brand.id}
              data-accent={brand.id}
              className="min-w-0"
            >
              <article className="group/card relative flex h-full min-w-0 flex-col overflow-hidden rounded-[2.25rem] border border-border bg-surface shadow-[var(--shadow-soft)] transition-all duration-500 ease-[var(--ease-gapai)] hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-[var(--shadow-float)]">
                <div className="relative isolate flex min-h-[19rem] items-center justify-center overflow-hidden border-b border-accent/15 bg-accent-soft px-6 py-14 sm:px-10">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-white/75 via-transparent to-accent/10"
                  />

                  <BrandStagePattern brandId={brand.id} />

                  <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-3 p-5 sm:p-6">
                    <span className="rounded-full border border-accent/20 bg-surface/75 px-3 py-1.5 text-xs font-extrabold tracking-[0.08em] text-accent-ink uppercase shadow-sm backdrop-blur-md">
                      {brand.verb}
                    </span>

                    <span className="grid size-10 place-items-center rounded-full border border-accent/20 bg-surface/75 text-xs font-extrabold text-accent-ink shadow-sm backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative z-10 flex min-h-[11rem] w-full max-w-[28rem] items-center justify-center rounded-[2rem] border border-white/80 bg-white/80 px-6 py-5 shadow-[var(--shadow-raised)] backdrop-blur-md transition-transform duration-500 ease-[var(--ease-gapai)] group-hover/card:-translate-y-1 group-hover/card:scale-[1.015] sm:px-8">
                    <BrandLogo brand={brand} />
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-5 left-1/2 h-6 w-1/2 -translate-x-1/2 rounded-full bg-accent/15 blur-xl"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold tracking-[0.12em] text-accent-ink uppercase">
                        {brand.role}
                      </p>

                      <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                        {brand.name}
                      </h3>
                    </div>

                    <span className="w-fit shrink-0 rounded-full bg-accent-soft px-3 py-1.5 text-xs font-bold text-accent-ink">
                      {brand.verb}
                    </span>
                  </div>

                  <p className="mt-5 text-base leading-relaxed font-bold text-ink">
                    {brand.focus}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                    {brand.needScope}
                  </p>

                  <div className="mt-6 border-t border-border pt-5">
                    <p className="text-xs font-extrabold tracking-[0.12em] text-ink-muted uppercase">
                      Kompetensi utama
                    </p>

                    <ul className="mt-3 flex flex-wrap gap-2">
                      {brand.competencies.map((competency) => (
                        <li
                          key={competency}
                          className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-soft/70 px-3 py-2 text-xs font-semibold text-accent-ink"
                        >
                          <Check
                            aria-hidden="true"
                            className="size-3.5 shrink-0"
                          />
                          {competency}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-7">
                    <Link
                      to={brand.href}
                      className={cn(
                        actionVariants({
                          variant: "accent",
                          size: "md",
                        }),
                        "group/link w-full justify-between",
                      )}
                    >
                      {brand.ctaLabel}

                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 rounded-[1.75rem] border border-border bg-surface/65 px-5 py-4 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm leading-relaxed text-ink-secondary">
            Belum yakin memilih brand? Mulai dari kebutuhan anak melalui
            program finder.
          </p>

          <a
            href="#program-finder"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-primary"
          >
            Temukan program
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function BrandStagePattern({ brandId }: { brandId: BrandId }) {
  const sharedClass =
    "absolute text-accent opacity-[0.11] transition-transform duration-700 group-hover/card:scale-110";

  if (brandId === "brilia") {
    return (
      <div aria-hidden="true" className="absolute inset-0">
        <BookOpenText
          className={cn(
            sharedClass,
            "-bottom-8 -left-6 size-40 -rotate-12",
          )}
        />
        <Sparkles
          className={cn(sharedClass, "right-8 top-16 size-20 rotate-12")}
        />
      </div>
    );
  }

  if (brandId === "joytalk") {
    return (
      <div aria-hidden="true" className="absolute inset-0">
        <MessageCircle
          className={cn(
            sharedClass,
            "-left-6 top-20 size-36 -rotate-12",
          )}
        />
        <Languages
          className={cn(sharedClass, "-bottom-6 right-3 size-36 rotate-12")}
        />
      </div>
    );
  }

  if (brandId === "kidspro") {
    return (
      <div aria-hidden="true" className="absolute inset-0">
        <Code2
          className={cn(sharedClass, "-bottom-7 -left-8 size-44 -rotate-6")}
        />
        <Sparkles
          className={cn(sharedClass, "right-8 top-16 size-20 rotate-12")}
        />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="absolute inset-0">
      <Mic2
        className={cn(sharedClass, "-bottom-8 -left-4 size-40 -rotate-12")}
      />
      <AudioLines
        className={cn(sharedClass, "right-4 top-20 size-36 rotate-6")}
      />
    </div>
  );
}

function BrandSectionBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-brand-lavender/15 to-background" />

      <div className="absolute -left-40 top-32 size-96 rounded-full bg-brand-sky/10 blur-3xl" />

      <div className="absolute -right-40 bottom-20 size-[28rem] rounded-full bg-primary/8 blur-3xl" />
    </div>
  );
}