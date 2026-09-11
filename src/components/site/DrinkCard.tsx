import { Reveal } from "./Reveal";
import { formatNutritionSummary, formatPreviewPrice, type Drink } from "@/lib/menu-data";

export function DrinkCard({ drink, delay = 0 }: { drink: Drink; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="group h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
        <div className="relative aspect-square sm:aspect-4/5 overflow-hidden bg-muted">
          <img
            src={drink.image}
            alt={drink.title}
            loading="lazy"
            decoding="async"
            width={800}
            height={1000}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          />
          {drink.size ? (
            <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur">
              {drink.size}
            </span>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:gap-4">
            <h3 className="product-title text-xl">{drink.title}</h3>
            <span className="shrink-0 whitespace-nowrap font-display text-lg font-extrabold text-primary">
              {formatPreviewPrice(drink.price)}
            </span>
          </div>
          <p className="product-text-md mt-3 text-[0.9375rem] text-foreground/80">
            {drink.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
