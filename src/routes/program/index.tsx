import { createFileRoute } from "@tanstack/react-router";
import { ProgramOverview } from "@/components/program-overview";
import { buildSeoHead } from "@/config/seo";

const title = "Program & Brand | Gapai Mentorship";

const description =
  "Bandingkan empat fokus pengembangan anak dan temukan brand Gapai Mentorship yang paling sesuai dengan kebutuhannya.";

export const Route = createFileRoute("/program/")({
  head: () =>
    buildSeoHead({
      title,
      description,
      path: "/program",
    }),
  component: ProgramPage,
});

function ProgramPage() {
  return <ProgramOverview />;
}
