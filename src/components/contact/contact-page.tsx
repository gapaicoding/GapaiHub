import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  AtSign,
  Check,
  ChevronDown,
  CircleHelp,
  Compass,
  MessageCircle,
  MessagesSquare,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";

import { ConsultationCta } from "@/components/consultation-cta";
import { actionVariants } from "@/components/ui/action";
import { getContactChannel } from "@/config/whatsapp";
import {
  brandContactSection,
  contactClosing,
  contactFaqs,
  contactHero,
  contactJourney,
  contactPaths,
  contactPreparation,
  contactTrustPoints,
} from "@/content/contact";
import { brands, type Brand } from "@/content/brands";
import { cn } from "@/lib/utils";

const preparationIcons = [UserRound, MessagesSquare, Target] as const;

export function ContactPage() {
  return (
    <article className="relative overflow-hidden bg-background">
      <ContactHero />
      <ContactPaths />
      <BrandChannels />
      <ConsultationPreparation />
      <ConsultationJourney />
      <ContactFaq />
      <ContactFinalCta />
    </article>
  );
}

function ContactHero() {
  return (
    <section
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden border-b border-border pb-18 pt-10 sm:pb-22 sm:pt-12 lg:pb-24"
    >
      <ContactHeroBackground />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <Link
          to="/"
          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-primary/15 bg-surface/85 px-4 text-sm font-bold text-primary shadow-[var(--shadow-soft)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:bg-surface"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Kembali ke beranda
        </Link>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14 xl:gap-18">
          <div className="animate-rise min-w-0">
            <p className="inline-flex items-center gap-3 text-sm font-extrabold tracking-[0.09em] text-primary uppercase">
              <span className="grid size-9 place-items-center rounded-2xl border border-primary/15 bg-surface shadow-[var(--shadow-soft)]">
                <MessageCircle aria-hidden="true" className="size-4" />
              </span>
              {contactHero.eyebrow}
            </p>

            <h1
              id="contact-title"
              className="mt-6 max-w-4xl text-4xl leading-[1.04] font-extrabold tracking-[-0.052em] text-balance-heading text-ink sm:text-5xl lg:text-[3.7rem] xl:text-[4.1rem]"
            >
              Ceritakan kebutuhan anak.
              <span className="block text-primary">
                Kami bantu menemukan arahnya.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-secondary sm:text-xl">
              {contactHero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ConsultationCta
                channel="gapai"
                label="Mulai konsultasi dengan Gapai"
                variant="primary"
                size="lg"
              />

              <a
                href="#kanal-brand"
                className={actionVariants({ variant: "secondary", size: "lg" })}
              >
                Saya sudah tahu brandnya
                <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
              {contactTrustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm font-bold text-ink-secondary"
                >
                  <span className="grid size-5 place-items-center rounded-full bg-surface-selected text-primary">
                    <Check aria-hidden="true" className="size-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-rise relative min-w-0 [animation-delay:120ms]">
            <ContactDecisionVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactHeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-brand-lavender/45" />
      <div className="animate-pulse-soft absolute -left-40 top-10 size-[30rem] rounded-full bg-brand-sky/14 blur-3xl" />
      <div className="animate-pulse-soft absolute -right-40 -top-40 size-[34rem] rounded-full bg-primary/13 blur-3xl [animation-delay:900ms]" />
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

function ContactDecisionVisual() {
  const gapaiContact = getContactChannel("gapai");

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[3.5rem] bg-gradient-to-br from-primary/12 via-brand-lavender/35 to-brand-yellow/18 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-primary/12 bg-surface/90 p-5 shadow-[var(--shadow-float)] backdrop-blur-md sm:rounded-[2.6rem] sm:p-6">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
          <img
            src="/logo-gapai-wordmark.png"
            alt="Gapai Mentorship"
            width="800"
            height="474"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-16 w-auto object-contain sm:h-20"
          />

          <span className="inline-flex items-center gap-2 rounded-full bg-surface-selected px-3 py-2 text-xs font-extrabold text-primary">
            <AtSign aria-hidden="true" className="size-3.5" />
            {gapaiContact.type === "instagram"
              ? "Instagram resmi"
              : "Kanal resmi"}
          </span>
        </div>

        <div className="py-6">
          <p className="text-xs font-extrabold tracking-[0.13em] text-primary uppercase">
            Mulai di sini
          </p>
          <h2 className="mt-2 text-2xl leading-tight font-extrabold tracking-tight text-ink sm:text-3xl">
            Anda berada di tahap yang mana?
          </h2>
        </div>

        <div className="grid gap-3">
          <a
            href={gapaiContact.type === "instagram" ? gapaiContact.url : "#"}
            target={gapaiContact.type === "instagram" ? "_blank" : undefined}
            rel={
              gapaiContact.type === "instagram"
                ? "noopener noreferrer"
                : undefined
            }
            className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl bg-primary p-4 text-white shadow-[var(--shadow-raised)] transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            <span className="grid size-11 place-items-center rounded-2xl bg-white/12">
              <Compass aria-hidden="true" className="size-5" />
            </span>
            <span>
              <span className="block font-extrabold">
                Saya belum tahu programnya
              </span>
              <span className="mt-1 block text-xs leading-relaxed text-white/65">
                Mulai dengan Gapai Mentorship
              </span>
            </span>
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="#kanal-brand"
            className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-surface-subtle"
          >
            <span className="grid size-11 place-items-center rounded-2xl bg-surface-selected text-primary">
              <Target aria-hidden="true" className="size-5" />
            </span>
            <span>
              <span className="block font-extrabold text-ink">
                Saya sudah tahu brandnya
              </span>
              <span className="mt-1 block text-xs leading-relaxed text-ink-secondary">
                Pilih kanal brand secara langsung
              </span>
            </span>
            <ArrowDown aria-hidden="true" className="size-4 text-primary" />
          </a>
        </div>

        <p className="mt-5 rounded-2xl bg-surface-subtle px-4 py-3 text-xs leading-relaxed text-ink-secondary">
          {contactHero.supportingStatement}
        </p>
      </div>
    </div>
  );
}

function ContactPaths() {
  const pathIcons = [Compass, Target] as const;

  return (
    <section aria-labelledby="contact-path-title" className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold tracking-[0.14em] text-primary uppercase">
            Dua cara untuk memulai
          </p>
          <h2
            id="contact-path-title"
            className="mt-4 text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
          >
            Pilih jalur yang paling nyaman untuk Anda
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
            Tidak ada jawaban yang salah. Keduanya mengarah ke tim yang dapat
            menjelaskan pilihan berikutnya.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {contactPaths.map((path, index) => {
            const Icon = pathIcons[index] ?? Compass;
            const featured = path.id === "need-guidance";

            return (
              <article
                key={path.id}
                className={cn(
                  "group relative flex min-h-80 flex-col overflow-hidden rounded-[2rem] border p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-raised)] sm:p-8",
                  featured
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-surface text-ink",
                )}
              >
                <div className="flex items-start justify-between gap-5">
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-2xl",
                      featured
                        ? "bg-white/12 text-brand-yellow"
                        : "bg-surface-selected text-primary",
                    )}
                  >
                    <Icon aria-hidden="true" className="size-5.5" />
                  </span>
                  <span
                    className={cn(
                      "text-sm font-extrabold tracking-[0.15em]",
                      featured ? "text-white/35" : "text-primary/35",
                    )}
                  >
                    {path.number}
                  </span>
                </div>

                <p
                  className={cn(
                    "mt-10 text-xs font-extrabold tracking-[0.13em] uppercase",
                    featured ? "text-brand-yellow" : "text-primary",
                  )}
                >
                  {path.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {path.title}
                </h3>
                <p
                  className={cn(
                    "mt-4 leading-relaxed",
                    featured ? "text-white/70" : "text-ink-secondary",
                  )}
                >
                  {path.description}
                </p>

                <p
                  className={cn(
                    "mt-auto border-t pt-6 text-sm font-bold",
                    featured
                      ? "border-white/15 text-white"
                      : "border-border text-ink",
                  )}
                >
                  {path.recommendation}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BrandChannels() {
  return (
    <section
      id="kanal-brand"
      aria-labelledby="brand-channel-title"
      className="scroll-mt-24 border-y border-border bg-surface-subtle py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center gap-2 text-sm font-extrabold tracking-[0.14em] text-primary uppercase">
              <Send aria-hidden="true" className="size-4" />
              {brandContactSection.eyebrow}
            </p>
            <h2
              id="brand-channel-title"
              className="mt-4 max-w-4xl text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
            >
              {brandContactSection.title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg lg:col-span-4">
            {brandContactSection.description}
          </p>
        </div>

        <GapaiFeaturedContact />

        <ul className="mt-6 grid gap-5 md:grid-cols-2">
          {brands.map((brand) => (
            <li key={brand.id} data-accent={brand.id} className="min-w-0">
              <BrandContactCard brand={brand} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function GapaiFeaturedContact() {
  return (
    <article className="relative mt-12 overflow-hidden rounded-[2rem] bg-deep px-6 py-7 text-white shadow-[var(--shadow-float)] sm:px-8 sm:py-9 lg:px-10">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-24 size-64 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-28 right-1/4 size-64 rounded-full bg-primary/35 blur-2xl"
      />

      <div className="relative grid gap-7 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <div className="inline-flex w-fit rounded-2xl bg-white p-3">
          <img
            src="/logo-gapai-wordmark.png"
            alt="Gapai Mentorship"
            width="800"
            height="474"
            loading="lazy"
            decoding="async"
            className="h-16 w-auto object-contain"
          />
        </div>

        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xl font-extrabold sm:text-2xl">
              {brandContactSection.fallbackTitle}
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white/75">
              <AtSign aria-hidden="true" className="size-3.5" />
              Instagram
            </span>
          </div>
          <p className="mt-3 leading-relaxed text-white/65">
            {brandContactSection.fallbackDescription}
          </p>
        </div>

        <ConsultationCta
          channel="gapai"
          label="Hubungi Gapai Mentorship"
          variant="inverse"
          size="lg"
          className="w-full shrink-0 lg:w-auto"
        />
      </div>
    </article>
  );
}

function BrandContactCard({ brand }: { brand: Brand }) {
  const contact = getContactChannel(brand.contactChannel);
  const ChannelIcon = contact.type === "whatsapp" ? MessageCircle : AtSign;

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[var(--shadow-raised)]">
      <div className="relative flex min-h-48 items-center justify-center overflow-hidden border-b border-accent/12 bg-gradient-to-br from-surface via-accent-soft/70 to-surface p-6">
        <div
          aria-hidden="true"
          className="absolute -right-12 -top-16 size-44 rounded-full border border-accent/15"
        />
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-surface/85 px-3 py-1.5 text-xs font-extrabold text-accent-ink backdrop-blur-sm">
          <ChannelIcon aria-hidden="true" className="size-3.5" />
          {contact.type === "whatsapp" ? "WhatsApp" : "Instagram"}
        </span>
        <img
          src={brand.logo.src}
          alt={brand.logo.alt}
          width={brand.logo.width}
          height={brand.logo.height}
          loading="lazy"
          decoding="async"
          className={cn(
            "relative object-contain transition-transform duration-500 group-hover:scale-105",
            brand.logo.layout === "badge" && "size-32",
            brand.logo.layout === "landscape" && "h-32 w-[75%]",
            brand.logo.layout === "wide" && "h-24 w-[88%]",
          )}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-extrabold tracking-[0.13em] text-accent-ink uppercase">
          {brand.verb} · {brand.role}
        </p>
        <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
          {brand.name}
        </h3>
        <p className="mt-3 leading-relaxed text-ink-secondary">{brand.focus}</p>

        {contact.notice ? (
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-accent/15 bg-accent-soft/65 p-4">
            <ShieldCheck
              aria-hidden="true"
              className="mt-0.5 size-4.5 shrink-0 text-accent-ink"
            />
            <p className="text-xs leading-relaxed text-accent-ink">
              {contact.notice}
            </p>
          </div>
        ) : (
          <div className="mt-5 flex items-center gap-3 rounded-2xl bg-accent-soft/55 px-4 py-3 text-sm font-bold text-accent-ink">
            <ChannelIcon aria-hidden="true" className="size-4.5 shrink-0" />
            Konsultasi melalui kanal resmi {brand.name}
          </div>
        )}

        <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row sm:flex-wrap">
          <ConsultationCta
            channel={brand.contactChannel}
            topic={`pemilihan program ${brand.name}`}
            label={contact.ctaLabel}
            variant="brand"
            size="md"
          />
          <Link
            to={brand.href}
            className={cn(
              actionVariants({ variant: "brandOutline", size: "md" }),
              "group/link",
            )}
          >
            Lihat program
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover/link:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

function ConsultationPreparation() {
  return (
    <section
      aria-labelledby="preparation-title"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-extrabold tracking-[0.14em] text-primary uppercase">
              <MessagesSquare aria-hidden="true" className="size-4" />
              Sebelum menghubungi
            </p>
            <h2
              id="preparation-title"
              className="mt-4 max-w-4xl text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl"
            >
              Tiga informasi sederhana sudah cukup untuk memulai
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg lg:justify-self-end">
            Anda tidak perlu menulis penjelasan panjang. Gunakan panduan berikut
            agar tim lebih mudah memahami konteks anak.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {contactPreparation.map((item, index) => {
            const Icon = preparationIcons[index] ?? UserRound;
            return (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-raised)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="grid size-12 place-items-center rounded-2xl bg-surface-selected text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon aria-hidden="true" className="size-5.5" />
                  </span>
                  <span className="text-xs font-extrabold tracking-widest text-primary/35">
                    {item.number}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-extrabold text-ink sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-secondary">
                  {item.description}
                </p>
                <p className="mt-6 rounded-2xl bg-surface-subtle px-4 py-3 text-xs leading-relaxed font-semibold text-primary">
                  {item.example}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ConsultationJourney() {
  return (
    <section
      aria-labelledby="contact-journey-title"
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
              <Sparkles aria-hidden="true" className="size-4" />
              Setelah Anda menghubungi
            </p>
            <h2
              id="contact-journey-title"
              className="mt-4 max-w-4xl text-3xl leading-[1.1] font-extrabold tracking-[-0.035em] sm:text-4xl lg:text-5xl"
            >
              Percakapan yang membantu memperjelas pilihan
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:col-span-4">
            Konsultasi adalah ruang untuk memahami pilihan, bukan kewajiban
            untuk langsung mendaftar.
          </p>
        </div>

        <ol className="mt-12 grid overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] shadow-[var(--shadow-float)] backdrop-blur-sm md:grid-cols-2 lg:grid-cols-4">
          {contactJourney.map((item, index) => (
            <li
              key={item.step}
              className="relative border-b border-white/15 p-6 last:border-b-0 md:border-r md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:last:border-r-0 sm:p-7"
            >
              {index < contactJourney.length - 1 ? (
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

function ContactFaq() {
  return (
    <section aria-labelledby="contact-faq-title" className="py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <span className="grid size-12 place-items-center rounded-2xl bg-surface-selected text-primary">
            <CircleHelp aria-hidden="true" className="size-6" />
          </span>
          <p className="mt-6 text-sm font-extrabold tracking-[0.14em] text-primary uppercase">
            Pertanyaan umum
          </p>
          <h2
            id="contact-faq-title"
            className="mt-3 text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Sebelum memulai konsultasi
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-ink-secondary">
            Jawaban singkat untuk membantu Anda memilih kanal dan memulai
            percakapan.
          </p>
        </div>

        <div className="border-t border-border lg:col-span-8">
          {contactFaqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group border-b border-border"
            >
              <summary className="grid cursor-pointer list-none grid-cols-[auto_1fr_auto] items-start gap-4 py-6 [&::-webkit-details-marker]:hidden">
                <span className="pt-0.5 text-xs font-extrabold tracking-widest text-primary/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-extrabold text-ink sm:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
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

function ContactFinalCta() {
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

          <div className="relative grid gap-9 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-sm font-extrabold tracking-[0.14em] text-brand-yellow uppercase">
                {contactClosing.eyebrow}
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                {contactClosing.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                {contactClosing.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <ConsultationCta
                channel="gapai"
                label="Hubungi Gapai Mentorship"
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