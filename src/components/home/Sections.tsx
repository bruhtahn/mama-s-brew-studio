import { PhotoReplacementBadge } from "@/components/site/PhotoReplacementBadge";
import { Link } from "@tanstack/react-router";
import {
  Coffee,
  Flame,
  Sofa,
  Wifi,
  HeartHandshake,
  Users,
  ArrowUpRight,
  Clock,
  Sandwich,
  CakeSlice,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { DrinkCard } from "@/components/site/DrinkCard";
import { featured, totalMenuItems } from "@/lib/menu-data";
import { galleryItems } from "@/lib/gallery-data";
import drinkOfMonth from "@/assets/drink-of-month.webp";
import promoFood from "@/assets/menu-source/food-11.webp";

/** Остаток позиций меню, округлённый до десятков — для плитки «Меню целиком». */
const moreInMenu = Math.floor((totalMenuItems - featured.length) / 10) * 10;

export function FeaturedCoffee() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Наше меню"
          title="С чего начнём?"
          description="Понемногу из каждого раздела: классический капучино и альтернатива на V60, матча-латте, облепиховый чай, сэндвичи, свежая выпечка и снеки."
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
                  Ещё {moreInMenu}+ позиций в меню
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
  { icon: Coffee, title: "Зерно выше 84 баллов", text: "Отбираем спешелти-зерно по системе SCA. За оценкой стоят аромат, чистота и вкус будущей чашки." },
  { icon: Flame, title: "Свой обжарочный цех", text: "Создаём отдельные профили для эспрессо и фильтра — под каждый способ раскрываем зерно по-своему." },
  { icon: HeartHandshake, title: "Выбор без экзамена", text: "Расскажите, что любите: плотный шоколадный вкус или лёгкую фруктовую кислинку. С кофейными терминами разберёмся вместе." },
  { icon: Sofa, title: "Пространство с характером", text: "Открытые фактуры, индустриальные детали и мебель mid century. Можно устроиться за общим столом или выбрать уголок для двоих." },
  { icon: Wifi, title: "Место для рабочего дня", text: "Приходите с ноутбуком и своими задачами. Формат кофейни-коворкинга позволяет задержаться дольше одного перерыва." },
  { icon: Users, title: "Можно прийти одному", text: "Компания и особый повод необязательны. Книга, собственные мысли и чашка кофе — тоже хороший план." },
];

export function WhyUs() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Почему к нам возвращаются"
          title="Хороший кофе. И место для вас."
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
              <PhotoReplacementBadge />
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
              <p className="product-text mt-5 text-base text-cream/65">
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

const promoConditions = [
  {
    icon: Clock,
    text: "Ежедневно с 21:00 — за два часа до закрытия",
  },
  {
    icon: Sandwich,
    text: "Сэндвичи, рапы и роллы",
  },
  {
    icon: CakeSlice,
    text: "Десерты и снеки собственного производства",
  },
];

export function FoodPromo() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <img
                src={promoFood}
                alt="Круассан с Нутеллой"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Акция"
              title={
                <>
                  <span className="text-[1.15em] text-primary">Скидка 30%</span> на всю еду за два
                  часа до закрытия
                </>
              }
              description="Каждый день с 21:00 все сэндвичи, рапы, десерты и снеки можно забрать со скидкой 30% — вместо того чтобы отправить их наутро в мусорку. Заходите на поздний ужин или берите что-нибудь сладкое с собой."
            />
            <Reveal delay={0.15}>
              <ul className="mt-9 flex flex-col gap-4">
                {promoConditions.map((item) => (
                  <li key={item.text} className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold text-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                to="/menu"
                search={{ category: "food" }}
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Выбрать что-нибудь вкусное
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
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
          <SectionHeading eyebrow="Галерея" title="Посмотрите, где устроиться" />
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
              <div className="relative h-full overflow-hidden rounded-2xl bg-muted">
                {item.needsReplacement && <PhotoReplacementBadge />}
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

const visitIdeas = [
  { title: "Поработать вне дома", label: "Ноутбук и чашка кофе", text: "Сменить обстановку, собрать мысли и закончить задачу. Между делами можно отвлечься на обед, а потом вернуться к своему проекту." },
  { title: "Увидеться вживую", label: "Встреча вместо переписки", text: "Позвать друга, с которым давно не совпадали расписания. Заказать кофе, разделить десерт и наконец рассказать всё, что не помещается в сообщения." },
  { title: "Побыть с собой", label: "Время без планов", text: "Открыть книгу или просто смотреть в окно. Здесь можно провести паузу между делами так, как хочется именно вам." },
];

export function ThirdPlace() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Ваше третье место" title="Между домом и работой" description="У каждого дня свой ритм. Выберите, каким будет ваше время здесь." align="center" />
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {visitIdeas.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-soft)]">
                <span className="text-sm font-semibold text-primary">{item.label}</span>
                <h3 className="mt-5 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
