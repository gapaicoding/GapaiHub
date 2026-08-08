import { createFileRoute } from "@tanstack/react-router";

import { KidsproDetailPage } from "@/components/brand-pages/kidspro-detail-page";
import { buildSeoHead } from "@/config/seo";

const title =
  "Kidspro ID | Kelas Digital Creator Anak | Gapai Mentorship";

const description =
  "Temukan kelas digital creator Kidspro ID untuk anak: Canva, digital drawing, coding Scratch dan Roblox, animasi 3D, editing video, YouTuber, Podcaster, dan AI.";

export const Route = createFileRoute("/program/kidspro-id")({
  head: () =>
    buildSeoHead({
      title,
      description,
      path: "/program/kidspro-id",
    }),
  component: KidsproPage,
});

function KidsproPage() {
  return <KidsproDetailPage />;
}
