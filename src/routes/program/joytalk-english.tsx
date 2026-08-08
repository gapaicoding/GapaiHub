import { createFileRoute } from "@tanstack/react-router";

import { JoytalkDetailPage } from "@/components/brand-pages/joytalk-detail-page";
import { buildSeoHead } from "@/config/seo";

const title =
  "Joytalk English | Bahasa Inggris & Public Speaking Anak | Gapai";

const description =
  "Temukan English for Toddler, General English, dan English Public Speaking Joytalk untuk usia 3–17 tahun dalam format private maupun semiprivate.";

export const Route = createFileRoute("/program/joytalk-english")({
  head: () =>
    buildSeoHead({
      title,
      description,
      path: "/program/joytalk-english",
    }),
  component: JoytalkEnglishPage,
});

function JoytalkEnglishPage() {
  return <JoytalkDetailPage />;
}