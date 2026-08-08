import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  Check,
  ChevronDown,
  CircleHelp,
  GraduationCap,
  Languages,
  MessageCircle,
  Sparkles,
  Target,
} from "lucide-react";

import { ConsultationCta } from "@/components/consultation-cta";
import { actionVariants } from "@/components/ui/action";
import { getContactChannel } from "@/config/whatsapp";
import { brandById } from "@/content/brands";
import {
  programDetails,
  type ProgramOffering,
} from "@/content/program-details";
import { cn } from "@/lib/utils";

const offeringIcons = [BookOpen, Calculator, GraduationCap, Languages] as const;

const choicePrompts = [
  {
    label: "Sedang membangun kemampuan membaca, menulis, dan berhitung",
    program: "Calistung",
    href: "#calistung",
  },
  {
    label: "Membutuhkan bantuan memahami konsep dan latihan Matematika",
    program: "Matematika",
    href: "#matematika",
  },
  {
    label: "Membutuhkan pendampingan untuk materi pelajaran sekolah",
    program: "Bimbel Mata Pelajaran",
    href: "#bimbel-mapel",
  },
  {
    label: "Ingin belajar Bahasa Arab dan Al-Qur'an secara bertahap",
    program: "Bahasa Arab & Al-Qur'an",
    href: "#bahasa-arab-al-quran",
  },
] as const;

export function BriliaDetailPage() {
  const brand = brandById.brilia;
  const detail = programDetails.brilia;
  const offerings = detail.offerings ?? [];
  const contact = getContactChannel(brand.contactChannel);

  return (
    <article
      data-accent="brilia"
      className="relative overflow-hidden bg-background"
    >
      <BriliaHero offerings={offerings} />

      <ProgramNavigation offerings={offerings} />

      <ProgramOfferings offerings={offerings} />

      <LearningApproach />

      <ProgramChoiceGuide />

      <ConsultationGuide />

      <BriliaFaq />

      <FinalConsultation />

      {contact.notice ? <p className="sr-only">{contact.notice}</p> : null}
    </article>
  );
}

function BriliaHero({ offerings }: { offerings: ProgramOffering[] }) {
  const brand = brandById.brilia;
  const detail = programDetails.brilia;
  const contact = getContactChannel(brand.contactChannel);

  return (
    <section
      aria-labelledby="brilia-title"
      className="relative isolate overflow-hidden border-b border-border bg-gradient-to-br from-[#f8fcff] via-background to-accent-soft py-12 sm:py-16 lg:py-20"
    >
      <HeroBackground />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Link
          to="/program"
          className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-accent-ink transition-colors hover:text-accent-strong hover:underline"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Kembali ke semua program
        </Link>

        <div className="mt-9 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="animate-rise min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-surface/85 px-4 py-2 text-sm font-bold text-accent-ink shadow-[var(--shadow-soft)] backdrop-blur-sm">
              <Sparkles
                aria-hidden="true"
                className="size-4 text-accent-strong"
              />
              Partner belajar akademik anak
            </p>

            <h1
              id="brilia-title"
              className="mt-6 max-w-3xl text-4xl leading-[1.06] font-extrabold tracking-[-0.045em] text-ink sm:text-5xl lg:text-[3.75rem]"
            >
              Belajar lebih terarah,
              <span className="block text-accent-strong">
                sesuai kebutuhan anak.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-secondary sm:text-xl">
              {detail.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {offerings.map((offering) => (
                <a
                  key={offering.id}
                  href={`#${offering.id}`}
                  className="rounded-full border border-accent/20 bg-surface px-3.5 py-2 text-sm font-bold text-accent-ink shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft"
                >
                  {offering.title}
                </a>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ConsultationCta
                channel={brand.contactChannel}
                topic="program belajar Brilia"
                label="Konsultasikan kebutuhan anak"
                size="lg"
                className="bg-accent-strong text-white hover:bg-accent-ink"
              />

              <a
                href="#pilihan-program"
                className={cn(
                  actionVariants({ variant: "secondary", size: "lg" }),
                  "border-accent/40 text-accent-ink hover:border-accent hover:bg-accent-soft",
                )}
              >
                Lihat pilihan program
                <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>

            {contact.notice ? (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {contact.notice}
              </p>
            ) : null}
          </div>

          <div className="animate-rise relative min-w-0 [animation-delay:120ms]">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 size-40 rounded-full bg-accent/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-12 -left-8 size-44 rounded-full bg-brand-yellow/20 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-accent/15 bg-surface/90 p-5 shadow-[var(--shadow-float)] backdrop-blur-sm sm:rounded-[2.5rem] sm:p-7">
              <div className="flex min-h-44 items-center justify-center rounded-[1.5rem] border border-accent/10 bg-gradient-to-br from-surface via-accent-soft/40 to-surface p-7 sm:min-h-52">
                <img
                  src={brand.logo.src}
                  alt={brand.logo.alt}
                  width={brand.logo.width}
                  height={brand.logo.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-32 w-full max-w-[18rem] object-contain sm:h-40"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {offerings.map((offering, index) => {
                  const Icon = offeringIcons[index] ?? BookOpen;

                  return (
                    <a
                      key={offering.id}
                      href={`#${offering.id}`}
                      className="group flex min-h-28 flex-col justify-between rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-accent-soft hover:shadow-[var(--shadow-soft)]"
                    >
                      <span className="grid size-9 place-items-center rounded-xl bg-accent-soft text-accent-ink transition-colors group-hover:bg-surface">
                        <Icon aria-hidden="true" className="size-4.5" />
                      </span>

                      <span className="mt-4 text-sm leading-snug font-extrabold text-ink">
                        {offering.title}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-accent-strong px-4 py-3 text-white">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/15">
                  <Target aria-hidden="true" className="size-4.5" />
                </span>

                <p className="text-sm leading-relaxed font-semibold">
                  Empat pilihan belajar, satu arah pendampingan yang berpusat
                  pada kebutuhan anak.
                </p>
              </div>
            </div>
          </div>
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
      <div className="absolute -left-32 top-1/3 size-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-32 top-0 size-96 rounded-full bg-brand-sky/15 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, color-mix(in oklab, var(--accent) 24%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

function ProgramNavigation({ offerings }: { offerings: ProgramOffering[] }) {
  return (
    <section
      aria-label="Navigasi program Brilia"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto flex w-full max-w-[1200px] gap-2 overflow-x-auto px-5 py-4 sm:px-8">
        <span className="flex shrink-0 items-center pr-2 text-xs font-extrabold tracking-[0.12em] text-ink-muted uppercase">
          Pilih program
        </span>

        {offerings.map((offering) => (
          <a
            key={offering.id}
            href={`#${offering.id}`}
            className="inline-flex min-h-10 shrink-0 items-center rounded-full border border-border bg-background px-4 text-sm font-bold text-ink-secondary transition-colors hover:border-accent/35 hover:bg-accent-soft hover:text-accent-ink"
          >
            {offering.title}
          </a>
        ))}
      </div>
    </section>
  );
}

function ProgramOfferings({ offerings }: { offerings: ProgramOffering[] }) {
  const brand = brandById.brilia;

  return (
    <section
      id="pilihan-program"
      aria-labelledby="program-brilia-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-end gap-7 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-accent-ink uppercase">
              <BookOpen aria-hidden="true" className="size-4" />
              Pilihan program Brilia
            </p>

            <h2
              id="program-brilia-title"
              className="mt-4 max-w-3xl text-3xl leading-tight font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
            >
              Temukan pendampingan yang sesuai dengan kebutuhan belajar anak
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg lg:justify-self-end">
            Setiap program memiliki fokus berbeda. Gunakan penjelasan berikut
            sebagai panduan awal, lalu konfirmasikan kebutuhan anak bersama tim
            Brilia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {offerings.map((offering, index) => {
            const Icon = offeringIcons[index] ?? BookOpen;

            return (
              <article
                key={offering.id}
                id={offering.id}
                className="group relative scroll-mt-28 overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[var(--shadow-raised)]"
              >
                <div className="relative overflow-hidden border-b border-accent/10 bg-gradient-to-br from-accent-soft via-surface to-surface p-6 sm:p-8">
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-16 size-44 rounded-full border border-accent/10"
                  />

                  <div className="relative flex items-start justify-between gap-5">
                    <span className="grid size-14 place-items-center rounded-2xl bg-accent-strong text-white shadow-[var(--shadow-soft)]">
                      <Icon aria-hidden="true" className="size-6" />
                    </span>

                    <span className="text-sm font-extrabold tracking-[0.16em] text-accent/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mt-10">
                    <p className="text-xs font-bold tracking-[0.13em] text-accent-ink uppercase">
                      {offering.eyebrow}
                    </p>

                    <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-ink">
                      {offering.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-base leading-relaxed font-semibold text-ink-secondary">
                      {offering.summary}
                    </p>
                  </div>
                </div>

                <div className="flex h-full flex-col p-6 sm:p-8">
                  <p className="leading-relaxed text-ink-secondary">
                    {offering.description}
                  </p>

                  <div className="mt-6 rounded-2xl border border-accent/15 bg-accent-soft/65 p-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-surface text-accent-ink shadow-sm">
                        <Check aria-hidden="true" className="size-4" />
                      </span>

                      <div>
                        <p className="text-xs font-extrabold tracking-[0.12em] text-accent-ink uppercase">
                          Dapat dipertimbangkan untuk
                        </p>

                        <p className="mt-1.5 text-sm leading-relaxed text-ink">
                          {offering.suitableFor}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-7">
                    <ConsultationCta
                      channel={brand.contactChannel}
                      topic={offering.consultationTopic}
                      label={`Tanyakan ${offering.title}`}
                      variant="secondary"
                      size="md"
                      className="w-full border-accent/35 text-accent-ink hover:border-accent hover:bg-accent-soft sm:w-auto"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LearningApproach() {
  const detail = programDetails.brilia;

  return (
    <section
      aria-labelledby="pendekatan-brilia-title"
      className="relative overflow-hidden border-y border-border bg-surface-subtle py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 size-[28rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-bold tracking-[0.14em] text-accent-ink uppercase">
            Cara Brilia mendampingi
          </p>

          <h2
            id="pendekatan-brilia-title"
            className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Belajar bukan sekadar menyelesaikan materi
          </h2>

          <p className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
            Pendampingan dimulai dari kebutuhan anak, lalu dijalankan secara
            bertahap agar proses belajarnya terasa lebih terarah dan nyaman.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-raised)]">
          {detail.focusAreas.map((focus, index) => (
            <article
              key={focus.title}
              className="group grid gap-5 border-b border-border p-6 last:border-b-0 sm:grid-cols-[auto_1fr] sm:p-8"
            >
              <span className="grid size-12 place-items-center rounded-2xl border border-accent/15 bg-accent-soft text-sm font-extrabold text-accent-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-accent-strong group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-xl font-extrabold text-ink">
                  {focus.title}
                </h3>

                <p className="mt-2 leading-relaxed text-ink-secondary">
                  {focus.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramChoiceGuide() {
  return (
    <section
      aria-labelledby="pilih-program-title"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.14em] text-accent-ink uppercase">
            Belum yakin memilih?
          </p>

          <h2
            id="pilih-program-title"
            className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Mulai dari kebutuhan yang paling terasa saat ini
          </h2>

          <p className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
            Tidak perlu mengetahui nama programnya sejak awal. Cocokkan kondisi
            anak dengan panduan berikut untuk mempersempit pilihan.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-raised)]">
          {choicePrompts.map((choice, index) => (
            <a
              key={choice.program}
              href={choice.href}
              className="group grid gap-4 border-b border-border p-5 transition-colors last:border-b-0 hover:bg-accent-soft/60 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6"
            >
              <span className="grid size-10 place-items-center rounded-2xl bg-accent-soft text-sm font-extrabold text-accent-ink transition-colors group-hover:bg-accent-strong group-hover:text-white">
                {index + 1}
              </span>

              <div>
                <p className="text-sm leading-relaxed text-ink-secondary">
                  {choice.label}
                </p>

                <p className="mt-1 font-extrabold text-ink">
                  Pertimbangkan {choice.program}
                </p>
              </div>

              <ArrowRight
                aria-hidden="true"
                className="hidden size-5 text-accent-ink transition-transform group-hover:translate-x-1 sm:block"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultationGuide() {
  const brand = brandById.brilia;
  const detail = programDetails.brilia;

  const preparationItems = [
    "Usia atau kelas anak",
    "Program yang sedang dipertimbangkan",
    "Kemampuan anak saat ini",
    "Bagian belajar yang paling membutuhkan bantuan",
  ] as const;

  return (
    <section
      aria-labelledby="konsultasi-brilia-title"
      className="border-y border-border bg-surface-subtle py-20 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-accent-ink uppercase">
            <MessageCircle aria-hidden="true" className="size-4" />
            Sebelum konsultasi
          </p>

          <h2
            id="konsultasi-brilia-title"
            className="mt-4 max-w-xl text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Ceritakan kondisi anak dengan sederhana
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg">
            {detail.consultationPrompt}
          </p>
        </div>

        <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-raised)] sm:p-8">
          <p className="text-sm font-extrabold tracking-[0.12em] text-ink uppercase">
            Informasi yang dapat disiapkan
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {preparationItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-accent/10 bg-accent-soft/60 p-4 text-sm leading-relaxed font-semibold text-ink"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-surface text-accent-ink shadow-sm">
                  <Check aria-hidden="true" className="size-3.5" />
                </span>

                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 rounded-2xl border border-border bg-background p-4 text-sm leading-relaxed text-ink-secondary">
            Informasi jadwal, format pendampingan, ketersediaan, dan biaya perlu
            dikonfirmasi langsung melalui kanal resmi Brilia.
          </p>

          <div className="mt-6">
            <ConsultationCta
              channel={brand.contactChannel}
              topic="pemilihan program Brilia"
              label="Konsultasikan kebutuhan anak"
              size="lg"
              className="w-full bg-accent-strong text-white hover:bg-accent-ink sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BriliaFaq() {
  const detail = programDetails.brilia;

  return (
    <section aria-labelledby="faq-brilia-title" className="py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent-ink">
            <CircleHelp aria-hidden="true" className="size-6" />
          </span>

          <p className="mt-6 text-sm font-bold tracking-[0.14em] text-accent-ink uppercase">
            Pertanyaan umum
          </p>

          <h2
            id="faq-brilia-title"
            className="mt-3 text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Tentang program Brilia
          </h2>

          <p className="mt-4 max-w-md leading-relaxed text-ink-secondary">
            Informasi berikut membantu memberikan gambaran awal sebelum
            berbicara langsung dengan tim Brilia.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {detail.faqs.map((faq, index) => (
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
  const brand = brandById.brilia;
  const contact = getContactChannel(brand.contactChannel);

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
                Langkah berikutnya
              </p>

              <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Temukan program belajar yang paling relevan untuk anak
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Sampaikan kebutuhan anak dan program yang sedang
                dipertimbangkan. Tim Brilia akan membantu memberikan informasi
                yang tersedia.
              </p>

              {contact.notice ? (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65">
                  {contact.notice}
                </p>
              ) : null}
            </div>

            <ConsultationCta
              channel={brand.contactChannel}
              topic="program belajar Brilia"
              label="Hubungi Brilia"
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