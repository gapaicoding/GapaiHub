// GAPAI UPDATE: JOYTALK HERO LOGO — 2026-08-09
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowLeft,
  Baby,
  BookOpen,
  ChevronDown,
  CircleHelp,
  Gamepad2,
  GraduationCap,
  Mic2,
  Puzzle,
  Sparkles,
  Volume2,
} from "lucide-react";

import { ConsultationCta } from "@/components/consultation-cta";
import { actionVariants } from "@/components/ui/action";
import { getContactChannel } from "@/config/whatsapp";
import { brandById } from "@/content/brands";
import {
  joytalkAgeOptions,
  joytalkFaqs,
  joytalkPrograms,
  type JoytalkAgeId,
  type JoytalkProgram,
  type JoytalkProgramId,
} from "@/content/joytalk-program";
import { cn } from "@/lib/utils";

const programIcons: Record<JoytalkProgramId, LucideIcon> = {
  toddler: Baby,
  general: BookOpen,
  "public-speaking": Mic2,
};

const programNumbers: Record<JoytalkProgramId, string> = {
  toddler: "01",
  general: "02",
  "public-speaking": "03",
};

const programOrder: JoytalkProgramId[] = [
  "toddler",
  "general",
  "public-speaking",
];

type LearningGoal = "general" | "public-speaking";

export function JoytalkDetailPage() {
  return (
    <article
      data-accent="joytalk"
      className="relative overflow-hidden bg-background"
    >
      <JoytalkHero />
      <ProgramRail />
      <ClassPathFinder />
      <ProgramChapters />
      <LearningExperience />
      <JoytalkFaq />
      <FinalConsultation />
    </article>
  );
}

function JoytalkHero() {
  const brand = brandById.joytalk;
  const contact = getContactChannel(brand.contactChannel);

  return (
    <section
      aria-labelledby="joytalk-title"
      className="relative isolate overflow-hidden border-b border-accent/20 bg-highlight/45"
    >
      <HeroAtmosphere />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:pb-24">
        <Link
          to="/program"
          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-accent/20 bg-surface/85 px-4 text-sm font-bold text-accent-ink shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-accent/45 hover:bg-surface"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Semua program
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="animate-rise min-w-0 lg:col-span-7 lg:pr-6">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-accent/20 bg-surface/90 p-2.5 pr-4 shadow-[var(--shadow-soft)] backdrop-blur-sm">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-ink">
                <BookOpen aria-hidden="true" className="size-5" />
              </span>

              <span className="text-xs leading-relaxed font-extrabold tracking-[0.12em] text-accent-ink uppercase">
                Tiga jalur belajar
                <span className="block text-accent-strong">
                  untuk usia 3–17 tahun
                </span>
              </span>
            </div>

            <p className="mt-9 inline-flex items-center gap-2 text-sm font-extrabold tracking-[0.13em] text-accent-ink uppercase">
              <Sparkles aria-hidden="true" className="size-4" />
              Bahasa Inggris untuk usia 3–17 tahun
            </p>

            <h1
              id="joytalk-title"
              className="mt-4 max-w-4xl text-4xl leading-[1.04] font-extrabold tracking-[-0.05em] text-ink sm:text-5xl lg:text-[4rem]"
            >
              Bahasa Inggris yang
              <span className="block text-accent-strong">
                dipakai untuk berkomunikasi.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-secondary sm:text-xl">
              Dari eksplorasi Bahasa Inggris untuk toddler hingga General
              English dan English Public Speaking, jalur belajar dipilih
              berdasarkan usia serta tujuan anak.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ConsultationCta
                channel={brand.contactChannel}
                topic="pemilihan program Joytalk English"
                label="Konsultasi program Joytalk"
                variant="brand"
                size="lg"
              />

              <a
                href="#class-path-finder"
                className={actionVariants({
                  variant: "brandOutline",
                  size: "lg",
                })}
              >
                Temukan jalur kelas
                <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>

            {contact.notice ? (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {contact.notice}
              </p>
            ) : null}
          </div>

          <div className="animate-rise relative min-w-0 [animation-delay:120ms] lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-12 size-44 rounded-full bg-accent/25 blur-3xl"
            />

            <figure className="relative overflow-hidden rounded-[2rem] border-8 border-surface bg-surface shadow-[var(--shadow-float)]">
              <div className="relative flex min-h-[410px] flex-col overflow-hidden bg-gradient-to-br from-surface via-accent-soft/75 to-highlight p-6 sm:min-h-[440px] sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-20 size-52 rounded-full border border-accent/15 bg-accent/5"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -left-16 size-52 rounded-full bg-brand-yellow/25 blur-2xl"
                />

                <div className="relative flex items-center justify-between gap-4">
                  <p className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] text-accent-ink uppercase">
                    <Sparkles aria-hidden="true" className="size-4" />
                    Joytalk English
                  </p>

                  <span className="rounded-full border border-accent/15 bg-surface/80 px-3 py-1.5 text-[11px] font-extrabold text-accent-ink shadow-sm">
                    Learning with joyful
                  </span>
                </div>

                <div className="relative flex flex-1 items-center justify-center py-7">
                  <img
                    src={brand.logo.src}
                    alt={brand.logo.alt}
                    width={brand.logo.width}
                    height={brand.logo.height}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="h-48 w-full max-w-[21rem] object-contain drop-shadow-[0_18px_28px_rgba(95,67,0,0.12)] sm:h-56"
                  />
                </div>

                <figcaption className="relative grid grid-cols-3 gap-2.5">
                  {programOrder.map((programId) => {
                    const program = joytalkPrograms[programId];
                    const Icon = programIcons[programId];

                    return (
                      <a
                        key={programId}
                        href={`#${programId}`}
                        className="group flex min-w-0 flex-col items-center rounded-2xl border border-accent/15 bg-surface/85 px-2 py-3 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/35 hover:bg-surface"
                      >
                        <span className="grid size-8 place-items-center rounded-xl bg-accent-soft text-accent-ink transition-colors group-hover:bg-accent-strong group-hover:text-white">
                          <Icon aria-hidden="true" className="size-4" />
                        </span>

                        <span className="mt-2 text-[11px] leading-tight font-extrabold text-ink sm:text-xs">
                          {program.navigationLabel}
                        </span>
                      </a>
                    );
                  })}
                </figcaption>
              </div>
            </figure>

            <div className="absolute -bottom-6 -left-4 grid max-w-[15rem] grid-cols-[auto_1fr] items-center gap-3 rounded-2xl border border-accent/20 bg-surface px-4 py-3 shadow-[var(--shadow-raised)] sm:-left-8">
              <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent-ink">
                <Volume2 aria-hidden="true" className="size-5" />
              </span>

              <p className="text-sm leading-snug font-extrabold text-ink">
                Speaking menjadi bagian dari proses belajar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute -left-40 top-24 size-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -right-28 -top-36 size-[30rem] rounded-full bg-brand-lavender/55 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 size-72 rounded-full bg-brand-yellow/25 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, color-mix(in oklab, var(--accent-strong) 24%, transparent) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
    </div>
  );
}

function ProgramRail() {
  return (
    <nav
      aria-label="Navigasi program Joytalk"
      className="border-b border-accent/15 bg-surface"
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center gap-2 overflow-x-auto px-5 py-4 sm:px-8">
        <span className="mr-2 shrink-0 text-xs font-extrabold tracking-[0.14em] text-ink-muted uppercase">
          Program
        </span>

        {programOrder.map((programId) => {
          const program = joytalkPrograms[programId];

          return (
            <a
              key={program.id}
              href={`#${program.id}`}
              className="inline-flex min-h-10 shrink-0 items-center rounded-full border border-accent/20 bg-accent-soft/60 px-4 text-sm font-bold text-accent-ink transition-all hover:-translate-y-0.5 hover:border-accent/45 hover:bg-accent-soft"
            >
              {program.navigationLabel}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function ClassPathFinder() {
  const brand = brandById.joytalk;
  const [selectedAge, setSelectedAge] = useState<JoytalkAgeId>("3-4");
  const [selectedGoal, setSelectedGoal] = useState<LearningGoal>("general");

  const isToddler = selectedAge === "3-4";
  const activeProgramId: JoytalkProgramId = isToddler
    ? "toddler"
    : selectedGoal;
  const activeProgram = joytalkPrograms[activeProgramId];
  const compatibleGroups = activeProgram.classGroups.filter((group) =>
    group.ageIds.includes(selectedAge),
  );

  const selectAge = (age: JoytalkAgeId) => {
    setSelectedAge(age);

    if (age === "3-4") {
      setSelectedGoal("general");
    }
  };

  return (
    <section
      id="class-path-finder"
      aria-labelledby="class-path-title"
      className="scroll-mt-24 bg-accent-strong py-20 text-white sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center gap-2 text-sm font-extrabold tracking-[0.14em] text-white/65 uppercase">
              <Puzzle aria-hidden="true" className="size-4" />
              Class path finder
            </p>

            <h2
              id="class-path-title"
              className="mt-4 max-w-4xl text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] sm:text-4xl lg:text-5xl"
            >
              Mulai dari usia dan tujuan belajar anak
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:col-span-4">
            Pilih profil anak untuk melihat jalur kelas, format, dan paket yang
            kompatibel.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/15 bg-white/8 shadow-[var(--shadow-float)]">
          <div className="border-b border-white/15 p-5 sm:p-7">
            <p className="text-xs font-extrabold tracking-[0.14em] text-white/60 uppercase">
              1 · Pilih usia anak
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {joytalkAgeOptions.map((age) => {
                const isSelected = age.id === selectedAge;

                return (
                  <button
                    key={age.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => selectAge(age.id)}
                    className={cn(
                      "min-h-20 rounded-2xl border px-4 py-3 text-left transition-all duration-200",
                      isSelected
                        ? "border-white bg-white text-accent-ink shadow-[var(--shadow-raised)]"
                        : "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
                    )}
                  >
                    <span className="block text-base font-extrabold">
                      {age.label}
                    </span>

                    <span
                      className={cn(
                        "mt-1 block text-xs font-semibold",
                        isSelected ? "text-ink-secondary" : "text-white/60",
                      )}
                    >
                      {age.supportingLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {!isToddler ? (
            <div className="border-b border-white/15 p-5 sm:p-7">
              <p className="text-xs font-extrabold tracking-[0.14em] text-white/60 uppercase">
                2 · Pilih tujuan utama
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <GoalButton
                  title="Kemampuan Bahasa Inggris menyeluruh"
                  description="Vocabulary, conversation, grammar, reading, dan speaking."
                  icon={BookOpen}
                  selected={selectedGoal === "general"}
                  onClick={() => setSelectedGoal("general")}
                />

                <GoalButton
                  title="Berani English Public Speaking"
                  description="Latihan berbicara, menyampaikan ide, dan project."
                  icon={Mic2}
                  selected={selectedGoal === "public-speaking"}
                  onClick={() => setSelectedGoal("public-speaking")}
                />
              </div>
            </div>
          ) : null}

          <div
            aria-live="polite"
            className="bg-surface p-5 text-ink sm:p-7 lg:p-9"
          >
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-extrabold tracking-[0.14em] text-accent-ink uppercase">
                  Jalur yang sesuai
                </p>

                <h3 className="mt-2 text-2xl leading-tight font-extrabold sm:text-3xl">
                  {activeProgram.title}
                </h3>

                <p className="mt-3 text-sm font-bold text-accent-ink">
                  {activeProgram.ageRange}
                </p>

                <p className="mt-5 text-sm leading-relaxed text-ink-secondary">
                  {activeProgram.summary}
                </p>

                <div className="mt-6">
                  <ConsultationCta
                    channel={brand.contactChannel}
                    topic={`${activeProgram.title} untuk anak usia ${selectedAge} tahun`}
                    label="Konsultasikan pilihan ini"
                    variant="brand"
                    size="md"
                  />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-xs font-extrabold tracking-[0.14em] text-ink-muted uppercase">
                  Format dan paket yang tersedia
                </p>

                <div className="mt-4 grid gap-4">
                  {compatibleGroups.map((group) => (
                    <div
                      key={group.id}
                      className="border-t border-border pt-5 first:border-t-0 first:pt-0"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h4 className="font-extrabold text-ink">
                            {group.label}
                          </h4>

                          <p className="mt-1 text-sm text-ink-secondary">
                            {group.audience} · {group.format} ·{" "}
                            {group.classSize}
                          </p>
                        </div>
                      </div>

                      <ul className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                        {group.packages.map((packageItem) => (
                          <li
                            key={packageItem.name}
                            className="rounded-2xl border border-accent/15 bg-accent-soft/55 px-4 py-3"
                          >
                            <p className="font-extrabold text-ink">
                              {packageItem.name}
                            </p>

                            <p className="mt-1 text-xs font-semibold text-accent-ink">
                              {packageItem.frequencyLabel}
                              {packageItem.classSize
                                ? ` · ${packageItem.classSize}`
                                : ""}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GoalButton({
  title,
  description,
  icon: Icon,
  selected,
  onClick,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "grid min-h-28 grid-cols-[auto_1fr] items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-200",
        selected
          ? "border-white bg-white text-accent-ink shadow-[var(--shadow-raised)]"
          : "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
      )}
    >
      <span
        className={cn(
          "grid size-10 place-items-center rounded-xl",
          selected ? "bg-accent-soft" : "bg-white/10",
        )}
      >
        <Icon aria-hidden="true" className="size-5" />
      </span>

      <span>
        <span className="block font-extrabold">{title}</span>

        <span
          className={cn(
            "mt-1 block text-xs leading-relaxed",
            selected ? "text-ink-secondary" : "text-white/60",
          )}
        >
          {description}
        </span>
      </span>
    </button>
  );
}

function ProgramChapters() {
  return (
    <section
      aria-labelledby="program-joytalk-title"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-sm font-extrabold tracking-[0.14em] text-accent-ink uppercase">
              Tiga jalur belajar
            </p>

            <h2
              id="program-joytalk-title"
              className="mt-4 max-w-4xl text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
            >
              Program berubah mengikuti cara anak berkembang
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg lg:col-span-4">
            Toddler belajar melalui eksplorasi. General English membangun
            kemampuan menyeluruh. Public Speaking melatih keberanian
            menyampaikan ide.
          </p>
        </div>

        <div className="mt-12 border-y border-border">
          {programOrder.map((programId, index) => (
            <ProgramChapter
              key={programId}
              program={joytalkPrograms[programId]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramChapter({
  program,
  index,
}: {
  program: JoytalkProgram;
  index: number;
}) {
  const brand = brandById.joytalk;
  const Icon = programIcons[program.id];

  return (
    <article
      id={program.id}
      className="scroll-mt-28 border-b border-border py-10 last:border-b-0 sm:py-14 lg:py-16"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="flex items-start justify-between gap-5">
            <span className="grid size-16 place-items-center rounded-[1.4rem] bg-accent-strong text-white shadow-[var(--shadow-raised)]">
              <Icon aria-hidden="true" className="size-7" />
            </span>

            <span className="text-5xl leading-none font-extrabold tracking-[-0.05em] text-accent/25 sm:text-6xl">
              {programNumbers[program.id]}
            </span>
          </div>

          <p className="mt-8 text-xs font-extrabold tracking-[0.15em] text-accent-ink uppercase">
            {program.eyebrow}
          </p>

          <h3 className="mt-2 text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl">
            {program.title}
          </h3>

          <p className="mt-3 text-sm font-bold text-accent-ink">
            {program.ageRange}
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <p className="text-xl leading-relaxed font-extrabold text-ink sm:text-2xl">
            {program.summary}
          </p>

          <p className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
            {program.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {program.methods.map((method) => (
              <span
                key={method}
                className="rounded-full border border-accent/20 bg-accent-soft/60 px-3.5 py-2 text-xs font-extrabold text-accent-ink"
              >
                {method}
              </span>
            ))}
          </div>

          <details className="group mt-7 border-y border-border">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-extrabold text-ink [&::-webkit-details-marker]:hidden">
              Lihat format, paket, dan struktur belajar
              <ChevronDown
                aria-hidden="true"
                className="size-5 text-accent-ink transition-transform group-open:rotate-180"
              />
            </summary>

            <div className="border-t border-border pb-6 pt-5">
              <div className="grid gap-6">
                {program.classGroups.map((group) => (
                  <div key={group.id}>
                    <h4 className="font-extrabold text-ink">{group.label}</h4>

                    <p className="mt-1 text-sm text-ink-secondary">
                      {group.audience} · {group.format} · {group.classSize}
                    </p>

                    <ul className="mt-3 flex flex-wrap gap-2">
                      {group.packages.map((packageItem) => (
                        <li
                          key={packageItem.name}
                          className="rounded-xl bg-accent-soft px-3 py-2 text-xs font-bold text-accent-ink"
                        >
                          {packageItem.name} · {packageItem.frequencyLabel}
                          {packageItem.classSize
                            ? ` · ${packageItem.classSize}`
                            : ""}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </details>

          <div className="mt-7">
            <ConsultationCta
              channel={brand.contactChannel}
              topic={`program ${program.title} Joytalk English`}
              label={`Tanyakan ${program.navigationLabel}`}
              variant="brandOutline"
              size="md"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function LearningExperience() {
  return (
    <section
      aria-labelledby="experience-title"
      className="border-y border-accent/15 bg-surface-subtle py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center gap-2 text-sm font-extrabold tracking-[0.14em] text-accent-ink uppercase">
              <Gamepad2 aria-hidden="true" className="size-4" />
              Di dalam proses belajar
            </p>

            <h2
              id="experience-title"
              className="mt-4 max-w-4xl text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
            >
              Bermain, berlatih, lalu menggunakan Bahasa Inggris
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg lg:col-span-4">
            Materi dan level berbeda pada setiap program, tetapi speaking tetap
            menjadi bagian penting dari pengalaman belajar Joytalk.
          </p>
        </div>

        <div className="mt-12 grid border-y border-border md:grid-cols-3">
          <ExperienceItem
            icon={Gamepad2}
            number="01"
            title="Learning by playing"
            description="Aktivitas belajar disesuaikan dengan usia melalui permainan, crafting, eksperimen, latihan, dan project."
          />

          <ExperienceItem
            icon={Volume2}
            number="02"
            title="Spoken English"
            description="General English menggunakan pendekatan 80% spoken English, sedangkan Public Speaking menggunakan 100% spoken English."
          />

          <ExperienceItem
            icon={GraduationCap}
            number="03"
            title="Jalur level yang jelas"
            description="General English menggunakan placement test untuk private, sementara jalur lain disesuaikan dengan usia dan program."
          />
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  icon: Icon,
  number,
  title,
  description,
}: {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="border-b border-border py-8 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:last:border-r-0 lg:px-9 lg:py-10">
      <div className="flex items-center justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-2xl bg-accent-soft text-accent-ink">
          <Icon aria-hidden="true" className="size-5" />
        </span>

        <span className="text-xs font-extrabold tracking-widest text-accent/45">
          {number}
        </span>
      </div>

      <h3 className="mt-7 text-xl font-extrabold text-ink sm:text-2xl">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink-secondary sm:text-base">
        {description}
      </p>
    </article>
  );
}

function JoytalkFaq() {
  return (
    <section aria-labelledby="faq-joytalk-title" className="py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent-ink">
            <CircleHelp aria-hidden="true" className="size-6" />
          </span>

          <p className="mt-6 text-sm font-extrabold tracking-[0.14em] text-accent-ink uppercase">
            Pertanyaan umum
          </p>

          <h2
            id="faq-joytalk-title"
            className="mt-3 text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Memahami pilihan kelas Joytalk
          </h2>

          <p className="mt-4 max-w-md leading-relaxed text-ink-secondary">
            Informasi awal sebelum menentukan program, format, dan intensitas
            kelas.
          </p>
        </div>

        <div className="border-t border-border lg:col-span-8">
          {joytalkFaqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group border-b border-border"
            >
              <summary className="grid cursor-pointer list-none grid-cols-[auto_1fr_auto] items-start gap-4 py-6 [&::-webkit-details-marker]:hidden">
                <span className="pt-0.5 text-xs font-extrabold tracking-widest text-accent/55">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-extrabold text-ink sm:text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-accent-ink transition-transform duration-200 group-open:rotate-180"
                />
              </summary>

              <p className="pb-6 pl-10 text-sm leading-relaxed text-ink-secondary sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalConsultation() {
  const brand = brandById.joytalk;

  return (
    <section className="pb-20 sm:pb-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="relative isolate overflow-hidden bg-accent-strong px-6 py-10 text-white shadow-[var(--shadow-float)] sm:px-10 sm:py-14 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-28 -z-10 size-80 rounded-full border border-white/15"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 right-16 -z-10 size-72 rounded-full bg-accent/25 blur-2xl"
          />

          <div className="grid gap-9 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-sm font-extrabold tracking-[0.14em] text-white/65 uppercase">
                Langkah berikutnya
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Temukan jalur Bahasa Inggris yang sesuai untuk anak
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Sampaikan usia, tujuan belajar, pengalaman sebelumnya, dan
                intensitas kelas yang sedang dipertimbangkan.
              </p>
            </div>

            <div className="lg:col-span-4 lg:justify-self-end">
              <ConsultationCta
                channel={brand.contactChannel}
                topic="pemilihan program Joytalk English"
                label="Konsultasi Joytalk"
                variant="inverse"
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}