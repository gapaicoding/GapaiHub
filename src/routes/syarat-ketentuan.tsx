import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { buildSeoHead } from "@/config/seo";

const title = "Syarat & Ketentuan | Gapai Mentorship";

const description =
  "Ketentuan penggunaan website, informasi, dan layanan yang tersedia melalui Gapai Mentorship.";

export const Route = createFileRoute("/syarat-ketentuan")({
  head: () =>
    buildSeoHead({
      title,
      description,
      path: "/syarat-ketentuan",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Syarat & Ketentuan"
      description={description}
      showConsultation={false}
    />
  );
}
