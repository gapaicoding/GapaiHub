import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { buildSeoHead } from "@/config/seo";

const title = "Kebijakan Privasi | Gapai Mentorship";

const description =
  "Penjelasan mengenai data yang dikumpulkan oleh website Gapai Mentorship dan cara penggunaannya.";

export const Route = createFileRoute("/kebijakan-privasi")({
  head: () =>
    buildSeoHead({
      title,
      description,
      path: "/kebijakan-privasi",
    }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Kebijakan Privasi"
      description={description}
      showConsultation={false}
    />
  );
}
