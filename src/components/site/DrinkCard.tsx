import { Reveal } from "./Reveal";
import type { Drink } from "@/lib/menu-data";

export function DrinkCard({ drink, delay = 0 }: { drink: Drink; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="group h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
        <div className="relative aspect-4/5 overflow-hidden bg-muted">
          <img
            src={drink.image}
            alt={drink.title}
            loading="lazy"
            decoding="async"
            width={800}
            height={1000}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur">
            {drink.size}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="product-title text-xl">{drink.title}</h3>
            <span className="shrink-0 font-display text-lg font-extrabold text-primary">
              {drink.price}
            </span>
          </div>
          <p className="product-text mt-3 text-[0.9375rem] text-foreground/70">{drink.description}</p>
{drink.ingredients && (
  <div className="mt-5">
    <h4 className="text-sm font-light">
      Состав:
    </h4>

    <p className="mt-2 text-sm text-foreground/70">
      {drink.ingredients.join(", ")}
    </p>
  </div>
)}


{drink.nutrition && (
  <div className="mt-4 rounded-2xl bg-muted/50 p-4">
    <h4 className="text-sm font-semibold">
      БЖУ:
    </h4>

    <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-foreground/70">
      <span>🔥 {drink.nutrition.calories}</span>
      <span>Белки: {drink.nutrition.protein}</span>
      <span>Жиры: {drink.nutrition.fat}</span>
      <span>Углеводы: {drink.nutrition.carbs}</span>
    </div>
  </div>
)}
        </div>
      </div>
    </Reveal>
  );
}
