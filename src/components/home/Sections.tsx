import { Link } from "@tanstack/react-router";
import {
  Coffee,
  Flame,
  Sofa,
  Wifi,
  HeartHandshake,
  Dog,
  Star,
  ArrowUpRight,
  Quote,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { DrinkCard } from "@/components/site/DrinkCard";
import { featured } from "@/lib/menu-data";
import { galleryItems } from "@/lib/gallery-data";
import drinkOfMonth from "@/assets/drink-of-month.jpg";
import barista1 from "@/assets/barista-1.jpg";

export function FeaturedCoffee() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Наш кофе"
          title="Семь способов начать день"
          description="Готовим на зерне собственной обжарки. Каждый напиток настроен под конкретный рецепт — от плотного эспрессо до чайного фильтра."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featured.map((drink, i) => (
            <DrinkCard key={drink.id} drink={drink} delay={(i % 4) * 0.06} />
          ))}
          <Reveal delay={0.12} className="h-full">
            <Link
              to="/menu"
              className="group flex h-full min-h-56 flex-col rounded-3xl border border-dashed border-primary/40 bg-primary/5 p-6 transition-colors hover:bg-primary/10"
            >
              <span className="eyebrow">Меню целиком</span>
              <span className="mt-auto flex items-end justify-between gap-4 pt-10">
                <span className="font-display text-2xl font-extrabold leading-tight">
                  Ещё 20+ позиций в меню
                </span>
                <ArrowUpRight
                  className="h-6 w-6 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden
                />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const advantages = [
  {
    icon: Coffee,
    title: "Спешелти-кофе",
    text: "Зерно с оценкой 84+ баллов от проверенных ферм Эфиопии, Кении и Колумбии.",
  },
  {
    icon: Flame,
    title: "Свежая обжарка",
    text: "Обжариваем небольшими партиями и пускаем в работу в течение двух недель.",
  },
  {
    icon: Sofa,
    title: "Уютный интерьер",
    text: "Тёплое дерево, мягкий свет и большие окна с видом на Покровку.",
  },
  {
    icon: Wifi,
    title: "Бесплатный Wi-Fi",
    text: "Быстрый интернет и розетки у каждого столика — работайте сколько нужно.",
  },
  {
    icon: HeartHandshake,
    title: "Дружелюбная команда",
    text: "Расскажем про сорт, подберём напиток по вкусу и запомним ваш заказ.",
  },
  {
    icon: Dog,
    title: "Можно с собакой",
    text: "Питомцы — желанные гости. Миска с водой и угощение всегда наготове.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Почему к нам возвращаются"
          title="Мелочи, из которых складывается утро"
          align="center"
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 0.07}>
              <div className="h-full rounded-3xl border border-border/60 bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function DrinkOfMonth() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2rem] bg-espresso text-cream lg:grid-cols-2">
            <div className="relative min-h-72 overflow-hidden">
              <img
                src={drinkOfMonth}
                alt="Кленовый латте с корицей и бадьяном"
                loading="lazy"
                decoding="async"
                width={1408}
                height={1104}
                className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <span className="eyebrow">
                <span aria-hidden className="inline-block h-px w-6 bg-primary" />
                Напиток месяца
              </span>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] sm:text-5xl">
                Кленовый латте со специями
              </h2>
              <p className="mt-5 text-base leading-relaxed text-cream/65">
                Канадский кленовый сироп, палочка корицы и бадьян настаиваются в молоке восемь
                часов. Сверху — двойной эспрессо и облако взбитых сливок с щепоткой мускатного
                ореха. Осенний напиток, который согревает с первого глотка.
              </p>
              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-cream/40">Объём</dt>
                  <dd className="mt-1 font-display text-lg font-bold">350 мл</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-cream/40">Цена</dt>
                  <dd className="mt-1 font-display text-lg font-bold text-primary">390 ₽</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-cream/40">До</dt>
                  <dd className="mt-1 font-display text-lg font-bold">30 ноября</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function BaristaPick() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <img
                src={barista1}
                alt="Бариста Артём у кофемашины"
                loading="lazy"
                decoding="async"
                width={800}
                height={1100}
                className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
              />
              <span className="absolute -bottom-5 left-6 rounded-2xl bg-primary px-5 py-3 font-display text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
                Артём · шеф-бариста
              </span>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Выбор бариста"
              title="Эфиопия Иргачеффе на фильтре"
              description="«Это зерно я советую тем, кто думает, что не любит кофе. В чашке — жасмин, персик и чёрный чай, почти нет горечи. Завариваю на V60 при 93 °C, помол чуть крупнее соли: так вкус раскрывается медленно и держится до последнего глотка.»"
            />
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-3">
                {["Жасмин", "Персик", "Чёрный чай", "V60", "93 °C"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GalleryPreview() {
  const preview = galleryItems.slice(0, 6);
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Галерея" title="Как у нас по утрам" />
          <Reveal delay={0.1}>
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Смотреть все
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {preview.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 3) * 0.06}
              className={i === 0 ? "col-span-2 lg:col-span-1 lg:row-span-2" : ""}
            >
              <div className="h-full overflow-hidden rounded-2xl bg-muted">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[900ms] hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Ольга Ветрова",
    role: "Заходит по утрам",
    rating: 5,
    text: "Лучший раф в районе, и это не преувеличение. Ребята помнят, что я беру без сахара, и всегда спрашивают, как дела. Ощущение, будто заходишь к друзьям.",
    initials: "ОВ",
  },
  {
    name: "Дмитрий Козлов",
    role: "Работает из кофейни",
    rating: 5,
    text: "Провёл здесь половину своего проекта: тихо, розетки у каждого стола, Wi-Fi не падает. Фильтр на Кении — отдельная причина возвращаться.",
    initials: "ДК",
  },
  {
    name: "Марина Лебедева",
    role: "Приходит с Тошей",
    rating: 5,
    text: "Единственное место поблизости, куда можно с собакой без вопросов. Тоше выносят воду, мне — медовик. Идеальная суббота.",
    initials: "МЛ",
  },
];

export function Testimonials() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Отзывы" title="Что говорят гости" align="center" />
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-soft)]">
                <Quote className="h-7 w-7 text-primary/25" aria-hidden />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">
                  {t.text}
                </blockquote>
                <div
                  className="mt-6 flex gap-1"
                  aria-label={`Оценка ${t.rating} из 5`}
                  role="img"
                >
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-primary text-primary" aria-hidden />
                  ))}
                </div>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                  <span
                    aria-hidden
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-coffee text-sm font-bold text-secondary-foreground"
                  >
                    {t.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-display text-sm font-bold">{t.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
