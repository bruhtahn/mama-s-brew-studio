import { PhotoReplacementBadge } from "@/components/site/PhotoReplacementBadge";
import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Handshake, Sparkles, Recycle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaSection } from "@/components/site/CtaSection";
import interior1 from "@/assets/official/about-2.jpg";
import interior2 from "@/assets/official/about-3.jpg";
import barista1 from "@/assets/official/about-6.jpg";
import barista2 from "@/assets/barista-2.webp";
import beans from "@/assets/official/about-11.jpg";

const title = "О нас — Мама варит кофе";
const description =
  "«Мама варит кофе» — сеть из Уфы, основанная в 2017 году. История, собственная обжарка, тренинг-центр и идея третьего места.";

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
  { year: "2017", title: "Начало в Уфе", text: "Первая кофейня в Башкортостане. На старте команда работала с зерном разных обжарщиков и искала свой подход к кофе." },
  { year: "Рост", title: "От кофейни к сети", text: "Появились новые точки, собственный обжарочный цех и тренинг-центр для бариста. Вместе с сетью выросла и команда, которая отвечает за продукт." },
  { year: "2024", title: "Первая кофейня в Москве", text: "Открытие на Покровке перенесло уфимскую идею третьего места в столицу: кофейня и коворкинг в одном пространстве." },
];

const values = [
  { icon: Leaf, title: "Отбор зерна", text: "В обжарку идёт зерно с оценкой выше 84 баллов SCA." },
  { icon: Sparkles, title: "Профиль обжарки", text: "Для эспрессо и фильтра разрабатываем разные профили." },
  { icon: Recycle, title: "Проверка вкуса", text: "Регулярно сравниваем партии на каппингах — профессиональных дегустациях кофе." },
  { icon: Handshake, title: "Обучение команды", text: "Собственный тренинг-центр помогает бариста развивать навыки и передавать опыт." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О нас"
        title="Из Уфы — с местом для каждого"
        description="Мы родом из Башкортостана. С 2017 года создаём кофейни, в которых есть место для общения, работы и времени наедине с собой."
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={interior1}
                alt="Уголок кофейни с креслами и надписью Третье место"
                loading="lazy"
                decoding="async"
                width={800}
                height={1000}
                className="col-span-2 rounded-3xl object-cover shadow-[var(--shadow-soft)]"
              />
              <img
                src={interior2}
                alt="Кресло и растения в интерьере кофейни"
                loading="lazy"
                decoding="async"
                width={800}
                height={700}
                className="rounded-2xl object-cover"
              />
              <img
                src={beans}
                alt="Обжаренные кофейные зёрна крупным планом"
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
              title="Что такое «третье место»"
              description="Социолог Рэй Ольденбург называл третьим местом пространство за пределами дома и работы, где люди встречаются и чувствуют себя частью городской жизни. Эта идея лежит в основе наших кофеен."
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Нам хочется, чтобы у вас было знакомое место в городе, куда легко прийти без повода.
                Можно заглянуть за кофе по дороге, провести встречу или остаться на рабочий день.
                Вы сами выбираете, сколько времени провести здесь и чему его посвятить.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  ["2017", "начало в Уфе"],
                  ["100+ т", "обжаривает сеть в год"],
                  ["2024", "выход в Москву"],
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
          <SectionHeading eyebrow="История" title="Уфимские корни, новые города" />
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
            eyebrow="От зерна до чашки"
            title="За вкус отвечает целая команда"
            align="center"
            description="Свой цех позволяет следить за кофе на каждом этапе: от выбора зелёного зерна до рецепта приготовления."
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
          <SectionHeading eyebrow="Команда" title="Кто делает это место вашим" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <figure className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)]">
                <img
                  src={barista1}
                  alt="Обжарщик проверяет кофе у ростера"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1100}
                  className="aspect-4/3 w-full object-cover"
                />
                <figcaption className="p-7">
                  <h3 className="font-display text-lg font-bold">Бариста и обжарщики</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Одни раскрывают вкус зерна в обжарке, другие готовят вашу чашку.
                    Общий язык команды — дегустации, обучение и внимание к тому, что нравится гостю.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.08}>
              <figure className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)]">
                <div className="relative">
<img
                  src={barista2}
                  alt="Руки бариста готовят порцию эспрессо"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={800}
                  className="aspect-4/3 w-full object-cover"
                />
<PhotoReplacementBadge />
</div>
                <figcaption className="p-7">
                  <h3 className="font-display text-lg font-bold">Команда пространства</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    За каждой кофейней стоят также архитекторы, дизайнеры и технологи.
                    Их работа соединяет интерьер, сервис и еду в место, где удобно проводить время.
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
