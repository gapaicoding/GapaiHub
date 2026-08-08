import { Compass, Layers, MessageCircleHeart, ShieldCheck } from "lucide-react";
import { trustSnapshot } from "@/content/site";

const icons = [Layers, Compass, MessageCircleHeart, ShieldCheck] as const;

export function TrustSnapshot() {
  return (
    <section aria-labelledby="trust-heading" className="py-14 sm:py-16">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-9">
          <h2 id="trust-heading" className="text-sm font-bold tracking-wide text-ink uppercase">
            Cara kerja ekosistem ini
          </h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustSnapshot.map((item, index) => {
              const Icon = icons[index % icons.length] ?? ShieldCheck;
              return (
                <li
                  key={item.title}
                  className="min-w-0 sm:border-l sm:border-border sm:pl-5 lg:first:border-l-0 lg:first:pl-0"
                >
                  <Icon aria-hidden="true" className="size-5 text-primary" />
                  <h3 className="mt-3 text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
