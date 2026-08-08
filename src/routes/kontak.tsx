import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Instagram, MessageCircle } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { getContactChannel, type ContactChannel } from "@/config/whatsapp";
import { buildSeoHead } from "@/config/seo";

const title = "Kontak | Gapai Mentorship";

const description =
  "Ceritakan usia anak, kondisi saat ini, dan kemampuan yang ingin dikembangkan. Kami bantu mengarahkan ke brand yang sesuai.";

type ContactOption = {
  channel: ContactChannel;
  description: string;
  topic: string;
};

const contactOptions: ContactOption[] = [
  {
    channel: "gapai",
    description:
      "Belum yakin harus memilih program yang mana? Hubungi Gapai Mentorship melalui Instagram untuk mendapatkan arahan awal.",
    topic: "kebutuhan anak saya",
  },
  {
    channel: "brilia",
    description:
      "Untuk kebutuhan calistung, fondasi akademik, dan pendampingan pelajaran sekolah dasar.",
    topic: "program Brilia",
  },
  {
    channel: "joytalk",
    description:
      "Untuk pengembangan kemampuan dan keberanian anak berkomunikasi dalam bahasa Inggris.",
    topic: "program Joytalk English",
  },
  {
    channel: "kidspro",
    description:
      "Untuk kelas desain, coding, animasi, video, dan keterampilan membuat karya digital.",
    topic: "program Kidspro ID",
  },
  {
    channel: "els",
    description:
      "Untuk pengembangan public speaking, kepercayaan diri, life skill, dan kepemimpinan.",
    topic: "program ELS School",
  },
];

export const Route = createFileRoute("/kontak")({
  head: () =>
    buildSeoHead({
      title,
      description,
      path: "/kontak",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[32rem] rounded-full bg-[radial-gradient(circle_at_center,var(--gapai-blue-100),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-[1100px] px-5 py-20 sm:px-8 sm:py-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Kembali ke beranda
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Kontak</p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-balance-heading sm:text-5xl">
            Konsultasikan kebutuhan anak
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-ink-secondary">{description}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {contactOptions.map((option, index) => {
            const contact = getContactChannel(option.channel);
            const isWhatsApp = contact.type === "whatsapp";

            return (
              <article
                key={option.channel}
                data-accent={option.channel}
                className={
                  index === 0
                    ? "flex flex-col rounded-[2rem] border border-primary/30 bg-surface p-6 shadow-[var(--shadow-raised)] md:col-span-2 sm:p-8"
                    : "flex flex-col rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-7"
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent-ink"
                  >
                    {isWhatsApp ? (
                      <MessageCircle className="size-6" />
                    ) : (
                      <Instagram className="size-6" />
                    )}
                  </span>

                  <span className="rounded-full bg-surface-subtle px-3 py-1 text-xs font-bold text-ink-secondary">
                    {isWhatsApp ? "WhatsApp" : "Instagram"}
                  </span>
                </div>

                <h2 className="mt-5 text-xl font-extrabold tracking-tight text-ink">
                  {contact.name}
                </h2>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">
                  {option.description}
                </p>

                {contact.notice ? (
                  <p className="mt-4 rounded-2xl border border-border bg-surface-subtle p-3 text-xs leading-relaxed text-ink-secondary">
                    {contact.notice}
                  </p>
                ) : null}

                <div className="mt-6">
                  <ConsultationCta
                    channel={option.channel}
                    topic={option.topic}
                    size="md"
                    variant={index === 0 ? "primary" : "secondary"}
                  />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-surface-subtle p-5 sm:p-6">
          <p className="text-sm leading-relaxed text-ink-secondary">
            Agar konsultasi lebih mudah, sertakan usia anak, kemampuan yang ingin dikembangkan,
            kondisi atau kendala saat ini, dan waktu belajar yang diharapkan.
          </p>
        </div>
      </div>
    </div>
  );
}
