import { createFileRoute } from "@tanstack/react-router";

import { ElsDetailPage } from "@/components/brand-pages/els-detail-page";
import { buildSeoHead } from "@/config/seo";

const title =
  "ELS School | Kelas Public Speaking Anak | Gapai Mentorship";

const description =
  "Program public speaking untuk anak usia 7–16 tahun dengan pilihan kelas private dan semi-private untuk melatih komunikasi serta kepercayaan diri.";

export const Route = createFileRoute("/program/els-school")({
  head: () =>
    buildSeoHead({
      title,
      description,
      path: "/program/els-school",
    }),
  component: ElsSchoolPage,
});

function ElsSchoolPage() {
  return <ElsDetailPage />;
}