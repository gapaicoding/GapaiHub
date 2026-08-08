import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import type { ContactChannel } from "@/config/whatsapp";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  topic?: string;
  channel?: ContactChannel;
  showConsultation?: boolean;
};

/**
 * Template halaman yang strukturnya sudah ditetapkan SITEMAP.md tetapi
 * kontennya belum disetujui. Halaman tetap jujur: tidak ada konten karangan.
 */
export function PageShell({
  eyebrow,
  title,
  description,
  topic,
  channel = "gapai",
  showConsultation = true,
}: Props) {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[32rem] rounded-full bg-[radial-gradient(circle_at_center,var(--gapai-blue-100),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Kembali ke beranda
        </Link>

        <p className="mt-8 text-sm font-semibold tracking-wide text-accent-ink uppercase">
          {eyebrow}
        </p>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-balance-heading sm:text-4xl">
          {title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-ink-secondary">{description}</p>

        <p className="mt-8 rounded-2xl border border-border bg-surface p-5 text-sm leading-relaxed text-ink-secondary shadow-[var(--shadow-soft)]">
          Konten halaman ini sedang disiapkan bersama tim brand agar seluruh informasi dapat
          diverifikasi lebih dulu.
          {showConsultation
            ? " Sementara itu, Anda dapat menyampaikan kebutuhan anak melalui konsultasi."
            : null}
        </p>

        {showConsultation ? (
          <div className="mt-8">
            <ConsultationCta channel={channel} {...(topic ? { topic } : {})} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
