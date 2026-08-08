import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, Check, ChevronDown, CircleHelp, Info, Sparkles } from "lucide-react";
import { BriliaDetailPage } from "@/components/brand-pages/brilia-detail-page";
import { ConsultationCta } from "@/components/consultation-cta";
import { actionVariants } from "@/components/ui/action";
import { brandById, type BrandId } from "@/content/brands";
import { programDetails } from "@/content/program-details";
import { getContactChannel } from "@/config/whatsapp";

type Props = {
  brandId: BrandId;
};

export function BrandDetailPage({ brandId }: Props) {
  if (brandId === "brilia") {
    return <BriliaDetailPage />;
  }

  return <DefaultBrandDetailPage brandId={brandId} />;
}

function DefaultBrandDetailPage({ brandId }: Props) {
  const brand = brandById[brandId];
  const detail = programDetails[brandId];
  const contact = getContactChannel(brand.contactChannel);

  return (
    <article className="relative overflow-hidden" data-accent={brand.id}>
      <section className="relative border-b border-border bg-surface-subtle">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-52 right-[-12%] size-[38rem] rounded-full bg-[radial-gradient(circle_at_center,var(--accent-soft),transparent_70%)]"
        />

        <div className="relative mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
          <Link
            to="/program"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Kembali ke semua program
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">
                {detail.eyebrow} bersama {brand.name}
              </p>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-balance-heading sm:text-5xl lg:text-6xl">
                {detail.heroTitle}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-secondary sm:text-xl">
                {detail.summary}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ConsultationCta
                  channel={brand.contactChannel}
                  topic={`program ${brand.name}`}
                  variant="primary"
                  size="lg"
                />

                <a
                  href="#fokus-program"
                  className={actionVariants({
                    variant: "secondary",
                    size: "lg",
                  })}
                >
                  Lihat fokus program
                  <ArrowDown aria-hidden="true" className="size-4" />
                </a>
              </div>

              {contact.notice ? (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-secondary">
                  {contact.notice}
                </p>
              ) : null}
            </div>

            <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-raised)] sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-accent-soft text-accent-ink">
                  <Sparkles aria-hidden="true" className="size-5" />
                </span>

                <div>
                  <p className="text-xs font-bold tracking-wide text-ink-secondary uppercase">
                    Fokus utama
                  </p>

                  <p className="font-extrabold text-ink">{brand.role}</p>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-ink-secondary">{brand.positioning}</p>

              <div className="mt-6 rounded-2xl bg-accent-soft p-4">
                <p className="text-xs font-bold tracking-wide text-accent-ink uppercase">
                  Lingkup kebutuhan
                </p>

                <p className="mt-2 text-sm leading-relaxed text-accent-ink">{brand.needScope}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="cocok-untuk-heading" className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Kenali kebutuhannya
            </p>

            <h2
              id="cocok-untuk-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-balance-heading sm:text-4xl"
            >
              Program ini dapat dipertimbangkan jika...
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
              Gunakan beberapa kondisi berikut sebagai panduan awal. Penentuan program tetap dapat
              dibicarakan bersama tim {brand.name}.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {detail.suitableFor.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-soft)]"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-ink"
                >
                  <Check className="size-5" />
                </span>

                <span className="text-sm leading-relaxed text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="fokus-program"
        aria-labelledby="fokus-heading"
        className="scroll-mt-24 border-y border-border bg-surface-subtle py-16 sm:py-24"
      >
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">
              Fokus program
            </p>

            <h2
              id="fokus-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-balance-heading sm:text-4xl"
            >
              Kemampuan yang dikembangkan
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
              Setiap fokus membantu orang tua memahami arah pendampingan tanpa harus menebak program
              yang paling sesuai.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {detail.focusAreas.map((focus, index) => (
              <article
                key={focus.title}
                className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-7"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-accent-soft text-sm font-extrabold text-accent-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-lg font-extrabold text-ink">{focus.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {focus.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="sebelum-konsultasi-heading" className="py-16 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Sebelum konsultasi
            </p>

            <h2
              id="sebelum-konsultasi-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-balance-heading sm:text-4xl"
            >
              Informasi yang membantu tim memahami kebutuhan anak
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
              Tidak perlu menyiapkan penjelasan yang sempurna. Mulailah dari kondisi anak yang
              paling mudah Anda ceritakan.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-raised)] sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent-ink">
                <Info aria-hidden="true" className="size-5" />
              </span>

              <div>
                <h3 className="text-lg font-extrabold text-ink">Ceritakan kebutuhan anak</h3>

                <p className="mt-2 leading-relaxed text-ink-secondary">
                  {detail.consultationPrompt}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-surface-subtle p-4">
              <p className="text-sm leading-relaxed text-ink-secondary">
                Informasi mengenai jadwal, level, format kelas, lokasi, ketersediaan, dan biaya
                perlu dikonfirmasi langsung melalui kanal resmi {brand.name}.
              </p>
            </div>

            <div className="mt-6">
              <ConsultationCta
                channel={brand.contactChannel}
                topic={`program ${brand.name}`}
                variant="primary"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="faq-program-heading"
        className="border-y border-border bg-surface-subtle py-16 sm:py-24"
      >
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <div className="text-center">
            <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent-ink">
              <CircleHelp aria-hidden="true" className="size-6" />
            </div>

            <h2
              id="faq-program-heading"
              className="mt-5 text-3xl font-extrabold tracking-tight text-balance-heading sm:text-4xl"
            >
              Pertanyaan tentang {brand.name}
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            {detail.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-border bg-surface px-5 py-4 shadow-[var(--shadow-soft)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink">
                  <span>{faq.question}</span>

                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 shrink-0 text-ink-secondary transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-ink-secondary">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-10 text-primary-foreground shadow-[var(--shadow-raised)] sm:px-10 sm:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -bottom-28 size-80 rounded-full bg-white/10"
            />

            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold tracking-wide text-primary-foreground/80 uppercase">
                Langkah berikutnya
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance-heading sm:text-4xl">
                Diskusikan kebutuhan anak bersama {brand.name}
              </h2>

              <p className="mt-4 max-w-2xl leading-relaxed text-primary-foreground/80">
                Sampaikan kondisi anak dan kemampuan yang ingin dikembangkan. Tim akan membantu
                memberikan informasi program yang tersedia dan relevan.
              </p>

              <div className="mt-8">
                <ConsultationCta
                  channel={brand.contactChannel}
                  topic={`program ${brand.name}`}
                  variant="secondary"
                  size="lg"
                />
              </div>

              {contact.notice ? (
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
                  {contact.notice}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}