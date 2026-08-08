import { createFileRoute } from "@tanstack/react-router";
import { BrandDetailPage } from "@/components/brand-detail-page";
import { buildSeoHead } from "@/config/seo";

const title = "ELS School | Public Speaking & Life Skill | Gapai Mentorship";

const description =
  "Kelas public speaking dan life skill yang melatih anak menyusun ide, tampil percaya diri, dan bertumbuh sebagai future leader.";

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
  return <BrandDetailPage brandId="els" />;
}
