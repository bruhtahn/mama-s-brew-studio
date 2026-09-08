import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { formatNutritionSummary, formatNutritionValue, type Drink } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

/** Порядок и подписи колонок компактной таблицы КБЖУ: Б | Ж | У | К */
const MACROS = [
  { key: "proteins", label: "Б", title: "Белки, г" },
  { key: "fats", label: "Ж", title: "Жиры, г" },
  { key: "carbs", label: "У", title: "Углеводы, г" },
  { key: "calories", label: "К", title: "Калории, ккал" },
] as const;

function getAppetizingDescription(title: string) {
  const name = title.toLowerCase();
  const flavorNotes = [
    "ванильная мягкость",
    "ореховая глубина",
    "шоколадное тепло",
    "ягодная свежесть",
    "цитрусовая искра",
    "сливочная нежность",
    "медовая сладость",
    "карамельный оттенок",
    "цветочный аромат",
    "пряное настроение",
    "фруктовая лёгкость",
    "бархатная текстура",
    "кофейная насыщенность",
    "молочная мягкость",
    "воздушная пена",
    "хрустящий акцент",
    "тропическая свежесть",
    "миндальная нота",
    "мягкая кислинка",
    "долгое послевкусие",
  ];
  const finishingNotes = [
    "чистый финал",
    "яркий первый глоток",
    "спокойный баланс",
    "лёгкая прохлада",
    "насыщенный аромат",
    "деликатная сладость",
    "свежая нота",
    "гладкое послевкусие",
    "тёплый характер",
    "выразительная текстура",
    "приятная лёгкость",
    "мягкий контраст",
    "тонкая пряность",
    "уютная глубина",
    "сочная свежесть",
    "нежный акцент",
    "плотный вкус",
    "воздушное ощущение",
    "ароматное послевкусие",
    "особенная гармония",
  ];
  const moodNotes = [
    "для неспешной паузы",
    "для хорошего начала дня",
    "для тёплой встречи",
    "для маленького удовольствия",
    "для долгой прогулки",
    "для уютного вечера",
    "для бодрого настроения",
    "для сладкой передышки",
    "для красивого перерыва",
    "для момента наедине с собой",
    "для дружеского разговора",
    "для рабочего ритма",
    "для солнечного дня",
    "для любимого ритуала",
    "для лёгкого настроения",
    "для особого случая",
    "для неспешного завтрака",
    "для вечернего отдыха",
    "для нового вкусового открытия",
    "для приятного завершения дня",
  ];
  const hash = [...title].reduce((total, character) => total + character.charCodeAt(0), 0);
  const weightedHash = [...title].reduce(
    (total, character, index) => total + (index + 1) * character.charCodeAt(0),
    0,
  );
  const squaredHash = [...title].reduce(
    (total, character, index) => total + (index + 3) * character.charCodeAt(0) ** 2,
    0,
  );
  const uniqueDetail = `Лёгкая ${flavorNotes[hash % 20]}, ${finishingNotes[weightedHash % 20]} и настроение ${moodNotes[squaredHash % 20]}`;
  const withTitle = (text: string) => `${text} ${uniqueDetail}.`;
  const specificDescriptions: Record<string, string> = {
    эспрессо:
      "Плотный кофейный шот с насыщенным ароматом, ореховыми оттенками и долгим послевкусием.",
    американо:
      "Мягкий и чистый кофе: эспрессо раскрывается в чашке горячей воды, сохраняя аромат зерна.",
    "ice американо":
      "Прохладный кофе со свежим вкусом, лёгкой сладостью и бодрящим цитрусовым настроением.",
    "фильтр кофе":
      "Бережно заваренный кофе с прозрачным вкусом, тонкой кислотностью и мягким чайным послевкусием.",
    v60: "Чистая чашка с деликатным ароматом, лёгкой ягодной кислотностью и выразительным вкусом зерна.",
    "колд брю": "Мягкий холодный кофе длительной экстракции: сладкий, гладкий и почти без горечи.",
    латте: "Нежный молочный кофе с мягкой пеной, сливочной текстурой и деликатным ароматом зерна.",
    капучино:
      "Бархатный капучино с плотной пеной, выразительным эспрессо и тёплыми шоколадными оттенками.",
    "флэт уайт":
      "Насыщенный кофе с тонкой микропеной, крепким ристретто и гладким молочным послевкусием.",
    макиато: "Небольшой эспрессо с мягким молочным акцентом и выразительным кофейным послевкусием.",
    раф: "Воздушный сливочный кофе с ванильной мягкостью, нежной текстурой и тёплым ароматом.",
    "эспрессо тоник":
      "Яркий кофейный микс с горчинкой тоника, цитрусовой свежестью и пряным акцентом.",
    бамбл: "Сочный апельсиновый напиток с эспрессо: яркий, прохладный и приятно контрастный.",
    мокко: "Шоколадно-кофейный напиток с бархатным молоком, насыщенным какао и мягкой сладостью.",
    какао: "Густой горячий шоколад с нежным молоком, глубоким какао и уютным сливочным вкусом.",
  };

  if (specificDescriptions[name]) return withTitle(specificDescriptions[name]);

  if (name.includes("сэндвич")) {
    return withTitle(
      "сытный сэндвич на каждый день: хрустящий хлеб, сочная начинка и свежие овощи.",
    );
  }
  if (name.includes("рап") || name.includes("ролл")) {
    return withTitle("тёплая тортилья с сочной начинкой, свежими овощами и выразительным соусом.");
  }
  if (name.includes("цезарь")) {
    return withTitle(
      "свежий хрустящий салат с курицей, пармезаном и сливочной фирменной заправкой.",
    );
  }
  if (name.includes("круассан")) {
    return withTitle("слоёный, румяный и хрустящий снаружи, с нежной начинкой внутри.");
  }
  if (name.includes("брауни")) {
    return withTitle("плотный шоколадный десерт с насыщенным вкусом и мягкой влажной текстурой.");
  }
  if (name.includes("чизкейк") || name.includes("сырники")) {
    return withTitle("нежный сливочный десерт с мягкой текстурой и приятной сладостью.");
  }
  if (name.includes("кекс") || name.includes("хлеб") || name.includes("пирог")) {
    return withTitle("домашняя выпечка с ароматной корочкой и мягкой, нежной серединой.");
  }
  if (name.includes("десерт") || name.includes("муравейник") || name.includes("кольцо")) {
    return withTitle(
      "нежный десерт к кофе: насыщенный вкус, мягкая текстура и приятное послевкусие.",
    );
  }
  if (name.includes("шоколад") || name.includes("драже") || name.includes("клубник")) {
    return withTitle(
      "сладкий перекус в шоколадной оболочке, которым приятно дополнить чашку кофе.",
    );
  }
  if (name.includes("сушен") || name.includes("миндаль")) {
    return withTitle(
      "натуральный перекус с ярким вкусом и удобным форматом для прогулки или работы.",
    );
  }
  if (name.includes("чай") || name.includes("лимонад")) {
    return withTitle(
      "ароматный напиток с мягким вкусом и свежим послевкусием для неспешного отдыха.",
    );
  }
  if (name.includes("матча")) {
    return withTitle(
      "бархатный напиток с выразительным вкусом матча и мягкими сливочными оттенками.",
    );
  }
  if (name.includes("какао")) {
    return withTitle(
      "густой шоколадный напиток с тёплым ароматом какао и нежной молочной текстурой.",
    );
  }
  if (name.includes("раф")) {
    return withTitle(
      "сливочный, воздушный и мягкий напиток с ванильным настроением и долгим послевкусием.",
    );
  }
  if (name.includes("латте") || name.includes("капучино") || name.includes("флэт")) {
    return withTitle(
      "нежный кофейный напиток с бархатным молоком, мягкой пеной и выразительным зерном.",
    );
  }
  if (name.includes("фраппе") || name.includes("бамбл") || name.includes("колд брю")) {
    return withTitle(
      "освежающий холодный напиток с ярким вкусом, лёгкой сладостью и приятной прохладой.",
    );
  }
  if (name.includes("эспрессо") || name.includes("американо") || name.includes("фильтр")) {
    return withTitle(
      "чистый вкус свежего зерна, насыщенный аромат и аккуратное долгое послевкусие.",
    );
  }

  return "Удачное дополнение к кофе с выразительным вкусом и приятной текстурой.";
}

export function MenuItemTile({ drink, delay = 0 }: { drink: Drink; delay?: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const { nutrition } = drink;
  const composition = nutrition.composition.replace(/^Состав:\s*/i, "");
  const description = getAppetizingDescription(drink.title);

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
