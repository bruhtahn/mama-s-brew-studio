import { Link } from "@tanstack/react-router";
import { Instagram, Send, MapPin, Phone, Clock, Globe } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import logo from "@/assets/logo.svg";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt=""
                aria-hidden
                className="h-10 w-auto shrink-0"
              />
              <span className="flex min-w-0 flex-col leading-none">
                <span className="font-display text-xl font-extrabold uppercase">
                  Мама варит кофе
                </span>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.32em] text-cream/55">
                  Третье место
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              {SITE.tagline} Спешелти-зерно, свежая обжарка и тёплый зал на Покровке.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://t.me"
                aria-label="Телеграм"
                className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 transition-colors hover:border-primary hover:bg-primary"
              >
                <Send className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Инстаграм"
                className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 transition-colors hover:border-primary hover:bg-primary"
              >
                <Instagram className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <nav aria-label="Навигация в подвале">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">
              Разделы
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-cream/75 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">
              Контакты
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-cream/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {SITE.address}
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href={SITE.phoneHref} className="hover:text-primary">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {SITE.hours}
              </li>
              <li className="flex gap-3">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href={SITE.url} className="hover:text-primary">
                  mamavaritcoffee.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Мама варит кофе. Все права защищены.</p>
          <Link to="/privacy" className="transition-colors hover:text-primary">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
