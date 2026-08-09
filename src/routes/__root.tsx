import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import {
  ArrowRight,
  Home,
  RefreshCw,
  SearchX,
  TriangleAlert,
} from "lucide-react";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { actionVariants } from "@/components/ui/action";
import { SITE_URL, buildSeoHead } from "@/config/seo";
import { reportLovableError } from "@/lib/lovable-error-reporting";

const APP_NAME = "GapaiHub";
const faviconUrl = "/logo-gapai.png?v=2";

function NotFoundComponent() {
  return (
    <section className="relative isolate overflow-hidden bg-background px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto w-full max-w-2xl text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-3xl bg-surface-subtle text-primary shadow-[var(--shadow-soft)]">
          <SearchX aria-hidden="true" className="size-8" />
        </span>

        <p className="mt-6 text-sm font-bold tracking-wide text-primary uppercase">
          Error 404
        </p>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-balance-heading sm:text-5xl">
          Halaman tidak ditemukan
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-secondary">
          Alamat halaman mungkin tidak tepat, sudah berubah, atau halaman yang
          Anda cari belum tersedia.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link
            to="/"
            className={actionVariants({
              variant: "primary",
              size: "lg",
            })}
          >
            <Home aria-hidden="true" className="size-4" />
            Kembali ke beranda
          </Link>

          <Link
            to="/program"
            className={actionVariants({
              variant: "secondary",
              size: "lg",
            })}
          >
            Lihat semua program
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);

    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  function handleRetry() {
    router.invalidate();
    reset();
  }

  return (
    <section className="relative isolate overflow-hidden bg-background px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto w-full max-w-2xl text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-3xl bg-surface-subtle text-primary shadow-[var(--shadow-soft)]">
          <TriangleAlert aria-hidden="true" className="size-8" />
        </span>

        <p className="mt-6 text-sm font-bold tracking-wide text-primary uppercase">
          Terjadi gangguan
        </p>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-balance-heading sm:text-5xl">
          Halaman belum berhasil dimuat
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-secondary">
          Terjadi kendala saat memuat halaman ini. Silakan coba kembali atau
          kunjungi beranda GapaiHub.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={handleRetry}
            className={actionVariants({
              variant: "primary",
              size: "lg",
            })}
          >
            <RefreshCw aria-hidden="true" className="size-4" />
            Coba lagi
          </button>

          <a
            href="/"
            className={actionVariants({
              variant: "secondary",
              size: "lg",
            })}
          >
            <Home aria-hidden="true" className="size-4" />
            Kembali ke beranda
          </a>
        </div>
      </div>
    </section>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => {
    const seo = buildSeoHead();

    return {
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "theme-color",
          content: "#f7f9ff",
        },
        {
          name: "application-name",
          content: APP_NAME,
        },
        {
          name: "apple-mobile-web-app-title",
          content: APP_NAME,
        },
        ...seo.meta,
        {
          title: APP_NAME,
        },
      ],
      links: [
        ...seo.links,
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
        },
        {
          rel: "icon",
          href: faviconUrl,
          type: "image/png",
        },
        {
          rel: "shortcut icon",
          href: faviconUrl,
          type: "image/png",
        },
        {
          rel: "apple-touch-icon",
          href: faviconUrl,
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: APP_NAME,
            alternateName: "Gapai Mentorship",
            url: SITE_URL,
            description:
              "Ekosistem pendidikan anak yang menaungi Brilia, Joytalk English, Kidspro ID, dan ELS School.",
            sameAs: ["https://www.instagram.com/gapaiuniverse/"],
            brand: [
              {
                "@type": "Brand",
                name: "Brilia",
              },
              {
                "@type": "Brand",
                name: "Joytalk English",
              },
              {
                "@type": "Brand",
                name: "Kidspro ID",
              },
              {
                "@type": "Brand",
                name: "ELS School",
              },
            ],
          }),
        },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#konten-utama"
        className="sr-only fixed left-4 top-4 z-[100] rounded-xl bg-surface px-4 py-3 font-bold text-primary shadow-[var(--shadow-raised)] focus:not-sr-only"
      >
        Lompat ke konten utama
      </a>

      <SiteHeader />

      <main id="konten-utama">
        <Outlet />
      </main>

      <SiteFooter />
    </QueryClientProvider>
  );
}