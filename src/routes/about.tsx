import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Handshake, Sparkles, Recycle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaSection } from "@/components/site/CtaSection";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import barista1 from "@/assets/barista-1.jpg";
import barista2 from "@/assets/barista-2.jpg";
import beans from "@/assets/beans.jpg";

const title = "О нас — Мама варит кофе";
const description =
  "История кофейни «Мама варит кофе»: философия кофе, команда бариста, ценности и путь от домашней кухни до Покровки, 8.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  {
    year: "2016",
    title: "Кухня на Чистых прудах",
    text: "Всё началось с воскресных завтраков: мама варила кофе на турке для друзей, которые заходили без предупреждения.",
  },
  {
    year: "2019",
    title: "Первая стойка",
    text: "Мы арендовали три квадратных метра в книжном магазине и поставили одну кофемашину. Очередь выстраивалась до улицы.",
  },
  {
    year: "2021",
    title: "Собственная обжарка",
    text: "Купили ростер на 5 кг и начали обжаривать зерно сами. С этого момента мы точно знаем, что в каждой чашке.",
  },
  {
    year: "2023",
    title: "Покровка, 8",
    text: "Открыли основной зал: большие окна, длинный общий стол и тихий угол для тех, кто пришёл с книгой.",
  },
  {
    year: "2026",
    title: "Школа бариста",
    text: "Запустили открытые каппинги по четвергам и учим гостей заваривать альтернативу дома.",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Прозрачность",
    text: "Мы знаем ферму, высоту и способ обработки каждого лота и рассказываем это на упаковке.",
  },
  {
    icon: Handshake,
    title: "Честная цена",
    text: "Платим фермерам выше биржевой цены и не экономим на молоке и масле для выпечки.",
  },
  {
    icon: Sparkles,
    title: "Внимание к детали",
    text: "Калибруем помол трижды в день и взвешиваем каждый шот — вкус не должен зависеть от смены.",
  },
  {
    icon: Recycle,
    title: "Меньше следа",
    text: "Скидка со своей кружкой, компостируем жмых и отдаём его городским садам.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О нас"
        title="Кофейня, которая выросла из домашней кухни"
        description="Нам важно, чтобы человек, зашедший на пять минут, уходил чуть более отдохнувшим, чем пришёл."
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={interior1}
                alt="Светлый зал кофейни на Покровке"
                loading="lazy"
                decoding="async"
                width={800}
                height={1000}
                className="col-span-2 rounded-3xl object-cover shadow-[var(--shadow-soft)]"
              />
              <img
                src={interior2}
                alt="Столик у окна с книгами и кофе"
                loading="lazy"
                decoding="async"
                width={800}
                height={700}
                className="rounded-2xl object-cover"
              />
              <img
                src={beans}
                alt="Обжаренные зёрна спешелти кофе"
                loading="lazy"
                decoding="async"
                width={800}
                height={1000}
                className="rounded-2xl object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Философия"
              title="Кофе — это про заботу, а не про скорость"
              description="Мы не гонимся за десятью локациями и не ставим таймер на приготовление. Вместо этого мы учим команду слышать зерно: пробовать каждый лот вслепую, обсуждать помол и признавать, когда чашка получилась не такой, как задумано."
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Название родилось само собой. Так гости в шутку называли нашу первую стойку: «пойдём
                туда, где мама варит кофе». Мы оставили это имя, потому что оно точно описывает
                ощущение, которое хочется дарить — тепло, знакомый вкус и уверенность, что о вас
                позаботятся.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  ["10 лет", "варим кофе"],
                  ["5 кг", "обжарка в неделю"],
                  ["12 000", "гостей в год"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="sr-only">{label}</dt>
                    <dd>
                      <span className="block font-display text-3xl font-extrabold text-primary">
                        {value}
                      </span>
                      <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="История" title="Как мы дошли до Покровки" />
          <ol className="mt-14 space-y-0">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.year} delay={(i % 3) * 0.05}>
                <div className="grid gap-4 border-t border-border py-8 sm:grid-cols-[8rem_1fr] sm:gap-10">
                  <span className="font-display text-2xl font-extrabold text-primary">
                    {item.year}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Миссия и ценности"
            title="Делать город на одну чашку добрее"
            align="center"
            description="Наша миссия проста: быть местом, куда приходят не только за кофе, но и за спокойными пятнадцатью минутами посреди дня."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-3xl border border-border/60 bg-card p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <v.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Команда" title="Люди за стойкой" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <figure className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)]">
                <img
                  src={barista1}
                  alt="Артём, шеф-бариста кофейни"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1100}
                  className="aspect-4/3 w-full object-cover"
                />
                <figcaption className="p-7">
                  <h3 className="font-display text-lg font-bold">Артём · шеф-бариста</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Отвечает за профили обжарки и рецептуру. Финалист московского чемпионата по
                    завариванию, ведёт наши четверговые каппинги.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.08}>
              <figure className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)]">
                <img
                  src={barista2}
                  alt="Руки бариста готовят порцию эспрессо"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={800}
                  className="aspect-4/3 w-full object-cover"
                />
                <figcaption className="p-7">
                  <h3 className="font-display text-lg font-bold">Смена утренних бариста</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Приходят к шести утра, чтобы к семи в чашке был идеальный эспрессо. Именно они
                    помнят ваш заказ наизусть.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
