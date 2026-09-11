import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import hero from "@/assets/official/about-4.jpg";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-espresso">
      <div className="absolute inset-x-0 bottom-0 top-20 z-0">
        <img
          src={hero}
          alt="Диван, растение и красная LED-строка в интерьере кофейни"
          width={1680}
          height={1120}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/75 via-espresso/45 to-espresso/90" />
      </div>

      <motion.div className="container-x relative z-20 flex min-h-dvh flex-col justify-end pb-16 pt-36 sm:pb-24">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow"
          >
            <span aria-hidden className="inline-block h-px w-8 bg-primary" />
            Москва · Покровка, 8
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[3.25rem] font-extrabold uppercase leading-[0.92] text-cream sm:text-7xl lg:text-8xl"
          >
            Мама варит кофе
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-cream/70"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/menu"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Смотреть меню
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
            <a
              href={SITE.routeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-8 py-4 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:border-cream/70"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Построить маршрут
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card mt-14 grid gap-6 rounded-3xl p-6 sm:grid-cols-2 lg:absolute lg:bottom-24 lg:right-6 lg:mt-0 lg:w-[24rem] lg:grid-cols-1 xl:right-12"
          aria-label="Адрес и часы работы"
        >
          <div className="flex gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Адрес
              </p>
              <p className="mt-1 font-display text-base font-bold">{SITE.address}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Clock className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Часы работы
              </p>
              <p className="mt-1 font-display text-base font-bold">Ежедневно 07:00–23:00</p>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
