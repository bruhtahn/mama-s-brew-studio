import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.svg";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !overHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-x">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:grid-cols-[1fr_auto_1fr]">
          <Link
            to="/"
            aria-label={`${SITE.name} — на главную`}
            className={cn(
              "flex min-w-0 items-center gap-2.5 transition-colors",
              solid ? "text-foreground" : "text-white",
            )}
          >
            <img
            src={logo}
            alt="Мама варит кофе"
            className="h-10 w-auto shrink-0"
           />
            <span className="truncate font-display text-[15px] font-extrabold leading-tight tracking-tight sm:text-base">
              Мама варит кофе
            </span>
          </Link>

          <nav aria-label="Основная навигация" className="hidden lg:flex lg:items-center lg:gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  solid
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/75 hover:text-white",
                )}
                activeProps={{
                  className: cn("!text-primary", !solid && "!text-white"),
                  "data-active": "true",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden justify-end lg:flex">
            <a
              href={SITE.phoneHref}
              className={cn(
                "inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300",
                overHero ? "text-white hover:text-white/80" : "text-primary hover:text-primary/80",
              )}
            >
              <Phone className={cn("h-4 w-4", overHero ? "text-white" : "text-primary")} aria-hidden />
              <span className={cn(overHero ? "text-white" : "text-primary")}>{SITE.phone}</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className={cn(
              "grid h-11 w-11 shrink-0 place-items-center justify-self-end rounded-full border transition-colors lg:hidden",
              solid ? "border-border text-foreground" : "border-white/30 text-white",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <nav aria-label="Мобильная навигация" className="container-x flex flex-col py-4">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="rounded-xl px-2 py-3 text-lg font-semibold text-foreground"
                  activeProps={{ className: "!text-primary" }}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={SITE.phoneHref}
                className={cn(
                  "mt-3 inline-flex items-center justify-center gap-2 text-sm font-semibold",
                  overHero ? "text-white" : "text-primary",
                )}
              >
                <Phone className={cn("h-4 w-4", overHero ? "text-white" : "text-primary")} aria-hidden />
                <span className={cn(overHero ? "text-white" : "text-primary")}>{SITE.phone}</span>
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
