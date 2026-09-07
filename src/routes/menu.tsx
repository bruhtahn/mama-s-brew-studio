import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MenuItemTile } from "@/components/site/MenuItemTile";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { menuCategories } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

const title = "Меню — Мама варит кофе";
const description =
  "Кофе, авторские напитки, холодный кофе, чай и десерты в кофейне «Мама варит кофе» на Покровке, 8.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/menu" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState(menuCategories[0].id);
  const category = menuCategories.find((c) => c.id === active) ?? menuCategories[0];

  return (
    <>
      {/* Минималистичная шапка страницы: белый фон, без декоративных элементов */}
      <section className="bg-white pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">
              <span aria-hidden className="inline-block h-px w-6 bg-primary" />
              Меню
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="product-title mt-5 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">
              Всё, что мы варим и печём
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="product-text mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Цены указаны за стандартную порцию. Растительное молоко — без доплаты, зерно на
              альтернативу меняем каждые две недели.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-x">
          {/* Категории: текстовые табы с тонкой линией, активная — красная */}
          <div
            role="tablist"
            aria-label="Категории меню"
            className="-mx-5 flex gap-x-2 overflow-x-auto border-b border-border px-5 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {menuCategories.map((c) => (
              <button
                key={c.id}
                role="tab"
                type="button"
                aria-selected={active === c.id}
                onClick={() => setActive(c.id)}
                className={cn(
                  "-mb-px shrink-0 cursor-pointer whitespace-nowrap rounded-t-lg border-b-2 px-5 py-3.5 text-base tracking-wide transition-colors duration-300",
                  active === c.id
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {c.title}
              </button>
            ))}
          </div>

          <div className="mt-12 sm:mt-16">
            <Reveal key={category.id}>
              <h2 className="product-title text-3xl sm:text-4xl">{category.title}</h2>
              <p className="product-text mt-3 text-muted-foreground">{category.subtitle}</p>
            </Reveal>

            {/* Сетка: 1 колонка на мобильных, 2 на планшетах, 3 на десктопе */}
            <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
              {category.items.map((drink, i) => (
                <MenuItemTile
                  key={`${category.id}-${drink.id}`}
                  drink={drink}
                  delay={(i % 3) * 0.06}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
