import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/contact/contact-page";
import { buildSeoHead } from "@/config/seo";

const title = "Kontak & Konsultasi | Gapai Mentorship";

const description =
  "Ceritakan usia anak, kondisi saat ini, dan kemampuan yang ingin dikembangkan. Gapai Mentorship membantu mengarahkan Anda ke brand dan program yang relevan.";

export const Route = createFileRoute("/kontak")({
  head: () =>
    buildSeoHead({
      title,
      description,
      path: "/kontak",
    }),
  component: ContactPage,
});