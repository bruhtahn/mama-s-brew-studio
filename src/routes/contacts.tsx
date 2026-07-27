import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Globe, Instagram, Send, Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";

const title = "Контакты — Мама варит кофе на Покровке, 8";
const description =
  "Адрес: Москва, ул. Покровка, 8. Телефон +7 (925) 561-19-84. Работаем ежедневно с 07:00 до 23:00. Карта, маршрут и форма обратной связи.";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contacts" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contacts" }],
  }),
  component: ContactsPage,
});

const details = [
  { icon: MapPin, label: "Адрес", value: SITE.address },
  { icon: Phone, label: "Телефон", value: SITE.phone, href: SITE.phoneHref },
  { icon: Clock, label: "Часы работы", value: "Ежедневно, 07:00–23:00" },
  { icon: Globe, label: "Сайт", value: "mamavaritcoffee.ru", href: SITE.url },
];

function ContactsPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Найти нас просто"
        description="Мы в двух минутах от метро «Китай-город», в старом доме с большими окнами. Заходите или напишите — ответим в тот же день."
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <ul className="space-y-6">
              {details.map((d, i) => (
                <Reveal as="li" key={d.label} delay={i * 0.06}>
                  <div className="flex gap-4 rounded-3xl border border-border/60 bg-card p-6">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <d.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="mt-1 block font-display text-lg font-bold hover:text-primary"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-display text-lg font-bold">{d.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={SITE.routeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <MapPin className="h-4 w-4" aria-hidden />
                  Построить маршрут
                </a>
                <a
                  href="https://t.me"
                  aria-label="Телеграм"
                  className="grid h-12 w-12 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Send className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href="https://instagram.com"
                  aria-label="Инстаграм"
                  className="grid h-12 w-12 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Instagram className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-border bg-muted shadow-[var(--shadow-soft)]">
              <iframe
                src={SITE.mapEmbed}
                title="Карта: Москва, улица Покровка, 8"
                loading="lazy"
                className="h-96 w-full border-0 lg:h-[34rem]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <span className="eyebrow">
                <span aria-hidden className="inline-block h-px w-6 bg-primary" />
                Обратная связь
              </span>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl">
                Напишите нам
              </h2>
              <p className="mt-4 text-muted-foreground">
                Бронь большого стола, вопрос про зерно или предложение о сотрудничестве — всё сюда.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={onSubmit} className="mt-10 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-semibold">
                      Имя
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Как к вам обращаться"
                      className="mt-2 h-13 w-full rounded-2xl border border-border bg-card px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className="text-sm font-semibold">
                      Телефон или e-mail
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      required
                      placeholder="+7 (___) ___-__-__"
                      className="mt-2 h-13 w-full rounded-2xl border border-border bg-card px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-semibold">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Расскажите, чем можем помочь"
                    className="mt-2 w-full resize-none rounded-2xl border border-border bg-card px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {sent ? <Check className="h-4 w-4" aria-hidden /> : null}
                  {sent ? "Спасибо, мы получили заявку" : "Отправить сообщение"}
                </button>
                <p aria-live="polite" className="text-sm text-muted-foreground">
                  {sent ? "Ответим в течение рабочего дня." : ""}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
