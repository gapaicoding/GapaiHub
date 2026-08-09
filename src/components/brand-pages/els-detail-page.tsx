import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpenCheck,
  BookOpenText,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Eye,
  Gamepad2,
  HeartHandshake,
  MessageCircle,
  Mic2,
  Presentation,
  Sparkles,
  Speech,
  Target,
  UserRound,
  UsersRound,
  Video,
  Volume2,
} from "lucide-react";

import { ConsultationCta } from "@/components/consultation-cta";
import { actionVariants } from "@/components/ui/action";
import { getContactChannel } from "@/config/whatsapp";
import { brandById } from "@/content/brands";
import {
  elsProgram,
  recommendElsPackage,
  type ElsClassPreference,
  type ElsLearningPace,
  type ElsPackage,
} from "@/content/els-program";
import { cn } from "@/lib/utils";

const materialIcons = [Eye, HeartHandshake, Volume2, Presentation] as const;
const methodIcons = [Gamepad2, BookOpenText, Mic2, UserRound] as const;

export function ElsDetailPage() {
  return (
    <article
      data-accent="els"
      className="relative overflow-hidden bg-background"
    >
      <ElsHero />
      <ProgramRail />
      <PackageFinder />
      <LearningOutcomes />
      <CurriculumSection />
      <LearningMethod />
      <PackageComparison />
      <ElsFaq />
      <FinalConsultation />
    </article>
  );
}

function ElsHero() {
  const brand = brandById.els;
  const contact = getContactChannel(brand.contactChannel);

  return (
    <section
      aria-labelledby="els-title"
      className="relative isolate overflow-hidden border-b border-accent/15 bg-gradient-to-br from-[#f8fbfb] via-background to-[#fff9e9]"
    >
      <HeroAtmosphere />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:pb-24">
        <Link
          to="/program"
          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-accent/20 bg-surface/90 px-4 text-sm font-bold text-accent-ink shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-accent/45 hover:bg-surface"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Semua program
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="animate-rise min-w-0 lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-surface/90 px-4 py-2 text-sm font-extrabold text-accent-ink shadow-[var(--shadow-soft)] backdrop-blur-sm">
              <Sparkles aria-hidden="true" className="size-4 text-accent" />
              Public speaking untuk usia {elsProgram.ageRange}
            </p>

            <h1
              id="els-title"
              className="mt-6 max-w-4xl text-4xl leading-[1.04] font-extrabold tracking-[-0.05em] text-ink sm:text-5xl lg:text-[4rem]"
            >
              Berani bicara,
              <span className="block text-accent-strong">
                tumbuh percaya diri.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-secondary sm:text-xl">
              {elsProgram.summary}
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              <HeroMetric icon={Mic2} label="Public speaking" />
              <HeroMetric icon={UsersRound} label="Private & semi-private" />
              <HeroMetric icon={Video} label="Online via Zoom" />
              <HeroMetric icon={Award} label="Modul & sertifikat" />
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ConsultationCta
                channel={brand.contactChannel}
                topic="pemilihan program Public Speaking ELS School"
                label="Konsultasi program ELS"
                variant="brand"
                size="lg"
              />

              <a
                href="#package-finder"
                className={actionVariants({
                  variant: "brandOutline",
                  size: "lg",
                })}
              >
                Temukan paket kelas
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
              className="absolute -right-8 -top-10 size-44 rounded-full bg-accent/20 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-accent/15 bg-surface/90 p-5 shadow-[var(--shadow-float)] backdrop-blur-sm sm:rounded-[2.5rem] sm:p-7">
              <div className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-[1.6rem] border border-accent/10 bg-gradient-to-br from-surface via-[#f8fbfb] to-[#fff7dd] p-8 sm:min-h-72">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-14 size-48 rounded-full border border-accent/15"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -left-12 size-56 rounded-full bg-accent/10 blur-2xl"
                />

                <img
                  src={brand.logo.src}
                  alt={brand.logo.alt}
                  width={brand.logo.width}
                  height={brand.logo.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="relative h-52 w-full max-w-[21rem] object-contain sm:h-60"
                />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-accent/15 bg-accent-soft/70 p-4">
                  <span className="grid size-9 place-items-center rounded-xl bg-surface text-accent-ink shadow-sm">
                    <Target aria-hidden="true" className="size-4.5" />
                  </span>
                  <p className="mt-4 text-xs font-extrabold tracking-[0.12em] text-accent-ink uppercase">
                    Fokus utama
                  </p>
                  <p className="mt-1 text-sm leading-snug font-extrabold text-ink">
                    Keberanian dan komunikasi
                  </p>
                </div>

                <div className="rounded-2xl border border-accent/15 bg-[#fff9e9] p-4">
                  <span className="grid size-9 place-items-center rounded-xl bg-surface text-accent-ink shadow-sm">
                    <Speech aria-hidden="true" className="size-4.5" />
                  </span>
                  <p className="mt-4 text-xs font-extrabold tracking-[0.12em] text-accent-ink uppercase">
                    Pendekatan
                  </p>
                  <p className="mt-1 text-sm leading-snug font-extrabold text-ink">
                    Fun, interaktif, personal
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-accent-strong px-4 py-3 text-white">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10">
                  <MessageCircle aria-hidden="true" className="size-4.5" />
                </span>
                <p className="text-sm leading-relaxed font-semibold">
                  Pilihan paket disesuaikan dengan format dan ritme belajar
                  anak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMetric({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-accent/15 bg-surface/80 p-3.5 shadow-[var(--shadow-soft)] backdrop-blur-sm">
      <Icon aria-hidden="true" className="size-4.5 text-accent-ink" />
      <p className="mt-3 text-xs leading-snug font-extrabold text-ink">
        {label}
      </p>
    </div>
  );
}

function HeroAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute -left-40 top-28 size-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-28 -top-36 size-[30rem] rounded-full bg-brand-yellow/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 size-72 rounded-full bg-brand-sky/10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.13]"
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
  const items = [
    { href: "#package-finder", label: "Pilih paket" },
    { href: "#hasil-belajar", label: "Hasil belajar" },
    { href: "#materi", label: "Materi" },
    { href: "#metode", label: "Metode" },
    { href: "#paket", label: "Bandingkan paket" },
  ] as const;

  return (
    <nav
      aria-label="Navigasi program ELS School"
      className="border-b border-accent/15 bg-surface"
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center gap-2 overflow-x-auto px-5 py-4 sm:px-8">
        <span className="mr-2 shrink-0 text-xs font-extrabold tracking-[0.14em] text-ink-muted uppercase">
          Jelajahi
        </span>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="inline-flex min-h-10 shrink-0 items-center rounded-full border border-accent/15 bg-accent-soft/55 px-4 text-sm font-bold text-accent-ink transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function PackageFinder() {
  const brand = brandById.els;
  const [classPreference, setClassPreference] =
    useState<ElsClassPreference>("semi-private");
  const [learningPace, setLearningPace] = useState<ElsLearningPace>("regular");
  const recommendation = recommendElsPackage({ classPreference, learningPace });

  const choosePreference = (preference: ElsClassPreference) => {
    setClassPreference(preference);
    if (preference === "semi-private") setLearningPace("regular");
  };

  return (
    <section
      id="package-finder"
      aria-labelledby="package-finder-title"
      className="scroll-mt-24 bg-accent-strong py-20 text-white sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center gap-2 text-sm font-extrabold tracking-[0.14em] text-white/65 uppercase">
              <Target aria-hidden="true" className="size-4" />
              Package finder
            </p>
            <h2
              id="package-finder-title"
              className="mt-4 max-w-4xl text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] sm:text-4xl lg:text-5xl"
            >
              Mulai dari suasana dan ritme belajar yang dibutuhkan anak
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:col-span-4">
            Jawab dua pilihan sederhana untuk melihat paket yang paling
            mendekati kebutuhan awal.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] shadow-[var(--shadow-float)]">
          <div className="grid border-b border-white/15 lg:grid-cols-2">
            <FinderStep
              number="01"
              title="Pilih suasana kelas"
              className="border-b border-white/15 lg:border-b-0 lg:border-r"
            >
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <FinderButton
                  icon={UsersRound}
                  title="Kelompok kecil"
                  description="Belajar bersama 2–4 siswa."
                  selected={classPreference === "semi-private"}
                  onClick={() => choosePreference("semi-private")}
                />
                <FinderButton
                  icon={UserRound}
                  title="Private"
                  description="Pendampingan lebih personal."
                  selected={classPreference === "private"}
                  onClick={() => choosePreference("private")}
                />
              </div>
            </FinderStep>

            <FinderStep number="02" title="Pilih ritme belajar">
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <FinderButton
                  icon={Clock3}
                  title="Bertahap"
                  description="Program berjalan dalam dua bulan."
                  selected={learningPace === "regular"}
                  disabled={classPreference === "semi-private"}
                  onClick={() => setLearningPace("regular")}
                />
                <FinderButton
                  icon={Sparkles}
                  title="Lebih intensif"
                  description="Delapan pertemuan dalam satu bulan."
                  selected={learningPace === "intensive"}
                  disabled={classPreference === "semi-private"}
                  onClick={() => setLearningPace("intensive")}
                />
              </div>
              {classPreference === "semi-private" ? (
                <p className="mt-3 text-xs leading-relaxed text-white/55">
                  Paket semi-private yang tersedia pada materi program berjalan
                  dalam periode dua bulan.
                </p>
              ) : null}
            </FinderStep>
          </div>

          <div
            aria-live="polite"
            className="bg-surface p-5 text-ink sm:p-8 lg:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <p className="text-xs font-extrabold tracking-[0.14em] text-accent-ink uppercase">
                  Rekomendasi awal
                </p>
                <h3 className="mt-2 text-3xl leading-tight font-extrabold sm:text-4xl">
                  {recommendation.name}
                </h3>
                <p className="mt-2 font-bold text-accent-ink">
                  {recommendation.format} · {recommendation.period}
                </p>
                <p className="mt-5 leading-relaxed text-ink-secondary">
                  {recommendation.summary}
                </p>
              </div>

              <div className="lg:col-span-4">
                <ul className="grid gap-3">
                  <ResultFact
                    icon={Clock3}
                    text={recommendation.meetingLabel}
                  />
                  <ResultFact
                    icon={Mic2}
                    text={recommendation.sessionDurationLabel}
                  />
                  <ResultFact icon={Video} text={recommendation.delivery} />
                  {recommendation.classSize ? (
                    <ResultFact
                      icon={UsersRound}
                      text={recommendation.classSize}
                    />
                  ) : null}
                </ul>
              </div>

              <div className="lg:col-span-3 lg:justify-self-end">
                <ConsultationCta
                  channel={brand.contactChannel}
                  topic={recommendation.consultationTopic}
                  label={`Tanyakan ${recommendation.name}`}
                  variant="brand"
                  size="md"
                  className="w-full lg:w-auto"
                />
                <p className="mt-3 max-w-xs text-xs leading-relaxed text-ink-muted">
                  Rekomendasi ini adalah panduan awal. Ketersediaan kelas
                  dikonfirmasi oleh tim ELS School.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinderStep({
  number,
  title,
  className,
  children,
}: {
  number: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("p-5 sm:p-7", className)}>
      <p className="text-xs font-extrabold tracking-[0.14em] text-white/55 uppercase">
        {number} · {title}
      </p>
      {children}
    </div>
  );
}

function FinderButton({
  icon: Icon,
  title,
  description,
  selected,
  disabled = false,
  onClick,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "grid min-h-24 grid-cols-[auto_1fr] items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200",
        selected
          ? "border-white bg-white text-accent-ink shadow-[var(--shadow-raised)]"
          : "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
        disabled && "cursor-not-allowed opacity-45",
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

function ResultFact({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed font-semibold text-ink">
      <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-ink">
        <Icon aria-hidden="true" className="size-4" />
      </span>
      <span className="pt-1">{text}</span>
    </li>
  );
}

function LearningOutcomes() {
  return (
    <section
      id="hasil-belajar"
      aria-labelledby="outcomes-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="inline-flex items-center gap-2 text-sm font-extrabold tracking-[0.14em] text-accent-ink uppercase">
            <Speech aria-hidden="true" className="size-4" />
            Arah perkembangan
          </p>
          <h2
            id="outcomes-title"
            className="mt-4 max-w-xl text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
          >
            Bukan sekadar berani memegang mikrofon
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg">
            Anak didampingi untuk membangun cara menyampaikan pesan—dari sikap
            tubuh hingga presentasi yang lebih terarah.
          </p>
        </div>

        <ol className="border-t border-border lg:col-span-7">
          {elsProgram.outcomes.map((outcome, index) => (
            <li
              key={outcome}
              className="group grid grid-cols-[auto_1fr] gap-5 border-b border-border py-6 sm:gap-7 sm:py-7"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-accent-soft text-sm font-extrabold text-accent-ink transition-colors group-hover:bg-accent-strong group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="pt-1 text-lg leading-relaxed font-extrabold text-ink sm:text-xl">
                {outcome}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CurriculumSection() {
  return (
    <section
      id="materi"
      aria-labelledby="curriculum-title"
      className="scroll-mt-24 border-y border-accent/15 bg-surface-subtle py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center gap-2 text-sm font-extrabold tracking-[0.14em] text-accent-ink uppercase">
              <BookOpenCheck aria-hidden="true" className="size-4" />
              Materi terpadu
            </p>
            <h2
              id="curriculum-title"
              className="mt-4 max-w-4xl text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
            >
              Empat fondasi untuk berbicara dengan lebih meyakinkan
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg lg:col-span-4">
            Materi menghubungkan aspek nonverbal, keberanian, kualitas suara,
            dan etika presentasi.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {elsProgram.materials.map((material, index) => {
            const Icon = materialIcons[index] ?? Mic2;
            return (
              <article
                key={material.id}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[var(--shadow-raised)] sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 text-5xl font-extrabold tracking-[-0.05em] text-accent/10"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent-ink transition-colors group-hover:bg-accent-strong group-hover:text-white">
                  <Icon aria-hidden="true" className="size-5.5" />
                </span>
                <p className="mt-7 text-xs font-extrabold tracking-[0.12em] text-accent-ink uppercase">
                  {material.originalLabel}
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-ink sm:text-2xl">
                  {material.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ink-secondary">
                  {material.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LearningMethod() {
  return (
    <section
      id="metode"
      aria-labelledby="method-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold tracking-[0.14em] text-accent-ink uppercase">
            Cara anak berlatih
          </p>
          <h2
            id="method-title"
            className="mt-4 text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
          >
            Kelas dibuat aktif, suportif, dan dekat dengan praktik
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
            Kemampuan komunikasi berkembang ketika anak memperoleh ruang aman
            untuk mencoba dan mendapatkan arahan.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-raised)] sm:grid-cols-2 lg:grid-cols-4">
          {elsProgram.methods.map((method, index) => {
            const Icon = methodIcons[index] ?? Mic2;
            return (
              <article
                key={method.id}
                className="group border-b border-border p-6 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-2xl bg-accent-soft text-accent-ink transition-colors group-hover:bg-accent-strong group-hover:text-white">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-xs font-extrabold tracking-widest text-accent/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-extrabold text-ink">
                  {method.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                  {method.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PackageComparison() {
  return (
    <section
      id="paket"
      aria-labelledby="packages-title"
      className="scroll-mt-24 border-y border-accent/15 bg-[#f8fbfb] py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-sm font-extrabold tracking-[0.14em] text-accent-ink uppercase">
              Pilihan paket
            </p>
            <h2
              id="packages-title"
              className="mt-4 max-w-4xl text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
            >
              Tiga ritme pendampingan, satu tujuan komunikasi
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg lg:col-span-4">
            Bandingkan format, periode, durasi sesi, dan fasilitas—tanpa perlu
            memilih berdasarkan harga.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {elsProgram.packages.map((packageItem, index) => (
            <PackageCard
              key={packageItem.id}
              packageItem={packageItem}
              featured={packageItem.id === "hamka"}
              index={index}
            />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-accent/15 bg-surface p-5 text-sm leading-relaxed text-ink-secondary shadow-[var(--shadow-soft)] sm:p-6">
          <span className="font-extrabold text-ink">
            Catatan ketersediaan:{" "}
          </span>
          {elsProgram.availabilityNote}
        </div>
      </div>
    </section>
  );
}

function PackageCard({
  packageItem,
  featured,
  index,
}: {
  packageItem: ElsPackage;
  featured: boolean;
  index: number;
}) {
  const brand = brandById.els;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-[2rem] border bg-surface shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-raised)]",
        featured ? "border-accent/45" : "border-border",
      )}
    >
      {featured ? (
        <p className="bg-accent-strong px-5 py-2 text-center text-xs font-extrabold tracking-[0.13em] text-white uppercase">
          Ritme intensif
        </p>
      ) : null}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent-ink">
            {packageItem.classPreference === "semi-private" ? (
              <UsersRound aria-hidden="true" className="size-5" />
            ) : (
              <UserRound aria-hidden="true" className="size-5" />
            )}
          </span>
          <span className="text-xs font-extrabold tracking-widest text-accent/45">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="mt-7 text-xs font-extrabold tracking-[0.12em] text-accent-ink uppercase">
          {packageItem.format}
        </p>
        <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-ink">
          {packageItem.name}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
          {packageItem.summary}
        </p>

        <ul className="mt-6 grid gap-3 border-y border-border py-6">
          <PackageFact icon={Clock3} text={packageItem.meetingLabel} />
          <PackageFact icon={Mic2} text={packageItem.sessionDurationLabel} />
          <PackageFact icon={Video} text={packageItem.delivery} />
          {packageItem.classSize ? (
            <PackageFact icon={UsersRound} text={packageItem.classSize} />
          ) : null}
        </ul>

        <div className="mt-6">
          <p className="text-xs font-extrabold tracking-[0.12em] text-ink-muted uppercase">
            Fasilitas
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {packageItem.facilities.map((facility) => (
              <li
                key={facility}
                className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-2 text-xs font-bold text-accent-ink"
              >
                <Check aria-hidden="true" className="size-3.5" />
                {facility}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-7">
          <ConsultationCta
            channel={brand.contactChannel}
            topic={packageItem.consultationTopic}
            label={`Tanyakan ${packageItem.name}`}
            variant={featured ? "brand" : "brandOutline"}
            size="md"
            className="w-full"
          />
        </div>
      </div>
    </article>
  );
}

function PackageFact({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed font-semibold text-ink">
      <Icon
        aria-hidden="true"
        className="mt-0.5 size-4.5 shrink-0 text-accent-ink"
      />
      <span>{text}</span>
    </li>
  );
}

function ElsFaq() {
  return (
    <section aria-labelledby="faq-els-title" className="py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent-ink">
            <CircleHelp aria-hidden="true" className="size-6" />
          </span>
          <p className="mt-6 text-sm font-extrabold tracking-[0.14em] text-accent-ink uppercase">
            Pertanyaan umum
          </p>
          <h2
            id="faq-els-title"
            className="mt-3 text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Memahami program ELS School
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-ink-secondary">
            Gambaran awal tentang usia, materi, format kelas, dan pemilihan
            paket sebelum konsultasi.
          </p>
        </div>

        <div className="border-t border-border lg:col-span-8">
          {elsProgram.faqs.map((faq, index) => (
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
  const brand = brandById.els;

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
            className="absolute -bottom-32 right-16 -z-10 size-72 rounded-full bg-accent/20 blur-2xl"
          />

          <div className="grid gap-9 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-sm font-extrabold tracking-[0.14em] text-white/65 uppercase">
                Langkah berikutnya
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Temukan ruang latihan yang membuat anak berani bertumbuh
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                {elsProgram.consultationPrompt}
              </p>
            </div>

            <div className="lg:col-span-4 lg:justify-self-end">
              <ConsultationCta
                channel={brand.contactChannel}
                topic="pemilihan program Public Speaking ELS School"
                label="Konsultasi ELS School"
                variant="inverse"
                size="lg"
              />
              <a
                href="#package-finder"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-white/70 transition-colors hover:text-white"
              >
                Lihat ulang pilihan paket
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}