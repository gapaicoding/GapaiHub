import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { buildSeoHead } from "@/config/seo";

const title = "Blog | Gapai Mentorship";

const description =
  "Artikel dan wawasan dari Gapai Mentorship seputar proses belajar, komunikasi, kreativitas, dan perkembangan anak.";

export const Route = createFileRoute("/blog")({
  head: () =>
    buildSeoHead({
      title,
      description,
      path: "/blog",
    }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <PageShell
      eyebrow="Blog"
      title="Wawasan untuk mendampingi perkembangan anak"
      description={description}
      showConsultation={false}
    />
  );
}
