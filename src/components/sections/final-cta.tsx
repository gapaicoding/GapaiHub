import { ConsultationCta } from "@/components/consultation-cta";
import { Link } from "@tanstack/react-router";
import { actionVariants } from "@/components/ui/action";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="pb-20 sm:pb-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-[linear-gradient(135deg,var(--gapai-blue-50),var(--surface)_55%,var(--gapai-yellow-100))] p-8 shadow-[var(--shadow-raised)] sm:p-14">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-[-6rem] size-72 rounded-full bg-[radial-gradient(circle_at_center,var(--gapai-blue-200),transparent_70%)]"
          />
          <div className="relative max-w-2xl">
            <h2
              id="final-cta-heading"
              className="text-3xl font-extrabold tracking-tight text-balance-heading sm:text-4xl"
            >
              Ceritakan kebutuhan anak Anda, kami bantu memetakan langkahnya
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
              Tidak perlu tahu dulu program mana yang cocok. Mulai dari kondisi anak saat ini, lalu
              kita bahas bersama arah yang paling masuk akal.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ConsultationCta />
              <Link to="/program" className={actionVariants({ variant: "secondary", size: "lg" })}>
                Bandingkan empat fokus program
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
