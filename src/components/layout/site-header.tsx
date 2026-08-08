import { useEffect, useId, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { ConsultationCta } from "@/components/consultation-cta";
import { Wordmark } from "@/components/wordmark";
import { mainNav } from "@/content/site";
import { cn } from "@/lib/utils";

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

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
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
      document.body.style.overflow = previousOverflow;
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

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
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
                            aria-current={pathname === child.href ? "page" : undefined}
                            className={cn(
                              "group flex items-center gap-3 rounded-2xl px-4 py-3",
                              "transition-colors hover:bg-surface-subtle",
                              pathname === child.href && "bg-surface-selected",
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
          onClick={() => setMobileOpen((open) => !open)}
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
          <span className="sr-only">{mobileOpen ? "Tutup menu" : "Buka menu"}</span>

          {mobileOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <div
          id={mobileId}
          ref={panelRef}
          className="animate-rise fixed inset-x-0 top-[4.75rem] bottom-0 z-50 overflow-y-auto border-t border-border bg-background px-5 pt-6 pb-10 lg:hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-16 size-64 rounded-full bg-primary/10 blur-3xl"
          />

          <nav aria-label="Navigasi mobile" className="relative mx-auto max-w-xl">
            <p className="px-3 text-xs font-bold tracking-[0.14em] text-ink-muted uppercase">
              Navigasi
            </p>

            <ul className="mt-3 flex flex-col gap-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "flex min-h-13 items-center justify-between rounded-2xl border px-4 text-base font-bold",
                      "transition-colors",
                      isActive(item.href)
                        ? "border-primary/20 bg-surface-selected text-primary"
                        : "border-border bg-surface text-ink hover:bg-surface-subtle",
                    )}
                  >
                    {item.label}

                    <ArrowRight aria-hidden="true" className="size-4 text-ink-muted" />
                  </Link>

                  {item.children ? (
                    <ul className="mt-2 grid gap-2 pl-4">
                      {item.children.slice(1).map((child) => (
                        <li key={child.href}>
                          <Link
                            to={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className={cn(
                              "block rounded-2xl border px-4 py-3",
                              "transition-colors",
                              pathname === child.href
                                ? "border-primary/20 bg-surface-selected"
                                : "border-border bg-surface/70 hover:bg-surface",
                            )}
                          >
                            <span className="block text-sm font-bold text-ink">{child.label}</span>

                            <span className="mt-1 block text-xs leading-relaxed text-ink-secondary">
                              {child.description}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative mx-auto mt-7 max-w-xl rounded-[1.75rem] bg-deep p-5 text-white">
            <p className="text-sm font-bold">Masih belum yakin memilih program?</p>

            <p className="mt-1 text-xs leading-relaxed text-white/60">
              Mulai dengan menceritakan kebutuhan anak kepada tim Gapai.
            </p>

            <ConsultationCta
              channel="gapai"
              label="Konsultasikan kebutuhan anak"
              variant="inverse"
              className="mt-4 w-full"
            />
          </div>
        </div>
      ) : null}
    </header>
  );
}
