import { consultationSteps } from "@/content/site";
import { ConsultationCta } from "@/components/consultation-cta";

export function ConsultationJourney() {
  return (
    <section
      aria-labelledby="journey-heading"
      className="relative overflow-hidden bg-deep py-16 text-inverse sm:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-[-8rem] size-[28rem] rounded-full bg-[radial-gradient(circle_at_center,var(--gapai-blue-800),transparent_70%)]" />
        <div className="absolute right-[-10rem] bottom-[-12rem] size-[30rem] rounded-full bg-[radial-gradient(circle_at_center,var(--gapai-blue-700),transparent_72%)] opacity-70" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-white/70 uppercase">
            Cara memulai
          </p>
          <h2
            id="journey-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-balance-heading sm:text-4xl"
          >
            Tiga langkah menuju pendampingan yang tepat
          </h2>
        </div>

        <ol className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          <span
            aria-hidden="true"
            className="absolute top-6 left-6 hidden h-px w-[calc(100%-3rem)] bg-linear-to-r from-white/40 via-white/25 to-transparent md:block"
          />
          <span
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-6 w-px bg-linear-to-b from-white/40 via-white/20 to-transparent md:hidden"
          />
          {consultationSteps.map((item) => (
            <li key={item.step} className="relative min-w-0 pl-16 md:pl-0">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 grid size-12 place-items-center rounded-2xl border border-white/25 bg-white/10 text-sm font-extrabold text-inverse backdrop-blur md:relative md:mb-5"
              >
                {item.step}
              </span>
              <h3 className="text-xl font-bold text-inverse">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-white/75">{item.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <ConsultationCta variant="inverse" />
        </div>
      </div>
    </section>
  );
}
