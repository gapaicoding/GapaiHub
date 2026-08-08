import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Instagram, MessageCircle, Sparkles } from "lucide-react";

import { buildContactHref, GAPAI_INSTAGRAM_URL, getContactChannel } from "@/config/whatsapp";
import type { ContactChannel } from "@/config/whatsapp";
import { footerNav, site } from "@/content/site";

const columns = [
  {
    title: "Jelajahi",
    links: footerNav.jelajahi,
  },
  {
    title: "Brand",
    links: footerNav.brand,
  },
  {
    title: "Bantuan & Legal",
    links: footerNav.bantuan,
  },
];

const brandContactChannels: Array<Exclude<ContactChannel, "gapai">> = [
  "brilia",
  "joytalk",
  "kidspro",
  "els",
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#1b1230] text-white">
      <FooterBackground />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8 sm:py-18">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.065] px-6 py-7 shadow-2xl backdrop-blur-sm sm:px-8 sm:py-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="relative max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-[#f8d542] uppercase">
              <Sparkles aria-hidden="true" className="size-4" />
              Mulai dari kebutuhan anak
            </p>

            <h2 className="mt-3 text-2xl leading-tight font-extrabold tracking-tight text-white sm:text-3xl">
              Belum yakin program mana yang paling sesuai?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              Ceritakan usia anak, kondisi saat ini, dan kemampuan yang ingin dikembangkan. Kami
              bantu mengarahkan pilihan awalnya.
            </p>
          </div>

          <div className="relative mt-6 shrink-0 lg:mt-0">
            <Link
              to="/kontak"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f8d542] px-6 text-sm font-extrabold text-[#1b1230] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffe56b] hover:shadow-lg"
            >
              Buka pusat kontak
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div className="min-w-0">
            <Link
              to="/"
              aria-label="Gapai Mentorship, kembali ke beranda"
              className="inline-flex rounded-3xl bg-white px-4 py-3 outline-none transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#f8d542] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1b1230]"
            >
              <img
                src="/logo-gapai-wordmark.png"
                alt=""
                width={800}
                height={474}
                loading="lazy"
                decoding="async"
                className="h-16 w-auto sm:h-18"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {site.tagline} Gapai Mentorship membantu orang tua menemukan program berdasarkan
              kebutuhan perkembangan anak.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
              <a
                href={GAPAI_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka Instagram resmi Gapai Mentorship"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-bold text-[#1b1230] transition-transform hover:-translate-y-0.5"
              >
                <Instagram aria-hidden="true" className="size-4" />
                Instagram Gapai
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>

              <Link
                to="/kontak"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-4 text-sm font-bold text-white transition-colors hover:border-white/40 hover:bg-white/10"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                Pusat kontak
              </Link>
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="min-w-0">
              <h2 className="text-sm font-bold tracking-[0.12em] text-[#f8d542] uppercase">
                {column.title}
              </h2>

              <ul className="mt-4 flex flex-col gap-1">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.href}-${link.label}`}>
                    <Link
                      to={link.href}
                      className="inline-flex min-h-9 items-center text-sm text-white/65 transition-colors hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-sm font-bold tracking-[0.12em] text-[#f8d542] uppercase">
                Kontak langsung program
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Hubungi tim brand sesuai kebutuhan yang ingin dikonsultasikan.
              </p>
            </div>

            <p className="text-xs text-white/40">
              WhatsApp akan terbuka dengan konteks konsultasi otomatis.
            </p>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {brandContactChannels.map((channel) => {
              const contact = getContactChannel(channel);
              const isInstagram = contact.type === "instagram";

              return (
                <li key={channel} className="min-w-0">
                  <a
                    href={buildContactHref(channel, {
                      topic: `program ${contact.name}`,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={contact.ctaLabel}
                    title={contact.notice}
                    className="group flex h-full min-h-20 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.085]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-[#f8d542]">
                      {isInstagram ? (
                        <Instagram aria-hidden="true" className="size-4" />
                      ) : (
                        <MessageCircle aria-hidden="true" className="size-4" />
                      )}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-bold text-white">
                        {contact.name}
                      </span>

                      <span className="mt-0.5 block text-xs text-white/50">
                        {isInstagram ? "Instagram Gapai sementara" : "WhatsApp resmi"}
                      </span>
                    </span>

                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-white/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 text-sm text-white/45 sm:grid-cols-[1fr_auto] sm:items-center">
          <p>© {new Date().getFullYear()} Gapai Mentorship. Seluruh hak cipta dilindungi.</p>

          <p>Belajar · Berkomunikasi · Berkarya · Bertumbuh</p>
        </div>
      </div>
    </footer>
  );
}

function FooterBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -left-36 -top-32 size-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(248,213,66,0.12),transparent_70%)]" />

      <div className="absolute -bottom-48 -right-40 size-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(111,76,255,0.14),transparent_70%)]" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle at center, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>
  );
}
