import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenText,
  Check,
  ChevronRight,
  Code2,
  Compass,
  Languages,
  Mic2,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ConsultationCta } from "@/components/consultation-cta";
import { ActionButton, actionVariants } from "@/components/ui/action";
import { brandById } from "@/content/brands";
import { needs } from "@/content/needs";
import type { NeedIconKey } from "@/content/needs";
import { cn } from "@/lib/utils";

const resultId = "program-finder-result";

const needIcons: Record<NeedIconKey, LucideIcon> = {
  academic: BookOpenText,
  english: Languages,
  digital: Code2,
  speaking: Mic2,
};

export function ProgramFinder() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const selected =
    needs.find((need) => need.id === selectedId) ?? null;

  const brand = selected ? brandById[selected.brandId] : null;

  useEffect(() => {
    if (!selectedId || !resultRef.current) return;

    const isMobile = window.matchMedia("(max-width: 1023px)").matches;

    if (!isMobile) return;

    const timeoutId = window.setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);

    return () => window.clearTimeout(timeoutId);
  }, [selectedId]);

  return (
    <section
      id="program-finder"
      aria-labelledby="finder-heading"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24"
    >
      <FinderBackground />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-end gap-7 lg:grid-cols-[1fr_0.62fr]">
          <div>
            <p className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.12em] text-primary uppercase">
              <span className="grid size-9 place-items-center rounded-2xl border border-primary/15 bg-surface shadow-[var(--shadow-soft)]">
                01
              </span>

              Program finder
            </p>

            <h2
              id="finder-heading"
              className="mt-5 max-w-3xl text-3xl leading-tight font-extrabold tracking-[-0.035em] text-balance-heading text-ink sm:text-4xl lg:text-5xl"
            >
              Mulai dari kemampuan yang ingin dikembangkan anak
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg">
              Pilih satu kebutuhan. Kami akan menunjukkan brand yang paling
              relevan, alasan rekomendasinya, dan langkah yang dapat dilakukan
              berikutnya.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-surface/70 p-5 shadow-[var(--shadow-soft)] backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-highlight text-highlight-ink">
                <Sparkles aria-hidden="true" className="size-4" />
              </span>

              <div>
                <p className="text-sm font-bold text-ink">
                  Pilihan ini bukan pendaftaran
                </p>

                <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
                  Anda dapat mengganti pilihan kapan saja atau berkonsultasi
                  jika kebutuhan anak berada di lebih dari satu bidang.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2.25rem] border border-border bg-surface/55 p-4 shadow-[var(--shadow-raised)] backdrop-blur-sm sm:p-6 lg:p-8">
          <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div className="min-w-0">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] text-ink-muted uppercase">
                    Pilih satu kebutuhan
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
                    Manakah yang paling mendekati kondisi anak saat ini?
                  </p>
                </div>

                <span className="hidden text-xs font-semibold text-ink-muted sm:block">
                  {selected ? "1 dipilih" : "Belum memilih"}
                </span>
              </div>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {needs.map((need, index) => {
                  const isSelected = need.id === selectedId;
                  const Icon = needIcons[need.icon];

                  return (
                    <li
                      key={need.id}
                      data-accent={need.brandId}
                      className="min-w-0"
                    >
                      <button
                        type="button"
                        aria-pressed={isSelected}
                        aria-controls={resultId}
                        onClick={() =>
                          setSelectedId(isSelected ? null : need.id)
                        }
                        className={cn(
                          "group relative flex h-full min-h-[12rem] w-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border p-5 text-left",
                          "transition-all duration-300 ease-[var(--ease-gapai)]",
                          "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-accent/30",
                          isSelected
                            ? "-translate-y-1 border-accent bg-accent-soft shadow-[var(--shadow-raised)]"
                            : "border-border bg-background/70 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface hover:shadow-[var(--shadow-soft)]",
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className="absolute -right-12 -top-12 size-32 rounded-full bg-accent-soft opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                        />

                        <span className="relative flex items-start justify-between gap-4">
                          <span
                            className={cn(
                              "grid size-11 shrink-0 place-items-center rounded-2xl border transition-colors",
                              isSelected
                                ? "border-accent bg-accent text-white"
                                : "border-accent/25 bg-accent-soft text-accent-ink",
                            )}
                          >
                            {isSelected ? (
                              <Check aria-hidden="true" className="size-5" />
                            ) : (
                              <Icon aria-hidden="true" className="size-5" />
                            )}
                          </span>

                          <span className="text-xs font-extrabold tracking-[0.14em] text-accent-ink/65">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </span>

                        <span className="relative mt-5 block text-base leading-snug font-extrabold text-ink">
                          {need.label}
                        </span>

                        <span className="relative mt-2 block text-sm leading-relaxed text-ink-secondary">
                          {need.parentGoal}
                        </span>

                        <span className="relative mt-auto flex items-center gap-1.5 pt-4 text-xs font-bold text-accent-ink">
                          {isSelected ? "Kebutuhan dipilih" : "Pilih kebutuhan"}

                          {isSelected ? (
                            <Check aria-hidden="true" className="size-3.5" />
                          ) : (
                            <ChevronRight
                              aria-hidden="true"
                              className="size-3.5 transition-transform group-hover:translate-x-0.5"
                            />
                          )}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div
              id={resultId}
              ref={resultRef}
              aria-live="polite"
              className="min-w-0 scroll-mt-28 lg:sticky lg:top-28"
            >
              {selected && brand ? (
                <RecommendationPanel
                  key={selected.id}
                  selected={selected}
                  brand={brand}
                  onReset={() => setSelectedId(null)}
                />
              ) : (
                <FinderEmptyState />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type RecommendationPanelProps = {
  selected: (typeof needs)[number];
  brand: (typeof brandById)[keyof typeof brandById];
  onReset: () => void;
};

function RecommendationPanel({
  selected,
  brand,
  onReset,
}: RecommendationPanelProps) {
  return (
    <article
      data-accent={brand.id}
      className="animate-rise overflow-hidden rounded-[2rem] border border-accent/25 bg-surface shadow-[var(--shadow-float)]"
    >
      <div className="relative aspect-[16/8] min-h-[13rem] overflow-hidden bg-accent-soft">
        <img
          src={brand.image.src}
          alt={brand.image.alt}
          width={brand.image.width}
          height={brand.image.height}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 42vw, 100vw"
          style={{
            objectPosition: brand.image.objectPosition ?? "center",
          }}
          className="size-full object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/15 to-transparent"
        />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 sm:p-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-deep/55 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
            <Sparkles aria-hidden="true" className="size-3.5" />
            Rekomendasi utama
          </span>

          {brand.image.isTemporary ? (
            <span className="rounded-full border border-white/25 bg-deep/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              Ilustrasi sementara
            </span>
          ) : null}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="text-sm font-semibold text-white/70">
            {brand.verb} — {brand.role}
          </p>

          <h3 className="mt-1 text-3xl font-extrabold tracking-tight text-white">
            {brand.name}
          </h3>
        </div>
      </div>

      <div className="p-5 sm:p-7">
        <div className="rounded-2xl border border-accent/20 bg-accent-soft p-4 text-sm leading-relaxed text-accent-ink">
          <p className="text-xs font-extrabold tracking-[0.12em] uppercase">
            Mengapa direkomendasikan
          </p>

          <p className="mt-2">{selected.reason}</p>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-ink-secondary sm:text-base">
          {brand.positioning}
        </p>

        <div className="mt-6">
          <p className="text-xs font-extrabold tracking-[0.12em] text-ink-muted uppercase">
            Kompetensi utama
          </p>

          <ul className="mt-3 grid gap-2">
            {brand.competencies.map((competency) => (
              <li
                key={competency}
                className="flex items-start gap-2.5 rounded-xl bg-background px-3 py-2.5 text-sm text-ink"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-ink">
                  <Check aria-hidden="true" className="size-3.5" />
                </span>

                <span>{competency}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            to={brand.href}
            className={cn(
              actionVariants({ variant: "primary", size: "md" }),
              "group w-full sm:w-auto",
            )}
          >
            {brand.ctaLabel}

            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>

          <ConsultationCta
            channel={brand.contactChannel}
            size="md"
            variant="secondary"
            topic={brand.name}
            label={`Konsultasi ${brand.name}`}
            className="w-full sm:w-auto"
          />
        </div>

        <ActionButton
          type="button"
          variant="ghost"
          size="sm"
          className="mt-4"
          onClick={onReset}
        >
          <RotateCcw aria-hidden="true" className="size-4" />
          Atur ulang pilihan
        </ActionButton>
      </div>
    </article>
  );
}

function FinderEmptyState() {
  return (
    <article className="relative flex min-h-[33rem] flex-col overflow-hidden rounded-[2rem] bg-deep p-6 text-white shadow-[var(--shadow-float)] sm:p-8">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 size-72 rounded-full bg-primary/35 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-28 -left-28 size-72 rounded-full bg-brand-yellow/15 blur-3xl"
      />

      <div className="relative">
        <span className="grid size-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-brand-yellow">
          <Compass aria-hidden="true" className="size-5" />
        </span>

        <p className="mt-7 text-xs font-bold tracking-[0.14em] text-white/50 uppercase">
          Mulai dari kebutuhan anak
        </p>

        <h3 className="mt-3 max-w-sm text-2xl leading-tight font-extrabold tracking-tight sm:text-3xl">
          Anda belum harus tahu nama programnya
        </h3>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
          Pilih kemampuan yang ingin dikembangkan. Hasilnya akan menunjukkan
          satu brand utama beserta alasan rekomendasinya.
        </p>
      </div>

      <ul className="relative mt-8 grid grid-cols-2 gap-3">
        {needs.map((need) => {
          const Icon = needIcons[need.icon];

          return (
            <li
              key={need.id}
              data-accent={need.brandId}
              className="flex min-w-0 items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.065] p-3"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-ink">
                <Icon aria-hidden="true" className="size-4" />
              </span>

              <span className="truncate text-xs font-bold text-white/80">
                {need.label}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="relative mt-auto border-t border-white/10 pt-6">
        <p className="text-xs leading-relaxed text-white/50">
          Kebutuhan anak bersifat campuran? Ceritakan kondisinya kepada tim
          Gapai untuk mendapatkan arahan awal.
        </p>

        <ConsultationCta
          channel="gapai"
          label="Ceritakan kebutuhan anak"
          variant="inverse"
          size="md"
          className="mt-4 w-full"
        />
      </div>
    </article>
  );
}

function FinderBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-lavender/25 via-background to-background" />

      <div className="absolute -left-40 top-36 size-96 rounded-full bg-brand-sky/12 blur-3xl" />

      <div className="absolute -right-40 bottom-16 size-[28rem] rounded-full bg-primary/8 blur-3xl" />
    </div>
  );
}