/**
 * Пищевая ценность позиций меню.
 *
 * ⚠️ Сейчас здесь ПРИМЕРНЫЕ значения. Чтобы заменить их на реальные,
 * достаточно отредактировать числа и строки состава в `nutritionData`,
 * не трогая компоненты интерфейса.
 *
 * Ключ словаря — `id` позиции из `menu-data.ts`.
 * Значения указаны на одну порцию (см. поле `size` у позиции).
 */

export type Nutrition = {
  /** Состав, например: "Эспрессо, молоко 3,2%" */
  composition: string;
  /** Энергетическая ценность, ккал */
  calories: number;
  /** Белки, г */
  proteins: number;
  /** Жиры, г */
  fats: number;
  /** Углеводы, г */
  carbs: number;
};

export const nutritionData = {
  // ─── Кофе ────────────────────────────────────────────────────────────────
  espresso: {
    composition: "Эспрессо (кофе зерновой, вода)",
    calories: 5,
    proteins: 0.3,
    fats: 0.2,
    carbs: 0.5,
  },
  americano: {
    composition: "Эспрессо, вода",
    calories: 8,
    proteins: 0.4,
    fats: 0.2,
    carbs: 0.8,
  },
  cappuccino: {
    composition: "Эспрессо, молоко 3,2%",
    calories: 130,
    proteins: 6,
    fats: 7,
    carbs: 10,
  },
  latte: {
    composition: "Эспрессо, молоко 3,2%",
    calories: 180,
    proteins: 9,
    fats: 9,
    carbs: 15,
  },
  "flat-white": {
    composition: "Двойной ристретто, молоко 3,2%",
    calories: 110,
    proteins: 5.5,
    fats: 6,
    carbs: 8.5,
  },
  raf: {
    composition: "Эспрессо, сливки 10%, ванильный сахар",
    calories: 320,
    proteins: 5,
    fats: 20,
    carbs: 28,
  },
  filter: {
    composition: "Кофе зерновой, вода",
    calories: 6,
    proteins: 0.3,
    fats: 0,
    carbs: 0.6,
  },

  // ─── Авторские напитки ───────────────────────────────────────────────────
  maple: {
    composition: "Эспрессо, молоко 3,2%, кленовый сироп, корица, бадьян",
    calories: 240,
    proteins: 8,
    fats: 8,
    carbs: 34,
  },
  "honey-raf": {
    composition: "Эспрессо, сливки 10%, гречишный мёд, морская соль",
    calories: 340,
    proteins: 5,
    fats: 20,
    carbs: 33,
  },
  "orange-espresso": {
    composition: "Эспрессо, тоник, цедра апельсина, лёд",
    calories: 90,
    proteins: 0.3,
    fats: 0,
    carbs: 22,
  },
  cocoa: {
    composition: "Топлёное молоко, бельгийский шоколад, какао",
    calories: 290,
    proteins: 10,
    fats: 12,
    carbs: 35,
  },

  // ─── Холодный кофе ───────────────────────────────────────────────────────
  "iced-latte": {
    composition: "Двойной эспрессо, молоко 3,2%, лёд",
    calories: 160,
    proteins: 8,
    fats: 8,
    carbs: 13,
  },
  "cold-brew": {
    composition: "Кофе крупного помола, холодная вода",
    calories: 10,
    proteins: 0.5,
    fats: 0,
    carbs: 1,
  },
  bumble: {
    composition: "Эспрессо, апельсиновый фреш, лёд",
    calories: 120,
    proteins: 1.5,
    fats: 0.3,
    carbs: 26,
  },
  "iced-flat": {
    composition: "Двойной ристретто, холодное молоко 3,2%, лёд",
    calories: 110,
    proteins: 5.5,
    fats: 6,
    carbs: 8.5,
  },

  // ─── Чай ─────────────────────────────────────────────────────────────────
  "sea-buckthorn": {
    composition: "Облепиха, свежий имбирь, мёд, вода",
    calories: 110,
    proteins: 0.5,
    fats: 0.5,
    carbs: 26,
  },
  jasmine: {
    composition: "Зелёный чай, цветы жасмина, вода",
    calories: 2,
    proteins: 0,
    fats: 0,
    carbs: 0.5,
  },
  herbal: {
    composition: "Чабрец, мята, липа, вода",
    calories: 3,
    proteins: 0,
    fats: 0,
    carbs: 0.7,
  },

  // ─── Десерты ─────────────────────────────────────────────────────────────
  cheesecake: {
    composition: "Сливочный сыр, сливки 33%, яйца, сахар, мука пшеничная",
    calories: 450,
    proteins: 8,
    fats: 32,
    carbs: 30,
  },
  croissant: {
    composition: "Мука пшеничная, сливочное масло 82%, молоко, дрожжи, сахар, соль",
    calories: 370,
    proteins: 7,
    fats: 21,
    carbs: 39,
  },
  medovik: {
    composition: "Мука пшеничная, мёд, яйца, сахар, сметана 20%, сливочное масло, сода",
    calories: 480,
    proteins: 7,
    fats: 22,
    carbs: 65,
  },
  cinnamon: {
    composition: "Мука пшеничная, сливочное масло, молоко, сахар, корица, кардамон, дрожжи",
    calories: 400,
    proteins: 7,
    fats: 15,
    carbs: 60,
  },
} satisfies Record<string, Nutrition>;

export type NutritionKey = keyof typeof nutritionData;

/** Форматирует число в русской записи: 5.5 → "5,5" */
export function formatNutritionValue(value: number): string {
  return String(value).replace(".", ",");
}

const formatGrams = formatNutritionValue;

/**
 * Строка вида "130 ккал · Б 6 г · Ж 7 г · У 10 г".
 * Используется в карточке меню.
 */
export function formatNutritionSummary(n: Nutrition): string {
  return [
    `${formatGrams(n.calories)} ккал`,
    `Б ${formatGrams(n.proteins)} г`,
    `Ж ${formatGrams(n.fats)} г`,
    `У ${formatGrams(n.carbs)} г`,
  ].join(" · ");
}
