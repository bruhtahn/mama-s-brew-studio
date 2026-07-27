import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CtaSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-espresso px-6 py-16 text-cream sm:px-14 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <span className="eyebrow !text-primary">
                <span aria-hidden className="inline-block h-px w-6 bg-primary" />
                Заходите в гости
              </span>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] sm:text-5xl">
                Одна чашка — и день становится теплее
              </h2>
              <p className="mt-5 text-base leading-relaxed text-cream/65">
                Мы на Покровке каждый день с 07:00 до 23:00. Забегайте за утренним эспрессо или
                оставайтесь на весь вечер с фильтром и медовиком.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={SITE.routeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <MapPin className="h-4 w-4" aria-hidden />
                  Построить маршрут
                </a>
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-sm font-semibold text-cream transition-colors hover:border-cream/60"
                >
                  Смотреть меню
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
