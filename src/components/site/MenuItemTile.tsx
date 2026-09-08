import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { formatNutritionValue, type Drink } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

/** Порядок и подписи колонок компактной таблицы КБЖУ: Б | Ж | У | К */
const MACROS = [
  { key: "proteins", label: "Б", title: "Белки, г" },
  { key: "fats", label: "Ж", title: "Жиры, г" },
  { key: "carbs", label: "У", title: "Углеводы, г" },
  { key: "calories", label: "К", title: "Калории, ккал" },
] as const;

export function MenuItemTile({ drink, delay = 0 }: { drink: Drink; delay?: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const { nutrition } = drink;
  const composition = nutrition.composition.replace(/^Состав:\s*/i, "");
  const description = drink.description.replace(/^Состав:\s*/i, "");

  return (
    <Reveal as="article" delay={delay} className="flex h-full flex-col">
      {/* Фото: фиксированный портретный формат 360x440 */}
      <div className="h-[440px] w-[360px] max-w-full overflow-hidden bg-[#f3f1ee]">
        <img
          src={drink.image}
          alt={drink.title}
          loading="lazy"
          decoding="async"
          width={360}
          height={440}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Название: крупный тонкий шрифт */}
      <h3 className="product-title mt-6 text-xl !font-[500] uppercase text-foreground sm:text-[1.5rem]">
        {drink.title}
      </h3>

      <p className="product-text-md mt-4 text-[11px] uppercase tracking-[0.14em] text-foreground">
        Рассчитано на 100 мл.
      </p>

      {/* КБЖУ в одну строку: Б | Ж | У | К */}
      <dl
        aria-label="Пищевая ценность на порцию"
        className="mt-2 grid grid-cols-4 divide-x divide-border border-y border-border"
      >
        {MACROS.map((m) => (
          <div
            key={m.key}
            title={m.title}
            className="flex items-baseline justify-center gap-1.5 py-2.5"
          >
            <dt className="product-text-md text-[11px] uppercase tracking-[0.14em] text-foreground">
              {m.label}
            </dt>
            <dd className="product-text-md text-sm tabular-nums">
              {formatNutritionValue(nutrition[m.key])}
            </dd>
          </div>
        ))}
      </dl>

      {/* Объём и цена */}
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <span className="product-text-md text-sm text-foreground">{drink.size}</span>
        <span className="product-text-md text-base tabular-nums text-foreground">
          {drink.price}
        </span>
      </div>

      {/* Раскрывающийся блок: описание и состав */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "product-text-md mt-4 inline-flex items-center gap-1.5 self-start text-[11px] uppercase tracking-[0.16em] transition-colors",
          open ? "text-primary" : "text-foreground/70 hover:text-primary",
        )}
      >
        {open ? "Скрыть" : "Подробнее"}
        <ChevronDown
          aria-hidden
          className={cn("h-3.5 w-3.5 transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4">
              <p className="product-text-md text-[0.9375rem] text-foreground/80">{description}</p>

              <div className="mt-6">
                <p className="product-text-md text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Состав
                </p>
                <p className="product-text-md mt-1 text-sm text-foreground/80">{composition}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}