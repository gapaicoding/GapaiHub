import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { buildSeoHead } from "@/config/seo";

const title = "Tentang Kami | Gapai Mentorship";

const description =
  "Kenali Gapai Mentorship, ekosistem pendidikan anak yang menaungi Brilia, Joytalk English, Kidspro ID, dan ELS School.";

export const Route = createFileRoute("/tentang-kami")({
  head: () =>
    buildSeoHead({
      title,
      description,
      path: "/tentang-kami",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="Tentang kami"
      title="Satu ekosistem untuk kebutuhan tumbuh anak"
      description={description}
      topic="Gapai Mentorship"
      channel="gapai"
    />
  );
}
