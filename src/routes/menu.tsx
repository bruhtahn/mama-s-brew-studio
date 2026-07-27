import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { DrinkCard } from "@/components/site/DrinkCard";
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
      <PageHero
        eyebrow="Меню"
        title="Всё, что мы варим и печём"
        description="Цены указаны за стандартную порцию. Растительное молоко — без доплаты, зерно на альтернативу меняем каждые две недели."
      />

      <section className="bg-background py-14 sm:py-20">
        <div className="container-x">
          <div
            role="tablist"
            aria-label="Категории меню"
            className="flex flex-wrap gap-2 border-b border-border pb-6"
          >
            {menuCategories.map((c) => (
              <button
                key={c.id}
                role="tab"
                type="button"
                aria-selected={active === c.id}
                onClick={() => setActive(c.id)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                  active === c.id
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground",
                )}
              >
                {c.title}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <Reveal key={category.id}>
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{category.title}</h2>
              <p className="mt-3 text-muted-foreground">{category.subtitle}</p>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.items.map((drink, i) => (
                <DrinkCard key={`${category.id}-${drink.id}`} drink={drink} delay={(i % 4) * 0.06} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
