// GAPAI UPDATE: KIDSPRO HERO LOGO — 2026-08-09
import { useMemo, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowLeft,
  Bot,
  Box,
  BrainCircuit,
  Brush,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Code2,
  Film,
  Headphones,
  Layers3,
  MonitorPlay,
  Palette,
  Radio,
  Rocket,
  Route,
  Sparkles,
  Stars,
  UserRound,
  WandSparkles,
  Youtube,
} from "lucide-react";

import { ConsultationCta } from "@/components/consultation-cta";
import { actionVariants } from "@/components/ui/action";
import { brandById } from "@/content/brands";
import {
  getKidsproCurriculumForAge,
  getKidsproPackages,
  getKidsproProgramsForAge,
  kidsproAgeBands,
  kidsproProgramById,
  kidsproProgramClusters,
  kidsproPrograms,
  type KidsproClusterId,
  type KidsproFrequency,
  type KidsproProgramId,
} from "@/content/kidspro-program";
import { cn } from "@/lib/utils";

const programIcons: Record<KidsproProgramId, LucideIcon> = {
  canva: Palette,
  "digital-drawing": Brush,
  coding: Code2,
  "animasi-3d": Box,
  "editing-video": Film,
  youtuber: Youtube,
  podcaster: Radio,
  ai: BrainCircuit,
};

const clusterIcons: Record<KidsproClusterId, LucideIcon> = {
  "visual-creator": Palette,
  "code-technology": Bot,
  "motion-media": MonitorPlay,
  "content-creator": Headphones,
};

const ageChoices = [
  {
    id: "4-6",
    label: "4–6 tahun",
    helper: "Kids",
    representativeAge: 5,
  },
  {
    id: "7-12",
    label: "7–12 tahun",
    helper: "Tweens",
    representativeAge: 9,
  },
  {
    id: "13-15",
    label: "13–15 tahun",
    helper: "Teens & creators",
    representativeAge: 14,
  },
  {
    id: "16-17",
    label: "16–17 tahun",
    helper: "Teens",
    representativeAge: 16,
  },
] as const;

const learningSteps = [
  {
    title: "Temukan minat digital",
    body: "Mulai dari hal yang paling membuat anak penasaran: visual, coding, animasi, video, konten, atau AI.",
    icon: Sparkles,
  },
  {
    title: "Pilih jalur sesuai usia",
    body: "Pilihan program dan paket disesuaikan dengan rentang usia serta ritme belajar yang dibutuhkan.",
    icon: Route,
  },
  {
    title: "Belajar bersama mentor",
    body: "Kelas private membantu anak memperoleh perhatian dan arahan selama proses mengerjakan project.",
    icon: UserRound,
  },
  {
    title: "Naik level melalui karya",
    body: "Setiap level menjadi langkah berikutnya untuk mengembangkan keterampilan dan menghasilkan karya baru.",
    icon: Rocket,
  },
] as const;

const kidsproFaqs = [
  {
    question: "Program apa saja yang tersedia di Kidspro ID?",
    answer:
      "Kidspro ID memiliki delapan jalur pembelajaran: Desain Grafis Canva, Digital Drawing, Coding Scratch dan Roblox, Animasi 3D Blender, Editing Video CapCut, YouTuber, Podcaster, serta Artificial Intelligence.",
  },
  {
    question: "Bagaimana memilih program yang tepat untuk anak?",
    answer:
      "Mulailah dari usia dan minat anak. Setelah itu, pertimbangkan jenis karya yang ingin dibuat serta intensitas belajar satu atau dua kali seminggu. Program finder pada halaman ini dapat digunakan sebagai panduan awal.",
  },
  {
    question: "Apa perbedaan paket satu dan dua kali seminggu?",
    answer:
      "Keduanya terdiri dari delapan pertemuan. Paket satu kali seminggu berjalan selama kurang lebih dua bulan, sedangkan paket dua kali seminggu berjalan lebih intensif selama kurang lebih satu bulan.",
  },
  {
    question: "Apakah kelas dilakukan secara private?",
    answer:
      "Informasi program yang tersedia menunjukkan format private satu siswa dengan satu mentor melalui Zoom Meeting. Ketersediaan mentor dan jadwal tetap perlu dikonfirmasi langsung bersama tim Kidspro ID.",
  },
  {
    question: "Apakah anak harus sudah menguasai aplikasi tertentu?",
    answer:
      "Tidak harus. Setiap jalur memiliki level pembelajaran bertahap. Sampaikan pengalaman anak dan perangkat yang tersedia saat konsultasi agar tim dapat membantu menentukan titik mulai yang sesuai.",
  },
  {
    question: "Perangkat apa yang perlu disiapkan?",
    answer:
      "Kebutuhan perangkat dan aplikasi berbeda untuk setiap program. Sebelum mendaftar, informasikan laptop, komputer, tablet, atau perangkat lain yang tersedia agar kelayakannya dapat dikonfirmasi oleh tim Kidspro ID.",
  },
] as const;

export function KidsproDetailPage() {
  return (
    <article
      data-accent="kidspro"
      className="relative overflow-hidden bg-background"
    >
      <KidsproHero />
      <KidsproQuickNavigation />
      <SkillExplorer />
      <KidsproPathFinder />
      <ProgramCatalog />
      <LearningJourney />
      <KidsproFaq />
      <FinalConsultation />
    </article>
  );
}

function KidsproHero() {
  const brand = brandById.kidspro;

  return (
    <section
      aria-labelledby="kidspro-title"
      className="relative isolate overflow-hidden border-b border-border bg-gradient-to-br from-background via-accent-soft/60 to-background py-12 sm:py-16 lg:py-20"
    >
      <CreativeBackground />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Link
          to="/program"
          className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-accent-ink transition-colors hover:text-accent-strong hover:underline"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Kembali ke semua program
        </Link>

        <div className="mt-9 grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="animate-rise min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-surface/85 px-4 py-2 text-sm font-bold text-accent-ink shadow-[var(--shadow-soft)] backdrop-blur-sm">
              <WandSparkles
                aria-hidden="true"
                className="size-4 text-accent-strong"
              />
              Kelas digital creator anak
            </p>

            <h1
              id="kidspro-title"
              className="mt-6 max-w-3xl text-4xl leading-[1.05] font-extrabold tracking-[-0.045em] text-ink sm:text-5xl lg:text-[3.8rem]"
            >
              Ubah waktu layar anak
              <span className="block bg-gradient-to-r from-accent-strong via-accent to-primary bg-clip-text text-transparent">
                menjadi karya digital.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-secondary sm:text-xl">
              Kidspro ID membantu anak mengeksplorasi desain, coding, animasi,
              video, konten, dan AI melalui jalur belajar berbasis project yang
              sesuai usia.
            </p>

            <ul className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {kidsproProgramClusters.map((cluster) => {
                const Icon = clusterIcons[cluster.id];

                return (
                  <li
                    key={cluster.id}
                    className="rounded-2xl border border-accent/15 bg-surface/75 p-3 shadow-[var(--shadow-soft)] backdrop-blur-sm"
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-accent-strong"
                    />
                    <span className="mt-2 block text-xs leading-snug font-extrabold text-ink sm:text-sm">
                      {cluster.title}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ConsultationCta
                channel={brand.contactChannel}
                topic="pemilihan program Kidspro ID"
                label="Konsultasikan minat anak"
                variant="brand"
                size="lg"
              />

              <a
                href="#kidspro-path-finder"
                className={cn(
                  actionVariants({ variant: "brandOutline", size: "lg" }),
                )}
              >
                Temukan jalur anak
                <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <div className="animate-rise relative min-w-0 [animation-delay:120ms]">
            <div
              aria-hidden="true"
              className="absolute -right-9 -top-10 size-40 rounded-full bg-accent/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -left-10 size-44 rounded-full bg-brand-cyan/15 blur-3xl"
            />

            <figure className="relative overflow-hidden rounded-[2rem] border border-accent/15 bg-surface p-2.5 shadow-[var(--shadow-float)] sm:rounded-[2.5rem] sm:p-3">
              <div className="relative flex min-h-[430px] flex-col overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-surface via-accent-soft/70 to-brand-sky/20 p-6 sm:min-h-[465px] sm:rounded-[2rem] sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-24 size-64 rounded-full border border-accent/15 bg-accent/5"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-28 -left-20 size-72 rounded-full bg-brand-cyan/15 blur-3xl"
                />

                <div className="relative flex items-center justify-between gap-4">
                  <p className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] text-accent-ink uppercase">
                    <Bot aria-hidden="true" className="size-4" />
                    Kidspro digital lab
                  </p>

                  <span className="rounded-full border border-accent/15 bg-surface/80 px-3 py-1.5 text-[11px] font-extrabold text-accent-ink shadow-sm">
                    4–17 tahun
                  </span>
                </div>

                <div className="relative flex flex-1 items-center justify-center py-8">
                  <img
                    src={brand.logo.src}
                    alt={brand.logo.alt}
                    width={brand.logo.width}
                    height={brand.logo.height}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="h-32 w-full max-w-[26rem] object-contain drop-shadow-[0_20px_30px_rgba(140,24,127,0.14)] sm:h-40"
                  />
                </div>

                <figcaption className="relative grid grid-cols-2 gap-2.5">
                  {kidsproProgramClusters.map((cluster) => {
                    const Icon = clusterIcons[cluster.id];

                    return (
                      <a
                        key={cluster.id}
                        href="#jalur-kreatif"
                        className="group flex min-w-0 items-center gap-2.5 rounded-2xl border border-accent/15 bg-surface/85 p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/35 hover:bg-surface"
                      >
                        <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-ink transition-colors group-hover:bg-accent-strong group-hover:text-white">
                          <Icon aria-hidden="true" className="size-4" />
                        </span>

                        <span className="text-[11px] leading-tight font-extrabold text-ink sm:text-xs">
                          {cluster.title}
                        </span>
                      </a>
                    );
                  })}
                </figcaption>
              </div>
            </figure>

            <div className="absolute -left-3 top-6 z-10 flex items-center gap-3 rounded-2xl border border-white/70 bg-surface/95 p-3 shadow-[var(--shadow-raised)] backdrop-blur-md sm:-left-7 sm:top-10 sm:p-4">
              <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-strong text-white">
                <Stars aria-hidden="true" className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-wide text-accent-ink uppercase">
                  8 jalur kreatif
                </p>
                <p className="mt-0.5 text-sm font-extrabold text-ink">
                  Satu tempat untuk bereksplorasi
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 right-3 z-10 rounded-2xl border border-white/70 bg-surface/95 px-4 py-3 shadow-[var(--shadow-raised)] backdrop-blur-md sm:-right-5 sm:bottom-8">
              <div className="flex items-center gap-2 text-sm font-extrabold text-ink">
                <UserRound
                  aria-hidden="true"
                  className="size-4 text-accent-strong"
                />
                Private 1 siswa · 1 mentor
              </div>
              <p className="mt-1 text-xs text-ink-secondary">
                8 pertemuan per level
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreativeBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute -left-36 top-1/3 size-80 rounded-full bg-brand-cyan/10 blur-3xl" />
      <div className="absolute -right-32 top-0 size-96 rounded-full bg-accent/12 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 size-64 rounded-full bg-brand-yellow/15 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, color-mix(in oklab, var(--accent) 28%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

function KidsproQuickNavigation() {
  const links = [
    { label: "Jalur kreatif", href: "#jalur-kreatif" },
    { label: "Program finder", href: "#kidspro-path-finder" },
    { label: "Katalog program", href: "#program-catalog" },
    { label: "Cara belajar", href: "#cara-belajar-kidspro" },
    { label: "FAQ", href: "#faq-kidspro" },
  ] as const;

  return (
    <nav
      aria-label="Navigasi halaman Kidspro"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto flex w-full max-w-[1200px] gap-2 overflow-x-auto px-5 py-4 sm:px-8">
        <span className="flex shrink-0 items-center pr-2 text-xs font-extrabold tracking-[0.12em] text-ink-muted uppercase">
          Jelajahi
        </span>

        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="inline-flex min-h-10 shrink-0 items-center rounded-full border border-border bg-background px-4 text-sm font-bold text-ink-secondary transition-colors hover:border-accent/35 hover:bg-accent-soft hover:text-accent-ink"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function SkillExplorer() {
  return (
    <section
      id="jalur-kreatif"
      aria-labelledby="skill-explorer-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-end gap-7 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-accent-ink uppercase">
              <Layers3 aria-hidden="true" className="size-4" />
              Delapan program Kidspro
            </p>

            <h2
              id="skill-explorer-title"
              className="mt-4 max-w-3xl text-3xl leading-tight font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
            >
              Minat digital yang berbeda membutuhkan jalur yang berbeda
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg lg:justify-self-end">
            Mulai dari jenis karya yang ingin dibuat anak. Setiap jalur memiliki
            kelompok usia, paket, dan perkembangan kurikulumnya sendiri.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {kidsproProgramClusters.map((cluster, clusterIndex) => {
            const ClusterIcon = clusterIcons[cluster.id];

            return (
              <article
                key={cluster.id}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[var(--shadow-raised)] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-14 -top-16 size-44 rounded-full bg-accent-soft transition-transform duration-500 group-hover:scale-110"
                />

                <div className="relative flex items-start justify-between gap-5">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent-strong text-white shadow-[var(--shadow-soft)]">
                    <ClusterIcon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-sm font-extrabold tracking-[0.16em] text-accent/35">
                    {String(clusterIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-7">
                  <h3 className="text-2xl font-extrabold tracking-tight text-ink">
                    {cluster.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink-secondary">
                    {cluster.description}
                  </p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {cluster.programIds.map((programId) => {
                      const program = kidsproProgramById[programId];
                      const ProgramIcon = programIcons[programId];

                      return (
                        <li key={programId}>
                          <a
                            href="#program-catalog"
                            className="flex h-full items-center gap-3 rounded-2xl border border-accent/10 bg-accent-soft/50 p-3.5 transition-all hover:border-accent/30 hover:bg-accent-soft"
                          >
                            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-surface text-accent-ink shadow-sm">
                              <ProgramIcon
                                aria-hidden="true"
                                className="size-4"
                              />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-extrabold text-ink">
                                {program.shortName}
                              </span>
                              <span className="mt-0.5 block text-xs text-ink-secondary">
                                {program.ageRangeLabel}
                              </span>
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function KidsproPathFinder() {
  const brand = brandById.kidspro;
  const [selectedAge, setSelectedAge] = useState<number | null>(null);
  const [selectedProgramId, setSelectedProgramId] =
    useState<KidsproProgramId | null>(null);
  const [selectedFrequency, setSelectedFrequency] =
    useState<KidsproFrequency | null>(null);

  const availablePrograms = useMemo(
    () => (selectedAge === null ? [] : getKidsproProgramsForAge(selectedAge)),
    [selectedAge],
  );

  const selectedProgram = selectedProgramId
    ? kidsproProgramById[selectedProgramId]
    : null;

  const recommendedPackage = useMemo(() => {
    if (
      selectedAge === null ||
      selectedProgramId === null ||
      selectedFrequency === null
    ) {
      return null;
    }

    return (
      getKidsproPackages({
        programId: selectedProgramId,
        age: selectedAge,
        meetingsPerWeek: selectedFrequency,
      })[0] ?? null
    );
  }, [selectedAge, selectedFrequency, selectedProgramId]);

  const curriculum = useMemo(() => {
    if (selectedAge === null || selectedProgramId === null) return [];
    return getKidsproCurriculumForAge(selectedProgramId, selectedAge);
  }, [selectedAge, selectedProgramId]);

  function selectAge(age: number) {
    setSelectedAge(age);
    setSelectedProgramId(null);
    setSelectedFrequency(null);
  }

  function selectProgram(programId: KidsproProgramId) {
    setSelectedProgramId(programId);
    setSelectedFrequency(null);
  }

  function resetFinder() {
    setSelectedAge(null);
    setSelectedProgramId(null);
    setSelectedFrequency(null);
  }

  return (
    <section
      id="kidspro-path-finder"
      aria-labelledby="kidspro-finder-title"
      className="relative scroll-mt-24 overflow-hidden border-y border-border bg-surface-subtle py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 size-[30rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-accent-ink uppercase">
            <Bot aria-hidden="true" className="size-4" />
            Kidspro path finder
          </p>
          <h2
            id="kidspro-finder-title"
            className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Temukan jalur belajar digital berdasarkan kebutuhan anak
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
            Jawab tiga pilihan sederhana untuk melihat paket yang paling relevan
            sebagai titik awal konsultasi.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:gap-8">
          <div className="space-y-5">
            <FinderStep number="01" title="Berapa usia anak?">
              <div className="grid grid-cols-2 gap-3">
                {ageChoices.map((choice) => {
                  const isSelected = selectedAge === choice.representativeAge;

                  return (
                    <button
                      key={choice.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => selectAge(choice.representativeAge)}
                      className={cn(
                        "rounded-2xl border p-4 text-left transition-all duration-200",
                        isSelected
                          ? "border-accent bg-accent-strong text-white shadow-[var(--shadow-soft)]"
                          : "border-border bg-surface text-ink hover:-translate-y-0.5 hover:border-accent/35",
                      )}
                    >
                      <span className="block text-sm font-extrabold">
                        {choice.label}
                      </span>
                      <span
                        className={cn(
                          "mt-1 block text-xs",
                          isSelected ? "text-white/70" : "text-ink-muted",
                        )}
                      >
                        {choice.helper}
                      </span>
                    </button>
                  );
                })}
              </div>
            </FinderStep>

            <FinderStep
              number="02"
              title="Karya apa yang ingin dibuat?"
              disabled={selectedAge === null}
            >
              {selectedAge === null ? (
                <FinderLockedMessage text="Pilih usia anak terlebih dahulu." />
              ) : (
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {availablePrograms.map((program) => {
                    const Icon = programIcons[program.id];
                    const isSelected = selectedProgramId === program.id;

                    return (
                      <button
                        key={program.id}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => selectProgram(program.id)}
                        className={cn(
                          "flex min-h-14 items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-200",
                          isSelected
                            ? "border-accent bg-accent-soft text-accent-ink shadow-[var(--shadow-soft)]"
                            : "border-border bg-surface text-ink hover:border-accent/35 hover:bg-accent-soft/40",
                        )}
                      >
                        <span
                          className={cn(
                            "grid size-9 shrink-0 place-items-center rounded-xl",
                            isSelected
                              ? "bg-accent-strong text-white"
                              : "bg-accent-soft text-accent-ink",
                          )}
                        >
                          <Icon aria-hidden="true" className="size-4" />
                        </span>
                        <span className="text-sm leading-snug font-bold">
                          {program.shortName}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </FinderStep>

            <FinderStep
              number="03"
              title="Pilih ritme belajarnya"
              disabled={selectedProgramId === null}
            >
              {selectedProgramId === null ? (
                <FinderLockedMessage text="Pilih minat atau program anak terlebih dahulu." />
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {([1, 2] as const).map((frequency) => {
                    const isSelected = selectedFrequency === frequency;

                    return (
                      <button
                        key={frequency}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => setSelectedFrequency(frequency)}
                        className={cn(
                          "rounded-2xl border p-4 text-left transition-all duration-200",
                          isSelected
                            ? "border-accent bg-accent-strong text-white shadow-[var(--shadow-soft)]"
                            : "border-border bg-surface text-ink hover:-translate-y-0.5 hover:border-accent/35",
                        )}
                      >
                        <CalendarDays aria-hidden="true" className="size-5" />
                        <span className="mt-3 block text-sm font-extrabold">
                          {frequency}× seminggu
                        </span>
                        <span
                          className={cn(
                            "mt-1 block text-xs",
                            isSelected ? "text-white/70" : "text-ink-muted",
                          )}
                        >
                          8 pertemuan ·{" "}
                          {frequency === 1 ? "2 bulan" : "1 bulan"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </FinderStep>
          </div>

          <div aria-live="polite" className="min-w-0">
            {recommendedPackage && selectedProgram ? (
              <article className="animate-rise relative flex h-full min-w-0 flex-col overflow-hidden rounded-[2rem] border border-accent/25 bg-surface p-6 shadow-[var(--shadow-raised)] sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-24 size-64 rounded-full bg-accent-soft"
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <span className="grid size-14 place-items-center rounded-2xl bg-accent-strong text-white shadow-[var(--shadow-soft)]">
                      {(() => {
                        const Icon = programIcons[selectedProgram.id];
                        return <Icon aria-hidden="true" className="size-6" />;
                      })()}
                    </span>
                    <span className="rounded-full border border-accent/20 bg-surface px-3 py-1.5 text-xs font-extrabold text-accent-ink">
                      Rekomendasi awal
                    </span>
                  </div>

                  <p className="mt-8 text-sm font-bold tracking-[0.13em] text-accent-ink uppercase">
                    {selectedProgram.name}
                  </p>
                  <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                    Paket {recommendedPackage.name}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink-secondary">
                    {selectedProgram.summary}
                  </p>

                  <dl className="mt-7 grid grid-cols-2 gap-3">
                    <FinderResultFact
                      icon={UserRound}
                      label="Format"
                      value="1 siswa · 1 mentor"
                    />
                    <FinderResultFact
                      icon={CalendarDays}
                      label="Intensitas"
                      value={recommendedPackage.frequencyLabel}
                    />
                    <FinderResultFact
                      icon={Clock3}
                      label="Durasi"
                      value={`${recommendedPackage.totalMeetings} × ${recommendedPackage.sessionDuration}`}
                    />
                    <FinderResultFact
                      icon={MonitorPlay}
                      label="Pelaksanaan"
                      value="Online · Zoom"
                    />
                  </dl>

                  <div className="mt-7 rounded-2xl border border-accent/15 bg-accent-soft/65 p-5">
                    <p className="text-xs font-extrabold tracking-[0.12em] text-accent-ink uppercase">
                      Jalur kurikulum
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {curriculum.map((track) => (
                        <span
                          key={track.id}
                          className="rounded-full bg-surface px-3 py-1.5 text-xs font-bold text-ink shadow-sm"
                        >
                          {track.name} · {track.levels.length} level
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7">
                    <ConsultationCta
                      channel={brand.contactChannel}
                      topic={`${selectedProgram.consultationTopic}, paket ${recommendedPackage.name}`}
                      label={`Tanyakan paket ${recommendedPackage.name}`}
                      variant="brand"
                      size="lg"
                      className="w-full"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={resetFinder}
                    className="mt-4 inline-flex min-h-10 items-center text-sm font-bold text-accent-ink hover:underline"
                  >
                    Atur ulang pilihan
                  </button>
                </div>
              </article>
            ) : (
              <div className="flex h-full min-h-[440px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-accent/30 bg-surface/60 p-8 text-center">
                <span className="grid size-16 place-items-center rounded-[1.4rem] bg-accent-soft text-accent-ink">
                  <Bot aria-hidden="true" className="size-7" />
                </span>
                <p className="mt-6 text-xl font-extrabold text-ink">
                  Rekomendasi akan muncul di sini
                </p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-secondary">
                  Lengkapi pilihan usia, minat, dan ritme belajar. Kami akan
                  menampilkan program beserta paket yang paling relevan.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinderStep({
  number,
  title,
  disabled = false,
  children,
}: {
  number: string;
  title: string;
  disabled?: boolean;
  children: ReactNode;
}) {
  return (
    <fieldset
      disabled={disabled}
      className={cn(
        "rounded-[1.75rem] border border-border bg-surface p-5 shadow-[var(--shadow-soft)] transition-opacity sm:p-6",
        disabled && "opacity-60",
      )}
    >
      <legend className="sr-only">{title}</legend>
      <div className="mb-5 flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-xl bg-accent-soft text-xs font-extrabold text-accent-ink">
          {number}
        </span>
        <p className="font-extrabold text-ink">{title}</p>
      </div>
      {children}
    </fieldset>
  );
}

function FinderLockedMessage({ text }: { text: string }) {
  return (
    <p className="rounded-2xl border border-dashed border-border bg-background p-4 text-sm text-ink-muted">
      {text}
    </p>
  );
}

function FinderResultFact({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <Icon aria-hidden="true" className="size-4 text-accent-strong" />
      <dt className="mt-3 text-xs font-bold text-ink-muted">{label}</dt>
      <dd className="mt-1 text-sm leading-snug font-extrabold text-ink">
        {value}
      </dd>
    </div>
  );
}

function ProgramCatalog() {
  const brand = brandById.kidspro;
  const [activeProgramId, setActiveProgramId] =
    useState<KidsproProgramId>("canva");
  const activeProgram = kidsproProgramById[activeProgramId];
  const ActiveIcon = programIcons[activeProgramId];

  const packageGroups = kidsproAgeBands
    .map((ageBand) => ({
      ageBand,
      packages: activeProgram.packages.filter(
        (item) => item.ageBandId === ageBand.id,
      ),
    }))
    .filter((group) => group.packages.length > 0);

  return (
    <section
      id="program-catalog"
      aria-labelledby="program-catalog-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-end gap-7 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-accent-ink uppercase">
              <Code2 aria-hidden="true" className="size-4" />
              Katalog program
            </p>
            <h2
              id="program-catalog-title"
              className="mt-4 max-w-3xl text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              Lihat pilihan kelas tanpa tenggelam dalam terlalu banyak paket
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg lg:justify-self-end">
            Pilih satu program untuk melihat kelompok usia, nama paket,
            intensitas, dan perkembangan kurikulumnya.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Pilih program Kidspro"
          className="mt-10 flex gap-2 overflow-x-auto pb-2"
        >
          {kidsproPrograms.map((program) => {
            const Icon = programIcons[program.id];
            const isActive = activeProgramId === program.id;

            return (
              <button
                key={program.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="kidspro-program-panel"
                onClick={() => setActiveProgramId(program.id)}
                className={cn(
                  "inline-flex min-h-12 shrink-0 items-center gap-2 rounded-2xl border px-4 text-sm font-bold transition-all duration-200",
                  isActive
                    ? "border-accent-strong bg-accent-strong text-white shadow-[var(--shadow-soft)]"
                    : "border-border bg-surface text-ink-secondary hover:border-accent/30 hover:bg-accent-soft hover:text-accent-ink",
                )}
              >
                <Icon aria-hidden="true" className="size-4" />
                {program.shortName}
              </button>
            );
          })}
        </div>

        <article
          key={activeProgram.id}
          id="kidspro-program-panel"
          role="tabpanel"
          className="animate-rise mt-6 overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-raised)] sm:rounded-[2.5rem]"
        >
          <div className="relative overflow-hidden border-b border-accent/15 bg-gradient-to-br from-accent-soft via-surface to-background p-6 sm:p-9 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 size-72 rounded-full border border-accent/10"
            />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div>
                <div className="flex items-center gap-4">
                  <span className="grid size-14 place-items-center rounded-2xl bg-accent-strong text-white shadow-[var(--shadow-soft)]">
                    <ActiveIcon aria-hidden="true" className="size-6" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.13em] text-accent-ink uppercase">
                      {activeProgram.eyebrow}
                    </p>
                    <p className="mt-1 text-sm font-bold text-ink-secondary">
                      {activeProgram.tool} · {activeProgram.ageRangeLabel}
                    </p>
                  </div>
                </div>

                <h3 className="mt-7 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  {activeProgram.name}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg">
                  {activeProgram.summary}
                </p>
              </div>

              <div className="rounded-2xl border border-accent/15 bg-surface/80 p-5 backdrop-blur-sm">
                <p className="text-xs font-extrabold tracking-[0.12em] text-accent-ink uppercase">
                  Nilai untuk anak
                </p>
                <p className="mt-2 text-sm leading-relaxed font-semibold text-ink">
                  {activeProgram.parentBenefit}
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="border-b border-border p-6 sm:p-9 lg:border-r lg:border-b-0 lg:p-10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold tracking-[0.12em] text-ink-muted uppercase">
                    Pilihan paket
                  </p>
                  <h4 className="mt-2 text-2xl font-extrabold text-ink">
                    Sesuaikan usia dan intensitas
                  </h4>
                </div>
                <span className="hidden rounded-full bg-accent-soft px-3 py-1.5 text-xs font-extrabold text-accent-ink sm:block">
                  {activeProgram.packages.length} paket
                </span>
              </div>

              <div className="mt-7 space-y-6">
                {packageGroups.map(({ ageBand, packages }) => (
                  <div key={ageBand.id}>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-extrabold text-accent-ink">
                        {ageBand.label}
                      </span>
                      <span className="text-sm font-semibold text-ink-secondary">
                        {packages[0]?.ageLabel}
                      </span>
                    </div>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {packages.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-2xl border border-border bg-background p-4 transition-colors hover:border-accent/30 hover:bg-accent-soft/35"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-lg font-extrabold text-ink">
                                {item.name}
                              </p>
                              <p className="mt-1 text-xs font-bold text-accent-ink">
                                {item.frequencyLabel}
                              </p>
                            </div>
                            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-ink">
                              <CalendarDays
                                aria-hidden="true"
                                className="size-4"
                              />
                            </span>
                          </div>

                          <ul className="mt-4 space-y-2 text-xs text-ink-secondary">
                            <li className="flex items-center gap-2">
                              <Check
                                aria-hidden="true"
                                className="size-3.5 text-accent-strong"
                              />
                              8 pertemuan · {item.programDuration}
                            </li>
                            <li className="flex items-center gap-2">
                              <Check
                                aria-hidden="true"
                                className="size-3.5 text-accent-strong"
                              />
                              Private · 40 menit · Zoom
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col p-6 sm:p-9 lg:p-10">
              <div>
                <p className="text-xs font-bold tracking-[0.12em] text-ink-muted uppercase">
                  Perkembangan kurikulum
                </p>
                <h4 className="mt-2 text-2xl font-extrabold text-ink">
                  Naik level secara bertahap
                </h4>
              </div>

              <div className="mt-7 space-y-4">
                {activeProgram.curriculum.map((track) => (
                  <div
                    key={track.id}
                    className="rounded-2xl border border-accent/15 bg-accent-soft/50 p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-extrabold text-ink">{track.name}</p>
                        {track.description ? (
                          <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                            {track.description}
                          </p>
                        ) : null}
                      </div>
                      <span className="shrink-0 rounded-full bg-surface px-2.5 py-1 text-xs font-bold text-accent-ink">
                        8 lesson/level
                      </span>
                    </div>

                    <ol className="mt-5 grid gap-2 sm:grid-cols-2">
                      {track.levels.map((level, index) => (
                        <li
                          key={level}
                          className="flex items-center gap-2 rounded-xl bg-surface px-3 py-2.5 text-xs font-bold text-ink shadow-sm"
                        >
                          <span className="grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft text-[10px] font-extrabold text-accent-ink">
                            {index + 1}
                          </span>
                          {level}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-7">
                <ConsultationCta
                  channel={brand.contactChannel}
                  topic={activeProgram.consultationTopic}
                  label={`Konsultasi ${activeProgram.shortName}`}
                  variant="brand"
                  size="lg"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function LearningJourney() {
  return (
    <section
      id="cara-belajar-kidspro"
      aria-labelledby="learning-journey-title"
      className="relative scroll-mt-24 overflow-hidden border-y border-border bg-deep py-20 text-white sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-0 size-[30rem] rounded-full bg-accent/25 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-end gap-7 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-white/65 uppercase">
              <Rocket aria-hidden="true" className="size-4" />
              Cara belajar Kidspro
            </p>
            <h2
              id="learning-journey-title"
              className="mt-4 max-w-3xl text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Bukan hanya memakai teknologi,
              <span className="block text-white/65">
                tetapi belajar menciptakan sesuatu.
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg lg:justify-self-end">
            Jalur pembelajaran membawa anak dari rasa penasaran menuju proses
            membuat project dan mengembangkan keterampilannya ke level
            berikutnya.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-4 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block"
          />

          {learningSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <li
                key={step.title}
                className="group relative rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.09]"
              >
                <div className="relative flex items-center justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-white transition-colors group-hover:bg-accent">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-xs font-extrabold tracking-[0.16em] text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-extrabold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function KidsproFaq() {
  return (
    <section
      id="faq-kidspro"
      aria-labelledby="faq-kidspro-title"
      className="scroll-mt-24 py-20 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent-ink">
            <CircleHelp aria-hidden="true" className="size-6" />
          </span>
          <p className="mt-6 text-sm font-bold tracking-[0.14em] text-accent-ink uppercase">
            Pertanyaan umum
          </p>
          <h2
            id="faq-kidspro-title"
            className="mt-3 text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Sebelum anak mulai berkarya
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-ink-secondary">
            Gunakan informasi berikut sebagai gambaran awal. Detail perangkat,
            jadwal, dan ketersediaan dapat dikonfirmasi bersama tim Kidspro ID.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {kidsproFaqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-border bg-surface px-5 py-4 shadow-[var(--shadow-soft)] transition-colors open:border-accent/25 open:bg-accent-soft/35 sm:px-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink [&::-webkit-details-marker]:hidden">
                <span className="flex min-w-0 items-start gap-4">
                  <span className="hidden text-xs font-extrabold tracking-widest text-accent/50 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{faq.question}</span>
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-accent-ink transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="mt-4 border-t border-accent/10 pt-4 text-sm leading-relaxed text-ink-secondary sm:ml-10">
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
  const brand = brandById.kidspro;

  return (
    <section className="pb-20 sm:pb-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-accent-strong px-6 py-10 text-white shadow-[var(--shadow-float)] sm:rounded-[2.5rem] sm:px-10 sm:py-14 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-28 -z-10 size-80 rounded-full border border-white/15"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 right-24 -z-10 size-72 rounded-full bg-white/10 blur-2xl"
          />

          <div className="relative grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-sm font-bold tracking-[0.14em] text-white/70 uppercase">
                Dari screen time menuju creative time
              </p>
              <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Bantu anak menemukan karya digital pertamanya
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Sampaikan usia, minat, pengalaman, dan perangkat yang tersedia.
                Tim Kidspro ID akan membantu mengarahkan pilihan program dan
                paket yang relevan.
              </p>
            </div>

            <ConsultationCta
              channel={brand.contactChannel}
              topic="pemilihan kelas digital Kidspro ID"
              label="Hubungi Kidspro ID"
              variant="inverse"
              size="lg"
              className="shrink-0 bg-white text-accent-ink hover:bg-white/90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}