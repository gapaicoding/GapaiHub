import { createFileRoute } from "@tanstack/react-router";

import { BrandDetailPage } from "@/components/brand-detail-page";
import { buildSeoHead } from "@/config/seo";

const title = "Brilia | Calistung, Matematika & Bimbel Anak | Gapai";

const description =
  "Temukan program Brilia untuk Calistung, Matematika, Bimbel Mata Pelajaran, serta Bahasa Arab dan Al-Qur'an dengan pendampingan belajar sesuai kebutuhan anak.";

export const Route = createFileRoute("/program/brilia")({
  head: () =>
    buildSeoHead({
      title,
      description,
      path: "/program/brilia",
    }),
  component: BriliaPage,
});

function BriliaPage() {
  return <BrandDetailPage brandId="brilia" />;
}