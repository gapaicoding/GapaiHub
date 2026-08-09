import { createFileRoute } from "@tanstack/react-router";

import { BrandCards } from "@/components/sections/brand-cards";
import { ConsultationJourney } from "@/components/sections/consultation-journey";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { ProgramFinder } from "@/components/sections/program-finder";
import { TrustSnapshot } from "@/components/sections/trust-snapshot";
import { WhyGapai } from "@/components/sections/why-gapai";
import { absoluteUrl, buildSeoHead } from "@/config/seo";
import { faqs } from "@/content/site";

const title = "GapaiHub";

const description =
  "Temukan program yang sesuai kebutuhan anak melalui empat brand spesialis GapaiHub: Brilia, Joytalk English, Kidspro ID, dan ELS School. Mulai dari konsultasi.";

export const Route = createFileRoute("/")({
  head: () => {
    const seo = buildSeoHead({
      title,
      description,
      path: "/",
    });

    return {
      ...seo,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            url: absoluteUrl("/"),
            inLanguage: "id-ID",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        },
      ],
    };
  },
  component: Index,
});

/**
 * Section yang belum tersedia datanya sengaja tidak dirender:
 * galeri aktivitas, testimoni terverifikasi, dan artikel terbaru.
 */
function Index() {
  return (
    <>
      <Hero />
      <TrustSnapshot />
      <ProgramFinder />
      <BrandCards />
      <WhyGapai />
      <ConsultationJourney />
      <Faq />
      <FinalCta />
    </>
  );
}