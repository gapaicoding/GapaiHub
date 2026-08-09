import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/about/about-page";
import { buildSeoHead } from "@/config/seo";

const title = "Tentang Gapai Mentorship | Ekosistem Pendidikan Anak";

const description =
  "Kenali PT Gapai Cita Rahardjo dan Gapai Mentorship, ekosistem pendidikan yang menaungi Brilia, Joytalk English, Kidspro ID, dan ELS School.";

export const Route = createFileRoute("/tentang-kami")({
  head: () =>
    buildSeoHead({
      title,
      description,
      path: "/tentang-kami",
    }),
  component: AboutPage,
});