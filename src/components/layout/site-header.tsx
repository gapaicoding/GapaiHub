import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, Sparkles, X } from "lucide-react";

import { ConsultationCta } from "@/components/consultation-cta";
import { Wordmark } from "@/components/wordmark";
import { mainNav } from "@/content/site";
import { cn } from "@/lib/utils";

function getBrandAccent(href: string) {
  if (href.includes("brilia")) return "brilia";
  if (href.includes("joytalk")) return "joytalk";
  if (href.includes("kidspro")) return "kidspro";
  if (href.includes("els-school")) return "els";

  return undefined;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownId = useId();
  const mobileId = useId();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      panelRef.current
        ?.querySelector<HTMLElement>("[data-mobile-initial-focus]")
        ?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);

        window.requestAnimationFrame(() => {
          menuButtonRef.current?.focus();
        });

        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0]!;
      const lastElement = focusableElements[focusableElements.length - 1]!;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!openDropdown) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [openDropdown]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const closeMobileMenu = () => {
    setMobileOpen(false);

    window.requestAnimationFrame(() => {
      menuButtonRef.current?.focus();
    });
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;

    event.preventDefault();
    setMobileOpen(false);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    });
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b",
          "transition-all duration-300 ease-[var(--ease-gapai)]",
          scrolled
            ? "surface-glass border-border shadow-[var(--shadow-soft)]"
            : "border-transparent bg-background/85 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-[4.75rem] w-full max-w-[1240px] items-center gap-4 px-5 sm:px-8">
          <Link
            to="/"
            onClick={handleLogoClick}
            aria-label="Gapai Mentorship, kembali ke beranda"
            className="group shrink-0 rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/35 focus-visible:ring-offset-3"
          >
            <Wordmark className="h-12 transition-transform duration-200 group-hover:scale-[1.025] sm:h-[3.25rem]" />
          </Link>

          <nav
            aria-label="Navigasi utama"
            className="ml-auto hidden items-center rounded-full border border-border/80 bg-surface/65 p-1 shadow-[var(--shadow-soft)] backdrop-blur-md lg:flex"
          >
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.href} ref={dropdownRef} className="relative">
                  <div className="flex items-center">
                    <Link
                      to={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "flex min-h-10 items-center rounded-full px-3.5 text-sm font-semibold",
                        "transition-all duration-200",
                        isActive(item.href)
                          ? "bg-surface-selected text-primary"
                          : "text-ink-secondary hover:bg-surface-subtle hover:text-ink",
                      )}
                    >
                      {item.label}
                    </Link>

                    <button
                      type="button"
                      aria-expanded={openDropdown}
                      aria-controls={dropdownId}
                      aria-label={`Buka daftar ${item.label}`}
                      onClick={() => setOpenDropdown((open) => !open)}
                      className="mr-1 grid size-8 place-items-center rounded-full text-ink-secondary transition-colors hover:bg-surface-selected hover:text-primary"
                    >
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "size-4 transition-transform duration-200",
                          openDropdown && "rotate-180",
                        )}
                      />
                    </button>
                  </div>

                  {openDropdown ? (
                    <div
                      id={dropdownId}
                      className="animate-rise absolute right-0 top-[calc(100%+0.85rem)] w-[22rem] overflow-hidden rounded-[1.75rem] border border-border bg-surface p-2.5 shadow-[var(--shadow-float)]"
                    >
                      <div className="mb-2 rounded-2xl bg-deep px-4 py-3 text-inverse">
                        <p className="text-xs font-bold tracking-[0.12em] text-white/55 uppercase">
                          Ekosistem Gapai
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                          Temukan program berdasarkan kebutuhan anak
                        </p>
                      </div>

                      <ul className="flex flex-col">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              to={child.href}
                              aria-current={
                                pathname === child.href ? "page" : undefined
                              }
                              className={cn(
                                "group flex items-center gap-3 rounded-2xl px-4 py-3",
                                "transition-colors hover:bg-surface-subtle",
                                pathname === child.href &&
                                  "bg-surface-selected",
                              )}
                            >
                              <span className="min-w-0 flex-1">
                                <span className="block text-sm font-bold text-ink">
                                  {child.label}
                                </span>

                                <span className="mt-0.5 block text-xs leading-relaxed text-ink-secondary">
                                  {child.description}
                                </span>
                              </span>

                              <ArrowRight
                                aria-hidden="true"
                                className="size-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "flex min-h-10 items-center rounded-full px-3.5 text-sm font-semibold",
                    "transition-all duration-200",
                    isActive(item.href)
                      ? "bg-surface-selected text-primary"
                      : "text-ink-secondary hover:bg-surface-subtle hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="ml-auto hidden lg:ml-3 lg:block">
            <ConsultationCta
              channel="gapai"
              label="Konsultasi"
              size="md"
              className="min-h-11 whitespace-nowrap px-5"
            />
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls={mobileId}
            className={cn(
              "ml-auto grid size-11 place-items-center rounded-2xl border",
              "border-border bg-surface text-ink shadow-[var(--shadow-soft)]",
              "transition-all duration-200",
              "hover:border-primary/30 hover:bg-surface-selected hover:text-primary",
              "lg:hidden",
            )}
          >
            <span className="sr-only">Buka menu</span>
            <Menu aria-hidden="true" className="size-5" />
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[80] overflow-hidden lg:hidden">
          <button
            type="button"
            aria-label="Tutup menu navigasi"
            onClick={closeMobileMenu}
            className="absolute inset-0 bg-deep/30 backdrop-blur-[2px]"
          />

          <div
            id={mobileId}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
            className={cn(
              "animate-in slide-in-from-right absolute inset-y-0 right-0",
              "flex h-[100dvh] w-full min-w-0 flex-col overflow-hidden",
              "border-l border-border bg-background shadow-[var(--shadow-float)]",
              "duration-300 sm:max-w-[26rem]",
            )}
          >
            <div className="relative shrink-0 overflow-hidden border-b border-border/80 bg-surface/85 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-20 size-48 rounded-full bg-primary/10 blur-3xl"
              />

              <div className="relative flex h-[5rem] items-center justify-between gap-4 px-5 sm:px-6">
                <div className="flex min-w-0 items-center gap-3">
                  <Link
                    to="/"
                    onClick={handleLogoClick}
                    aria-label="Gapai Mentorship, kembali ke beranda"
                    className="min-w-0 shrink rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
                  >
                    <Wordmark className="h-11 max-w-full" />
                  </Link>

                  <span className="hidden rounded-full border border-primary/10 bg-primary/5 px-2.5 py-1 text-[0.65rem] font-extrabold tracking-[0.12em] text-primary uppercase min-[360px]:inline-flex">
                    Menu
                  </span>
                </div>

                <button
                  data-mobile-initial-focus
                  type="button"
                  onClick={closeMobileMenu}
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-deep bg-deep text-white shadow-[var(--shadow-raised)] transition-all duration-200 hover:scale-95 hover:bg-deep-soft"
                >
                  <span className="sr-only">Tutup menu</span>
                  <X aria-hidden="true" className="size-5" />
                </button>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
            </div>

            <div className="relative min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain bg-gradient-to-b from-background via-background to-surface-subtle/70 px-5 py-6 sm:px-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-12 size-64 rounded-full bg-primary/10 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 bottom-12 size-56 rounded-full bg-brand-yellow/15 blur-3xl"
              />

              <nav aria-label="Navigasi mobile" className="relative min-w-0">
                <div className="flex items-center gap-3 px-1">
                  <p className="shrink-0 text-[0.68rem] font-extrabold tracking-[0.16em] text-ink-muted uppercase">
                    Jelajahi GapaiHub
                  </p>
                  <span aria-hidden="true" className="h-px flex-1 bg-border" />
                </div>

                <ul className="mt-4 flex min-w-0 flex-col gap-1">
                  {mainNav.map((item) => (
                    <li key={item.href} className="min-w-0">
                      {item.children ? (
                        <div className="py-2">
                          <Link
                            to={item.href}
                            aria-current={
                              isActive(item.href) ? "page" : undefined
                            }
                            className="group relative flex min-h-[6.25rem] w-full min-w-0 items-end justify-between gap-4 overflow-hidden rounded-[1.6rem] bg-deep p-5 text-white shadow-[var(--shadow-raised)] outline-none transition-transform duration-300 hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-primary/35"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute -right-10 -top-14 size-40 rounded-full border border-white/10 bg-white/5"
                            />
                            <span
                              aria-hidden="true"
                              className="absolute right-14 top-7 size-16 rounded-full border border-brand-yellow/20"
                            />

                            <span className="relative min-w-0">
                              <span className="flex items-center gap-2 text-[0.65rem] font-extrabold tracking-[0.14em] text-brand-yellow uppercase">
                                <Sparkles
                                  aria-hidden="true"
                                  className="size-3.5"
                                />
                                Empat brand spesialis
                              </span>
                              <span className="mt-2 block text-xl leading-tight font-extrabold">
                                {item.label}
                              </span>
                              <span className="mt-1 block text-xs leading-relaxed text-white/60">
                                Temukan jalur sesuai kebutuhan anak
                              </span>
                            </span>

                            <span className="relative grid size-10 shrink-0 place-items-center rounded-full bg-white text-deep transition-transform duration-200 group-hover:translate-x-0.5">
                              <ArrowRight
                                aria-hidden="true"
                                className="size-4"
                              />
                            </span>
                          </Link>

                          <ul className="mt-3 grid min-w-0 grid-cols-2 gap-2.5">
                            {item.children.slice(1).map((child) => (
                              <li
                                key={child.href}
                                data-accent={getBrandAccent(child.href)}
                                className="min-w-0"
                              >
                                <Link
                                  to={child.href}
                                  aria-current={
                                    pathname === child.href ? "page" : undefined
                                  }
                                  className={cn(
                                    "group flex min-h-[5.6rem] min-w-0 flex-col justify-between overflow-hidden rounded-[1.35rem] border p-3.5",
                                    "bg-accent-soft/80 shadow-[var(--shadow-soft)] transition-all duration-200",
                                    pathname === child.href
                                      ? "border-accent ring-2 ring-accent/15"
                                      : "border-accent/15 hover:-translate-y-0.5 hover:border-accent/35",
                                  )}
                                >
                                  <span className="flex items-start justify-between gap-2">
                                    <span
                                      aria-hidden="true"
                                      className="mt-1 size-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_var(--accent-soft)]"
                                    />
                                    <ArrowRight
                                      aria-hidden="true"
                                      className="size-3.5 shrink-0 text-accent-ink/55 transition-transform group-hover:translate-x-0.5"
                                    />
                                  </span>

                                  <span className="min-w-0">
                                    <span className="block truncate text-sm font-extrabold text-ink">
                                      {child.label}
                                    </span>
                                    <span className="mt-0.5 line-clamp-1 block text-[0.65rem] leading-relaxed text-accent-ink">
                                      {child.description}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          aria-current={
                            isActive(item.href) ? "page" : undefined
                          }
                          className={cn(
                            "group flex min-h-[3.75rem] w-full min-w-0 items-center justify-between gap-4 border-b border-border/80 px-1",
                            "text-lg font-extrabold transition-colors",
                            isActive(item.href)
                              ? "text-primary"
                              : "text-ink hover:text-primary",
                          )}
                        >
                          <span className="min-w-0 truncate">{item.label}</span>
                          <span
                            className={cn(
                              "grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-200",
                              isActive(item.href)
                                ? "border-primary bg-primary text-white"
                                : "border-border bg-surface text-ink-muted shadow-[var(--shadow-soft)] group-hover:border-primary/25 group-hover:text-primary",
                            )}
                          >
                            <ArrowRight
                              aria-hidden="true"
                              className="size-4 transition-transform group-hover:translate-x-0.5"
                            />
                          </span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="relative shrink-0 overflow-hidden border-t border-white/10 bg-deep px-5 pt-5 pb-[calc(1rem+env(safe-area-inset-bottom))] text-white sm:px-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-14 -top-20 size-48 rounded-full bg-primary/35 blur-3xl"
              />

              <div className="relative">
                <p className="text-sm font-extrabold">
                  Belum yakin memilih program?
                </p>

                <p className="mt-1 max-w-sm text-xs leading-relaxed text-white/60">
                  Ceritakan kebutuhan anak, kami bantu memetakan arahnya.
                </p>

                <ConsultationCta
                  channel="gapai"
                  label="Konsultasikan kebutuhan anak"
                  variant="inverse"
                  className="mt-4 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}