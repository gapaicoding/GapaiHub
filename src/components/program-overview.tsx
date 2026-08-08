import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Compass, Layers3 } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { actionVariants } from "@/components/ui/action";
import { brands } from "@/content/brands";
import { consultationSteps } from "@/content/site";

export function ProgramOverview() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative border-b border-border bg-surface-subtle">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-52 right-[-12%] size-[38rem] rounded-full bg-[radial-gradient(circle_at_center,var(--gapai-blue-100),transparent_70%)]"
        />

        <div className="relative mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Kembali ke beranda
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Program & Brand
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-balance-heading sm:text-5xl lg:text-6xl">
              Temukan program berdasarkan kebutuhan anak
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-ink-secondary sm:text-xl">
              Gapai Mentorship menaungi empat brand dengan bidang keahlian berbeda. Mulailah dari
              kemampuan yang ingin dikembangkan, lalu pilih pendampingan yang paling relevan.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#pilih-program"
                className={actionVariants({
                  variant: "primary",
                  size: "lg",
                })}
              >
                <Compass aria-hidden="true" className="size-5" />
                Bandingkan program
              </a>

              <ConsultationCta
                channel="gapai"
                topic="pemilihan program untuk anak saya"
                label="Konsultasi via Instagram"
                variant="secondary"
                size="lg"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand) => (
              <div
                key={brand.id}
                data-accent={brand.id}
                className="rounded-3xl border border-border bg-surface/90 p-5 shadow-[var(--shadow-soft)]"
              >
                <p className="text-sm font-bold text-accent-ink">{brand.verb}</p>

                <p className="mt-1 font-extrabold text-ink">{brand.name}</p>

                <p className="mt-1 text-xs leading-relaxed text-ink-secondary">{brand.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pilih-program"
        aria-labelledby="program-heading"
        className="scroll-mt-24 py-16 sm:py-24"
      >
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-primary">
              <Layers3 aria-hidden="true" className="size-5" />

              <p className="text-sm font-semibold tracking-wide uppercase">
                Empat bidang spesialis
              </p>
            </div>

            <h2
              id="program-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-balance-heading sm:text-4xl"
            >
              Satu kebutuhan, satu brand yang lebih fokus
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
              Setiap brand memiliki wilayah pendampingan yang berbeda. Pelajari fokusnya, lihat
              kebutuhan yang sesuai, lalu lanjutkan ke halaman program atau hubungi tim brand secara
              langsung.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {brands.map((brand) => (
              <article
                key={brand.id}
                data-accent={brand.id}
                className="group flex min-w-0 flex-col rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-all duration-200 ease-[var(--ease-gapai)] hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-raised)] sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">
                      {brand.verb}
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                      {brand.name}
                    </h3>
                  </div>

                  <span className="rounded-full bg-accent-soft px-3 py-1.5 text-xs font-bold text-accent-ink">
                    {brand.role}
                  </span>
                </div>

                <p className="mt-5 leading-relaxed text-ink-secondary">{brand.positioning}</p>

                <div className="mt-6 rounded-2xl bg-surface-subtle p-4">
                  <p className="text-xs font-bold tracking-wide text-ink-secondary uppercase">
                    Cocok untuk
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-ink">{brand.needScope}</p>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-bold tracking-wide text-ink uppercase">
                    Kompetensi utama
                  </h4>

                  <ul className="mt-3 flex flex-col gap-2.5">
                    {brand.competencies.map((competency) => (
                      <li key={competency} className="flex items-start gap-2.5 text-sm text-ink">
                        <span
                          aria-hidden="true"
                          className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-ink"
                        >
                          <Check className="size-3.5" />
                        </span>

                        <span>{competency}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row sm:flex-wrap">
                  <Link
                    to={brand.href}
                    className={actionVariants({
                      variant: "primary",
                      size: "md",
                    })}
                  >
                    {brand.ctaLabel}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>

                  <ConsultationCta
                    channel={brand.contactChannel}
                    topic={`program ${brand.name}`}
                    variant="secondary"
                    size="md"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="cara-memilih-heading"
        className="border-y border-border bg-surface-subtle py-16 sm:py-24"
      >
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Cara memilih
            </p>

            <h2
              id="cara-memilih-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-balance-heading sm:text-4xl"
            >
              Tidak harus menentukan semuanya sendiri
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
              Jika kebutuhan anak belum mudah dipetakan, gunakan tiga langkah berikut untuk memulai.
            </p>
          </div>

          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {consultationSteps.map((item) => (
              <li
                key={item.step}
                className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-7"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-primary text-sm font-extrabold text-primary-foreground">
                  {item.step}
                </span>

                <h3 className="mt-5 text-lg font-extrabold text-ink">{item.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.body}</p>
              </li>
            ))}
          </ol>
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
                Masih belum yakin?
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance-heading sm:text-4xl">
                Ceritakan kebutuhan anak kepada kami
              </h2>

              <p className="mt-4 max-w-2xl leading-relaxed text-primary-foreground/80">
                Sampaikan usia anak, kondisi saat ini, dan kemampuan yang ingin dikembangkan. Kami
                bantu mengarahkan Anda ke brand yang paling relevan.
              </p>

              <div className="mt-8">
                <ConsultationCta
                  channel="gapai"
                  topic="pemilihan program untuk anak saya"
                  label="Konsultasi via Instagram"
                  variant="secondary"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
