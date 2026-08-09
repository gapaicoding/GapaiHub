import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  HeartHandshake,
  Lightbulb,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";

import { ConsultationCta } from "@/components/consultation-cta";
import { actionVariants } from "@/components/ui/action";
import {
  aboutBrandProfiles,
  aboutClosing,
  aboutCommitments,
  aboutHero,
  aboutJourney,
  aboutPrinciples,
  aboutPurpose,
  companyProfile,
  companyStory,
  type AboutPrincipleId,
} from "@/content/about";
import { brandById, brands, type Brand } from "@/content/brands";
import { cn } from "@/lib/utils";

const principleIcons: Record<AboutPrincipleId, LucideIcon> = {
  "needs-first": Target,
  specialist: Network,
  interactive: Lightbulb,
  gradual: HeartHandshake,
};

export function AboutPage() {
  return (
    <article className="relative overflow-hidden bg-background">
      <AboutHero />
      <CompanyStory />
      <PurposeAndPrinciples />
      <BrandEcosystem />
      <HowGapaiWorks />
      <CommitmentSection />
      <AboutFinalCta />
    </article>
  );
}

function AboutHero() {
  return (
    <section
      aria-labelledby="about-title"
      className="relative isolate overflow-hidden border-b border-border pb-18 pt-10 sm:pb-22 sm:pt-12 lg:pb-24"
    >
      <AboutHeroBackground />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <Link
          to="/"
          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-primary/15 bg-surface/80 px-4 text-sm font-bold text-primary shadow-[var(--shadow-soft)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:bg-surface"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Kembali ke beranda
        </Link>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14 xl:gap-18">
          <div className="animate-rise min-w-0">
            <p className="inline-flex items-center gap-3 text-sm font-extrabold tracking-[0.1em] text-primary uppercase">
              <span className="grid size-9 place-items-center rounded-2xl border border-primary/15 bg-surface shadow-[var(--shadow-soft)]">
                <Building2 aria-hidden="true" className="size-4" />
              </span>
              {aboutHero.eyebrow}
            </p>

            <h1
              id="about-title"
              className="mt-6 max-w-4xl text-4xl leading-[1.04] font-extrabold tracking-[-0.052em] text-balance-heading text-ink sm:text-5xl lg:text-[3.75rem] xl:text-[4.2rem]"
            >
              Mendampingi anak menemukan
              <span className="block text-primary">arah tumbuhnya.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-secondary sm:text-xl">
              {aboutHero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/program"
                className={actionVariants({ variant: "primary", size: "lg" })}
              >
                <Compass aria-hidden="true" className="size-4" />
                Jelajahi empat brand
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>

              <ConsultationCta
                channel="gapai"
                label="Konsultasikan kebutuhan anak"
                variant="secondary"
                size="lg"
              />
            </div>

            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-[1.6rem] border border-border bg-border shadow-[var(--shadow-soft)] sm:grid-cols-3">
              <HeroFact value="4" label="brand spesialis" />
              <HeroFact value="1" label="ekosistem pendidikan" />
              <HeroFact
                value="DIY"
                label="basis operasional"
                className="col-span-2 sm:col-span-1"
              />
            </dl>
          </div>

          <div className="animate-rise relative min-w-0 [animation-delay:120ms]">
            <EcosystemVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutHeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-brand-lavender/45" />
      <div className="animate-pulse-soft absolute -left-40 top-12 size-[30rem] rounded-full bg-brand-sky/15 blur-3xl" />
      <div className="animate-pulse-soft absolute -right-36 -top-32 size-[34rem] rounded-full bg-primary/12 blur-3xl [animation-delay:900ms]" />
      <div className="absolute -bottom-48 left-1/3 size-96 rounded-full bg-brand-yellow/16 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

function HeroFact({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-surface/90 px-4 py-4 backdrop-blur-sm sm:px-5",
        className,
      )}
    >
      <dt className="text-xl font-extrabold tracking-tight text-primary">
        {value}
      </dt>
      <dd className="mt-0.5 text-xs leading-relaxed font-semibold text-ink-secondary">
        {label}
      </dd>
    </div>
  );
}

function EcosystemVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[3.5rem] bg-gradient-to-br from-primary/12 via-brand-lavender/35 to-brand-yellow/20 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-primary/12 bg-surface/85 p-4 shadow-[var(--shadow-float)] backdrop-blur-md sm:rounded-[2.6rem] sm:p-5">
        <div className="relative flex min-h-44 items-center justify-center overflow-hidden rounded-[1.55rem] border border-primary/10 bg-gradient-to-br from-surface via-brand-lavender/35 to-surface p-6 sm:min-h-52">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-16 size-48 rounded-full border border-primary/12"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -left-12 size-48 rounded-full bg-brand-yellow/20 blur-2xl"
          />
          <img
            src="/logo-gapai-wordmark.png"
            alt="Gapai Mentorship"
            width="800"
            height="474"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="relative h-28 w-auto object-contain sm:h-36"
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={brand.href}
              data-accent={brand.id}
              aria-label={`Lihat ${brand.name}`}
              className="group relative flex min-h-32 items-center justify-center overflow-hidden rounded-2xl border border-accent/15 bg-gradient-to-br from-surface via-accent-soft/65 to-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-raised)] sm:min-h-36"
            >
              <span className="absolute right-3 top-3 size-2 rounded-full bg-accent" />
              <img
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={brand.logo.width}
                height={brand.logo.height}
                loading="lazy"
                decoding="async"
                className={cn(
                  "object-contain transition-transform duration-300 group-hover:scale-105",
                  brand.logo.layout === "badge" && "size-20 sm:size-24",
                  brand.logo.layout === "landscape" && "h-20 w-[90%] sm:h-24",
                  brand.logo.layout === "wide" && "h-16 w-[94%] sm:h-20",
                )}
              />
            </Link>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-deep px-4 py-3 text-white">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-brand-yellow">
            <Network aria-hidden="true" className="size-4.5" />
          </span>
          <p className="text-sm leading-relaxed font-semibold text-white/80">
            Brand berbeda, arah pendampingan tetap terhubung dalam satu
            ekosistem.
          </p>
        </div>
      </div>
    </div>
  );
}

function CompanyStory() {
  return (
    <section
      aria-labelledby="company-story-title"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="inline-flex items-center gap-2 text-sm font-extrabold tracking-[0.14em] text-primary uppercase">
            <Building2 aria-hidden="true" className="size-4" />
            {companyStory.eyebrow}
          </p>
          <h2
            id="company-story-title"
            className="mt-4 max-w-xl text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
          >
            {companyStory.title}
          </h2>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-soft)]">
            <MapPin
              aria-hidden="true"
              className="size-5 shrink-0 text-primary"
            />
            <div>
              <p className="text-xs font-extrabold tracking-[0.1em] text-ink-muted uppercase">
                Basis operasional
              </p>
              <p className="mt-1 text-sm font-bold text-ink">
                {companyProfile.operationalBase}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
            {companyStory.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="relative mt-9 overflow-hidden rounded-[2rem] bg-primary px-6 py-8 text-white shadow-[var(--shadow-raised)] sm:px-9 sm:py-10">
            <Sparkles
              aria-hidden="true"
              className="absolute right-7 top-7 size-7 text-brand-yellow"
            />
            <p className="max-w-2xl text-xl leading-relaxed font-extrabold sm:text-2xl">
              “{companyStory.highlight}”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function PurposeAndPrinciples() {
  return (
    <section
      aria-labelledby="purpose-title"
      className="relative overflow-hidden border-y border-border bg-surface-subtle py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 size-[30rem] rounded-full bg-primary/8 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold tracking-[0.14em] text-primary uppercase">
              {aboutPurpose.eyebrow}
            </p>
            <h2
              id="purpose-title"
              className="mt-4 max-w-4xl text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
            >
              {aboutPurpose.title}
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg">
              {aboutPurpose.description}
            </p>
            <p className="mt-4 max-w-xl font-bold leading-relaxed text-ink">
              {aboutPurpose.closing}
            </p>
          </div>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-raised)] md:grid-cols-2">
          {aboutPrinciples.map((principle) => {
            const Icon = principleIcons[principle.id];
            return (
              <article
                key={principle.id}
                className="group relative min-h-64 overflow-hidden border-b border-border p-6 last:border-b-0 md:border-r md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0 sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 text-6xl font-extrabold tracking-[-0.06em] text-primary/8"
                >
                  {principle.number}
                </span>
                <span className="grid size-12 place-items-center rounded-2xl bg-surface-selected text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon aria-hidden="true" className="size-5.5" />
                </span>
                <h3 className="mt-10 max-w-sm text-xl font-extrabold text-ink sm:text-2xl">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink-secondary">
                  {principle.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BrandEcosystem() {
  return (
    <section
      aria-labelledby="ecosystem-title"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center gap-2 text-sm font-extrabold tracking-[0.14em] text-primary uppercase">
              <Network aria-hidden="true" className="size-4" />
              Empat brand spesialis
            </p>
            <h2
              id="ecosystem-title"
              className="mt-4 max-w-4xl text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
            >
              Fokus berbeda untuk cara tumbuh yang berbeda
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg lg:col-span-4">
            Setiap brand memiliki wilayah pendampingan, program, dan karakter
            belajarnya sendiri.
          </p>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {aboutBrandProfiles.map((profile, index) => {
            const brand = brandById[profile.brandId];
            return (
              <BrandEditorialRow
                key={profile.brandId}
                brand={brand}
                profile={profile}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BrandEditorialRow({
  brand,
  profile,
  index,
}: {
  brand: Brand;
  profile: (typeof aboutBrandProfiles)[number];
  index: number;
}) {
  return (
    <article
      data-accent={brand.id}
      className="group grid gap-7 py-9 sm:py-11 lg:grid-cols-12 lg:items-center lg:gap-10"
    >
      <div
        className={cn(
          "relative flex min-h-52 items-center justify-center overflow-hidden rounded-[2rem] border border-accent/15 bg-gradient-to-br from-surface via-accent-soft/75 to-surface p-6 shadow-[var(--shadow-soft)] lg:col-span-4",
          index % 2 === 1 && "lg:order-2",
        )}
      >
        <span className="absolute right-5 top-4 text-xs font-extrabold tracking-[0.16em] text-accent/45">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div
          aria-hidden="true"
          className="absolute -bottom-16 -left-12 size-48 rounded-full bg-accent/10 blur-2xl"
        />
        <img
          src={brand.logo.src}
          alt={brand.logo.alt}
          width={brand.logo.width}
          height={brand.logo.height}
          loading="lazy"
          decoding="async"
          className={cn(
            "relative object-contain transition-transform duration-500 group-hover:scale-105",
            brand.logo.layout === "badge" && "size-36",
            brand.logo.layout === "landscape" && "h-36 w-[85%]",
            brand.logo.layout === "wide" && "h-28 w-[92%]",
          )}
        />
      </div>

      <div className={cn("lg:col-span-8", index % 2 === 1 && "lg:order-1")}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-accent-soft px-3 py-1.5 text-xs font-extrabold tracking-[0.1em] text-accent-ink uppercase">
            {profile.ecosystemRole}
          </span>
          <span className="text-sm font-bold text-ink-muted">{brand.name}</span>
        </div>

        <h3 className="mt-4 max-w-3xl text-2xl leading-tight font-extrabold tracking-tight text-ink sm:text-3xl">
          {profile.headline}
        </h3>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink-secondary sm:text-lg">
          {profile.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {profile.focusAreas.map((focus) => (
            <li
              key={focus}
              className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-soft/55 px-3.5 py-2 text-xs font-bold text-accent-ink"
            >
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-accent"
              />
              {focus}
            </li>
          ))}
        </ul>

        <Link
          to={brand.href}
          className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-accent-ink transition-colors hover:text-accent-strong hover:underline"
        >
          {brand.ctaLabel}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </article>
  );
}

function HowGapaiWorks() {
  return (
    <section
      aria-labelledby="journey-title"
      className="relative overflow-hidden border-y border-primary/15 bg-primary py-20 text-white sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-40 size-[30rem] rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-52 left-1/4 size-[32rem] rounded-full bg-brand-yellow/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center gap-2 text-sm font-extrabold tracking-[0.14em] text-white/65 uppercase">
              <Compass aria-hidden="true" className="size-4" />
              Cara ekosistem bekerja
            </p>
            <h2
              id="journey-title"
              className="mt-4 max-w-4xl text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] sm:text-4xl lg:text-5xl"
            >
              Dari kebutuhan anak menuju pendampingan yang lebih relevan
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:col-span-4">
            Orang tua tidak harus memahami seluruh katalog kelas sebelum memulai
            percakapan.
          </p>
        </div>

        <ol className="mt-12 grid overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] shadow-[var(--shadow-float)] backdrop-blur-sm md:grid-cols-2 lg:grid-cols-4">
          {aboutJourney.map((item, index) => (
            <li
              key={item.step}
              className="group relative border-b border-white/15 p-6 last:border-b-0 md:border-r md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:last:border-r-0 sm:p-7"
            >
              {index < aboutJourney.length - 1 ? (
                <ArrowRight
                  aria-hidden="true"
                  className="absolute -right-3 top-8 z-10 hidden size-6 rounded-full bg-primary p-1 text-white/55 lg:block"
                />
              ) : null}
              <span className="text-sm font-extrabold tracking-[0.14em] text-brand-yellow">
                {item.step}
              </span>
              <h3 className="mt-8 text-xl leading-snug font-extrabold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CommitmentSection() {
  const commitmentIcons = [ShieldCheck, HeartHandshake, UsersRound] as const;

  return (
    <section
      aria-labelledby="commitment-title"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold tracking-[0.14em] text-primary uppercase">
            Komitmen kami
          </p>
          <h2
            id="commitment-title"
            className="mt-4 text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
          >
            Membantu orang tua memilih dengan lebih tenang
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
            Kepercayaan dibangun melalui informasi yang jelas, pilihan yang
            relevan, dan ruang untuk mempertimbangkan keputusan.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {aboutCommitments.map((commitment, index) => {
            const Icon = commitmentIcons[index] ?? CheckCircle2;
            return (
              <article
                key={commitment.title}
                className="group rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-raised)] sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-surface-selected text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon aria-hidden="true" className="size-5.5" />
                  </span>
                  <span className="text-xs font-extrabold tracking-widest text-primary/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-extrabold text-ink sm:text-2xl">
                  {commitment.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-secondary">
                  {commitment.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutFinalCta() {
  return (
    <section className="pb-20 sm:pb-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-deep px-6 py-10 text-white shadow-[var(--shadow-float)] sm:rounded-[2.6rem] sm:px-10 sm:py-14 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-28 -z-10 size-80 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 right-24 -z-10 size-72 rounded-full bg-primary/30 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute left-[38%] top-0 -z-10 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-brand-yellow/25 to-transparent"
          />

          <div className="relative grid gap-9 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-sm font-extrabold tracking-[0.14em] text-brand-yellow uppercase">
                {aboutClosing.eyebrow}
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                {aboutClosing.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                {aboutClosing.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <ConsultationCta
                channel="gapai"
                label="Konsultasi dengan Gapai"
                variant="inverse"
                size="lg"
                className="w-full lg:w-auto"
              />
              <Link
                to="/program"
                className={cn(
                  actionVariants({ variant: "outlineInverse", size: "md" }),
                  "w-full lg:w-auto",
                )}
              >
                Lihat seluruh program
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}