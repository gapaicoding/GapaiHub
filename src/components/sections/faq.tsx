import { useId, useState } from "react";
import {
  HelpCircle,
  MessageCircleQuestion,
  Minus,
  Plus,
  Sparkles,
} from "lucide-react";

import { ConsultationCta } from "@/components/consultation-cta";
import { faqs } from "@/content/site";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const accordionId = useId();

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <FaqBackground />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-border bg-surface/65 shadow-[var(--shadow-raised)] backdrop-blur-sm lg:rounded-[3rem]">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-lavender/65 via-surface to-highlight/35 p-7 sm:p-10 lg:border-r lg:border-b-0 lg:p-12">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-14 size-64 rounded-full border border-primary/10"
              />

              <div
                aria-hidden="true"
                className="absolute -right-5 top-8 size-36 rounded-full border border-primary/10"
              />

              <div className="relative lg:sticky lg:top-28">
                <p className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] text-primary uppercase sm:text-sm">
                  <HelpCircle aria-hidden="true" className="size-4" />
                  Pertanyaan umum
                </p>

                <h2
                  id="faq-heading"
                  className="mt-5 max-w-md text-3xl leading-tight font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-[2.7rem]"
                >
                  Hal yang sering ditanyakan orang tua
                </h2>

                <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-secondary sm:text-base">
                  Temukan penjelasan singkat mengenai peran Gapai, pemilihan
                  program, dan proses konsultasi.
                </p>

                <div className="relative mt-8 hidden h-44 items-center justify-center lg:flex">
                  <span className="select-none text-[10rem] leading-none font-extrabold text-primary/[0.075]">
                    ?
                  </span>

                  <span className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />

                  <span className="absolute left-[32%] top-[28%] size-3 rounded-full bg-brand-yellow" />
                  <span className="absolute bottom-[24%] right-[30%] size-2.5 rounded-full bg-brand-cyan" />
                  <span className="absolute right-[23%] top-[22%] size-2 rounded-full bg-primary/50" />
                </div>

                <div className="mt-8 rounded-[1.75rem] bg-deep p-5 text-white shadow-[var(--shadow-raised)] sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white/10 text-brand-yellow">
                      <MessageCircleQuestion
                        aria-hidden="true"
                        className="size-4"
                      />
                    </span>

                    <div>
                      <p className="text-sm font-extrabold">
                        Belum menemukan jawabannya?
                      </p>

                      <p className="mt-1 text-xs leading-relaxed text-white/60">
                        Sampaikan pertanyaan dan kebutuhan anak kepada tim Gapai.
                      </p>
                    </div>
                  </div>

                  <ConsultationCta
                    channel="gapai"
                    label="Tanyakan kepada Gapai"
                    variant="inverse"
                    size="md"
                    className="mt-5 w-full"
                  />
                </div>
              </div>
            </aside>

            <div className="min-w-0 p-4 sm:p-7 lg:p-9">
              <div className="mb-4 flex items-center justify-between gap-4 px-2 sm:mb-6">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.12em] text-ink-muted uppercase">
                    Pusat bantuan
                  </p>

                  <p className="mt-1 text-sm text-ink-secondary">
                    {faqs.length} jawaban untuk membantu Anda memulai
                  </p>
                </div>

                <span className="grid size-11 place-items-center rounded-2xl border border-primary/15 bg-surface-selected text-primary">
                  <Sparkles aria-hidden="true" className="size-4" />
                </span>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-[var(--shadow-soft)]">
                <ul className="divide-y divide-border">
                  {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    const buttonId = `${accordionId}-button-${index}`;
                    const panelId = `${accordionId}-panel-${index}`;

                    return (
                      <li
                        key={faq.question}
                        className="relative min-w-0"
                      >
                        {isOpen ? (
                          <span
                            aria-hidden="true"
                            className="absolute inset-y-0 left-0 z-10 w-1 bg-primary"
                          />
                        ) : null}

                        <button
                          id={buttonId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() =>
                            setOpenIndex(isOpen ? null : index)
                          }
                          className={cn(
                            "group flex w-full items-start gap-4 px-4 py-5 text-left transition-colors sm:gap-5 sm:px-6 sm:py-6",
                            isOpen
                              ? "bg-surface-selected/65"
                              : "bg-surface hover:bg-surface-subtle",
                          )}
                        >
                          <span
                            className={cn(
                              "grid size-10 shrink-0 place-items-center rounded-2xl border text-xs font-extrabold transition-colors",
                              isOpen
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border bg-background text-ink-muted group-hover:border-primary/25 group-hover:text-primary",
                            )}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="block text-[0.68rem] font-extrabold tracking-[0.12em] text-primary uppercase">
                              {faq.category}
                            </span>

                            <span className="mt-1.5 block text-sm leading-snug font-extrabold text-ink sm:text-base">
                              {faq.question}
                            </span>
                          </span>

                          <span
                            className={cn(
                              "grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-200",
                              isOpen
                                ? "rotate-0 border-primary/20 bg-primary text-primary-foreground"
                                : "border-border bg-background text-primary group-hover:border-primary/25",
                            )}
                          >
                            {isOpen ? (
                              <Minus aria-hidden="true" className="size-4" />
                            ) : (
                              <Plus aria-hidden="true" className="size-4" />
                            )}
                          </span>
                        </button>

                        {isOpen ? (
                          <div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            className="animate-rise bg-surface-selected/35 px-4 pb-6 sm:px-6 sm:pb-7"
                          >
                            <div className="ml-14 border-l-2 border-primary/15 pl-4 sm:ml-[3.75rem] sm:pl-5">
                              <p className="text-sm leading-relaxed text-ink-secondary sm:text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <p className="mt-5 px-2 text-xs leading-relaxed text-ink-muted">
                Informasi program yang lebih spesifik akan dijelaskan oleh tim
                brand terkait saat konsultasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-brand-lavender/15 to-background" />

      <div className="absolute -left-40 top-28 size-96 rounded-full bg-primary/[0.07] blur-3xl" />

      <div className="absolute -right-40 bottom-0 size-[28rem] rounded-full bg-brand-yellow/10 blur-3xl" />
    </div>
  );
}