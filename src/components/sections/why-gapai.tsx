import {
  ArrowRight,
  Compass,
  Focus,
  HeartHandshake,
  Route,
} from "lucide-react";

import { ActionAnchor } from "@/components/ui/action";
import { valueProps } from "@/content/site";

const supportingIcons = [Focus, HeartHandshake, Route] as const;

export function WhyGapai() {
  const [primaryValue, ...supportingValues] = valueProps;

  if (!primaryValue) return null;

  return (
    <section
      aria-labelledby="why-gapai-title"
      className="relative isolate overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      <EditorialBackground />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-primary/40"
              />
              Mengapa Gapai Mentorship
            </p>

            <h2
              id="why-gapai-title"
              className="mt-5 max-w-3xl text-3xl leading-[1.12] font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
            >
              Membantu memilih,
              <span className="block text-primary">
                bukan menambah bingung.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg lg:justify-self-end">
            Orang tua tidak perlu memahami struktur perusahaan untuk menemukan
            program yang tepat. Kami mulai dari kebutuhan anak, lalu
            menjelaskan pilihannya dengan tenang.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-border bg-surface/75 shadow-[var(--shadow-float)] backdrop-blur-sm lg:grid-cols-[1.08fr_0.92fr] lg:rounded-[2.5rem]">
          <article className="group relative flex min-h-[430px] flex-col justify-between overflow-hidden border-b border-border bg-gradient-to-br from-brand-lavender/70 via-surface to-highlight/40 p-7 sm:p-10 lg:min-h-[560px] lg:border-r lg:border-b-0 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 size-72 rounded-full border border-primary/10"
            />

            <div
              aria-hidden="true"
              className="absolute -right-8 top-12 size-44 rounded-full border border-primary/10"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-20 size-72 rounded-full bg-primary/[0.08] blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-8 left-8 size-24 rounded-full bg-brand-yellow/15 blur-2xl"
            />

            <div className="relative flex items-start justify-between gap-6">
              <span className="grid size-12 place-items-center rounded-2xl border border-primary/15 bg-surface/80 text-primary shadow-[var(--shadow-soft)] backdrop-blur-sm">
                <Compass aria-hidden="true" className="size-5" />
              </span>

              <span className="text-sm font-extrabold tracking-[0.18em] text-primary/35">
                01
              </span>
            </div>

            <div className="relative mt-20 max-w-xl sm:mt-28">
              <p className="text-sm font-bold tracking-[0.14em] text-primary uppercase">
                Prinsip utama
              </p>

              <h3 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl">
                {primaryValue.title}
              </h3>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-secondary sm:text-lg">
                {primaryValue.body}
              </p>
            </div>

            <div className="relative mt-10 flex items-center gap-4 border-t border-primary/10 pt-6">
              <span className="size-2 shrink-0 rounded-full bg-primary ring-6 ring-primary/10" />

              <p className="text-sm font-semibold leading-relaxed text-ink-secondary">
                Program yang tepat dimulai dari memahami kebutuhan anak.
              </p>
            </div>
          </article>

          <div className="flex flex-col divide-y divide-border bg-surface/55">
            {supportingValues.map((item, index) => {
              const Icon = supportingIcons[index] ?? Focus;
              const number = String(index + 2).padStart(2, "0");

              return (
                <article
                  key={item.title}
                  className="group relative flex flex-1 gap-5 overflow-hidden p-6 transition-colors duration-300 hover:bg-surface-selected/65 sm:gap-6 sm:p-8 lg:p-9"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100"
                  />

                  <div className="flex shrink-0 flex-col items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-2xl border border-primary/15 bg-surface-selected/70 text-primary shadow-[var(--shadow-soft)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:bg-surface-selected">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>

                    <span className="text-xs font-extrabold tracking-widest text-ink-muted/55">
                      {number}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg leading-snug font-bold text-ink sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-ink-secondary sm:text-base">
                      {item.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-border pt-7 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-sm leading-relaxed text-ink-secondary">
            Belum yakin kebutuhan anak masuk ke brand yang mana? Mulai dari
            kemampuan yang ingin dikembangkan, bukan dari nama programnya.
          </p>

          <ActionAnchor
            href="#program-finder"
            variant="secondary"
            size="md"
            className="shrink-0"
          >
            Temukan kebutuhan anak
            <ArrowRight aria-hidden="true" className="size-4" />
          </ActionAnchor>
        </div>
      </div>
    </section>
  );
}

function EditorialBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-lavender/30 via-background to-background" />

      <div className="absolute -left-40 top-10 size-96 rounded-full bg-brand-sky/12 blur-3xl" />

      <div className="absolute -right-44 bottom-0 size-[30rem] rounded-full bg-primary/[0.07] blur-3xl" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, color-mix(in oklab, var(--primary) 18%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}