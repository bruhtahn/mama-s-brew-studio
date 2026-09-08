import { nutritionData, type Nutrition, type NutritionKey } from "./nutrition-data";

export type { Nutrition } from "./nutrition-data";
export { formatNutritionSummary, formatNutritionValue } from "./nutrition-data";

export type Drink = {
  id: NutritionKey;
  title: string;
  description: string;
  size: string;
  price: string;
  image: string;
  nutrition: Nutrition;
};

/**
 * Цена для превью-карточек: «210/250/295 ₽» → «от 210 ₽».
 * Если цена одна (или все варианты стоят одинаково, «210/210 ₽») — просто «210 ₽».
 */
export function formatPreviewPrice(price: string): string {
  const values = price
    .split("/")
    .map((part) => Number.parseInt(part, 10))
    .filter((value) => Number.isFinite(value));

  if (values.length === 0) return price;

  const min = Math.min(...values);
  const suffix = price.includes("₽") ? " ₽" : "";

  return min === Math.max(...values) ? `${min}${suffix}` : `от ${min}${suffix}`;
}

const images = import.meta.glob("../assets/menu-source/*.webp", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;
const imageFor = (id: string) => images[`../assets/menu-source/${id}.webp`] ?? "";

export type MenuCategory = { id: string; title: string; subtitle: string; items: Drink[] };

const source_01: Drink = {
  id: "source-01",
  title: "эспрессо",
  description: "Плотный кофейный вкус с выразительным ароматом и продолжительным послевкусием.",
  size: "0,06",
  price: "210 ₽",
  image: imageFor("source-01"),
  nutrition: nutritionData["source-01"],
};
const source_02: Drink = {
  id: "source-02",
  title: "американо",
  description: "Более мягкий и лёгкий по текстуре кофейный вкус с приятной горчинкой.",
  size: "0,2/0,3",
  price: "210/210 ₽",
  image: imageFor("source-02"),
  nutrition: nutritionData["source-02"],
};
const source_03: Drink = {
  id: "source-03",
  title: "ice американо",
  description: "Холодный кофе с чистым кофейным вкусом и лёгкой сладостью.",
  size: "0,3/0,4",
  price: "210/210 ₽",
  image: imageFor("source-03"),
  nutrition: nutritionData["source-03"],
};
const source_04: Drink = {
  id: "source-04",
  title: "V60",
  description: "Чистый и прозрачный вкус с ярким ароматом и оттенками, характерными для выбранного зерна.",
  size: "0,2",
  price: "275 ₽",
  image: imageFor("source-04"),
  nutrition: nutritionData["source-04"],
};
const source_05: Drink = {
  id: "source-05",
  title: "фильтр кофе",
  description: "Мягкий кофейный вкус с лёгкой текстурой и постепенно раскрывающимся послевкусием.",
  size: "0,2/0,3/0,4",
  price: "210/250/295 ₽",
  image: imageFor("source-05"),
  nutrition: nutritionData["source-05"],
};
const source_06: Drink = {
  id: "source-06",
  title: "колд брю",
  description: "Гладкий, округлый вкус с естественной сладостью и низкой горечью.",
  size: "0,3",
  price: "315 ₽",
  image: imageFor("source-06"),
  nutrition: nutritionData["source-06"],
};
const source_07: Drink = {
  id: "source-07",
  title: "латте",
  description: "Мягкий молочный вкус с кофейным послевкусием и шелковистой текстурой.",
  size: "0,3/0,4",
  price: "315/355 ₽",
  image: imageFor("source-07"),
  nutrition: nutritionData["source-07"],
};
const source_08: Drink = {
  id: "source-08",
  title: "ice латте",
  description: "Холодный молочный кофе с карамельной сладостью и мягким кофейным послевкусием.",
  size: "0,3/0,4",
  price: "315/355 ₽",
  image: imageFor("source-08"),
  nutrition: nutritionData["source-08"],
};
const source_09: Drink = {
  id: "source-09",
  title: "капучино",
  description: "Выраженный кофейный вкус с плотной молочной пеной и сливочным послевкусием.",
  size: "0,2/0,3/0:4",
  price: "275/315/355 ₽",
  image: imageFor("source-09"),
  nutrition: nutritionData["source-09"],
};
const source_10: Drink = {
  id: "source-10",
  title: "флэт уайт",
  description: "Плотный кофейный вкус с насыщенной молочной текстурой и коротким сливочным послевкусием.",
  size: "0,2",
  price: "275 ₽",
  image: imageFor("source-10"),
  nutrition: nutritionData["source-10"],
};
const source_11: Drink = {
  id: "source-11",
  title: "ice флэт уайт",
  description: "Холодный плотный кофе с молочной текстурой и лёгкой сладостью.",
  size: "0,2",
  price: "275 ₽",
  image: imageFor("source-11"),
  nutrition: nutritionData["source-11"],
};
const source_12: Drink = {
  id: "source-12",
  title: "макиато",
  description: "Концентрированный кофейный вкус с небольшой сливочной ноткой.",
  size: "0,08",
  price: "230 ₽",
  image: imageFor("source-12"),
  nutrition: nutritionData["source-12"],
};
const source_13: Drink = {
  id: "source-13",
  title: "раф",
  description: "Сливочный, воздушный вкус с мягкой кофейной горчинкой и сладким послевкусием.",
  size: "0,2/0,3/0,4",
  price: "295/335/380 ₽",
  image: imageFor("source-13"),
  nutrition: nutritionData["source-13"],
};
const source_14: Drink = {
  id: "source-14",
  title: "драфт",
  description: "Густая холодная текстура, сливочный вкус и выраженная сладость.",
  size: "0,3",
  price: "380 ₽",
  image: imageFor("source-14"),
  nutrition: nutritionData["source-14"],
};
const source_15: Drink = {
  id: "source-15",
  title: "эспрессо тоник",
  description: "Контраст горьковатого кофе, цитрусовой кислинки и пряной остроты имбиря.",
  size: "0,3/0,4",
  price: "325/370 ₽",
  image: imageFor("source-15"),
  nutrition: nutritionData["source-15"],
};
const source_16: Drink = {
  id: "source-16",
  title: "бамбл",
  description: "Сочная апельсиновая сладость с кофейной горчинкой, корицей и лёгкой цитрусовой кислинкой.",
  size: "0,3/0,4",
  price: "450/495 ₽",
  image: imageFor("source-16"),
  nutrition: nutritionData["source-16"],
};
const source_17: Drink = {
  id: "source-17",
  title: "ice бамбл",
  description: "Холодный цитрусовый вкус с апельсиновой сладостью, кофейной горчинкой и пряной корицей.",
  size: "0,3/0,4",
  price: "450/495 ₽",
  image: imageFor("source-17"),
  nutrition: nutritionData["source-17"],
};
const source_18: Drink = {
  id: "source-18",
  title: "колд брю лимонад",
  description: "Кофейная горчинка, лимонная кислинка и лёгкая горечь тоника.",
  size: "0,3/0,4",
  price: "315/355 ₽",
  image: imageFor("source-18"),
  nutrition: nutritionData["source-18"],
};
const source_19: Drink = {
  id: "source-19",
  title: "Латте халва",
  description: "Сливочный кофейный вкус с насыщенной ореховой сладостью и характерным послевкусием халвы.",
  size: "0,3/0,4",
  price: "335/380 ₽",
  image: imageFor("source-19"),
  nutrition: nutritionData["source-19"],
};
const source_20: Drink = {
  id: "source-20",
  title: "Капучино Арахис",
  description: "Кофейная горчинка и сливочная текстура с насыщенной жареной ореховой нотой.",
  size: "0,3/0,4",
  price: "335/380 ₽",
  image: imageFor("source-20"),
  nutrition: nutritionData["source-20"],
};
const source_21: Drink = {
  id: "source-21",
  title: "Мокко",
  description: "Сочетание кофе и шоколада со сливочной текстурой и глубоким шоколадным послевкусием.",
  size: "0,3/0,4",
  price: "335/380 ₽",
  image: imageFor("source-21"),
  nutrition: nutritionData["source-21"],
};
const source_22: Drink = {
  id: "source-22",
  title: "Айс мокко",
  description: "Холодный шоколадно-кофейный вкус со сливочной текстурой и умеренной сладостью.",
  size: "0,3/0,4",
  price: "335/380 ₽",
  image: imageFor("source-22"),
  nutrition: nutritionData["source-22"],
};
const source_23: Drink = {
  id: "source-23",
  title: "фраппе американо",
  description: "Холодный взбитый кофе с насыщенным вкусом и сладким послевкусием.",
  size: "0,3/0,4",
  price: "345/390 ₽",
  image: imageFor("source-23"),
  nutrition: nutritionData["source-23"],
};
const source_24: Drink = {
  id: "source-24",
  title: "фраппе мокко",
  description: "Шоколадно-кофейный вкус с холодной плотной текстурой и сливочной пеной.",
  size: "0,3/0,4",
  price: "370/410 ₽",
  image: imageFor("source-24"),
  nutrition: nutritionData["source-24"],
};
const source_25: Drink = {
  id: "source-25",
  title: "фраппе капучино",
  description: "Мягкий кофейно-молочный вкус с воздушной текстурой и сладким послевкусием.",
  size: "0,3/0,4",
  price: "370/410 ₽",
  image: imageFor("source-25"),
  nutrition: nutritionData["source-25"],
};
const source_26: Drink = {
  id: "source-26",
  title: "фраппе матча ваниль",
  description: "Травянистая горчинка матчи, ванильная сладость и сливочная текстура.",
  size: "0,3/0,4",
  price: "370/410 ₽",
  image: imageFor("source-26"),
  nutrition: nutritionData["source-26"],
};
const source_27: Drink = {
  id: "source-27",
  title: "фраппе шоколад",
  description: "Густой шоколадный вкус с холодной текстурой и сливочной пеной.",
  size: "0,3/0,4",
  price: "370/410 ₽",
  image: imageFor("source-27"),
  nutrition: nutritionData["source-27"],
};
const source_28: Drink = {
  id: "source-28",
  title: "фраппе маракуйя кокос",
  description: "Тропическая кислинка маракуйи, сладость манго и сливочный кокосовый оттенок.",
  size: "0,3/0,4",
  price: "390/410 ₽",
  image: imageFor("source-28"),
  nutrition: nutritionData["source-28"],
};
const source_29: Drink = {
  id: "source-29",
  title: "Ореховый крамбл",
  description: "Сливочный ореховый вкус с нотами печенья, карамельной сладостью и хрустящей текстурой.",
  size: "0,3/0,4",
  price: "370/410 ₽",
  image: imageFor("source-29"),
  nutrition: nutritionData["source-29"],
};
const source_30: Drink = {
  id: "source-30",
  title: "облепиха фреш",
  description: "Выраженная кислинка облепихи с банановой сладостью и мягкой медовой нотой.",
  size: "0,3/0,4",
  price: "370/410 ₽",
  image: imageFor("source-30"),
  nutrition: nutritionData["source-30"],
};
const source_31: Drink = {
  id: "source-31",
  title: "матча латте",
  description: "Выраженный травянистый вкус матчи, сливочная текстура и лёгкая горчинка.",
  size: "0,3/0,4",
  price: "325/370 ₽",
  image: imageFor("source-31"),
  nutrition: nutritionData["source-31"],
};
const source_32: Drink = {
  id: "source-32",
  title: "ice матча латте",
  description: "Холодный сливочный вкус матчи с характерной травянистой горчинкой.",
  size: "0,3/0,4",
  price: "325/370 ₽",
  image: imageFor("source-32"),
  nutrition: nutritionData["source-32"],
};
const source_33: Drink = {
  id: "source-33",
  title: "фисташка матча",
  description: "Сливочная матча с насыщенным фисташковым вкусом и лёгким миндальным послевкусием.",
  size: "0,3/0,4",
  price: "345/390 ₽",
  image: imageFor("source-33"),
  nutrition: nutritionData["source-33"],
};
const source_34: Drink = {
  id: "source-34",
  title: "черемуха анчан латте",
  description: "Сливочный вкус с ароматной черёмуховой нотой и лёгкой сладостью.",
  size: "0,3/0,4",
  price: "345/390 ₽",
  image: imageFor("source-34"),
  nutrition: nutritionData["source-34"],
};
const source_35: Drink = {
  id: "source-35",
  title: "ice черемуха анчан латте",
  description: "Холодная сливочная текстура с ароматом черёмухи и мягким сладким послевкусием.",
  size: "0,3/0,4",
  price: "345/390 ₽",
  image: imageFor("source-35"),
  nutrition: nutritionData["source-35"],
};
const source_36: Drink = {
  id: "source-36",
  title: "бамбл матча",
  description: "Сочная цитрусовая сладость апельсина с травянистой горчинкой матчи.",
  size: "0,3/0,4",
  price: "410/450 ₽",
  image: imageFor("source-36"),
  nutrition: nutritionData["source-36"],
};
const source_37: Drink = {
  id: "source-37",
  title: "ice бамбл матча",
  description: "Холодное сочетание апельсиновой сладости, цитрусовой кислинки и травянистой матчи.",
  size: "0,3/0,4",
  price: "410/450 ₽",
  image: imageFor("source-37"),
  nutrition: nutritionData["source-37"],
};
const source_38: Drink = {
  id: "source-38",
  title: "матча манго тоник",
  description: "Сладость манго и кислинка маракуйи с лёгкой горчинкой матчи и тоника.",
  size: "0,3/0,4",
  price: "345/390 ₽",
  image: imageFor("source-38"),
  nutrition: nutritionData["source-38"],
};
const source_39: Drink = {
  id: "source-39",
  title: "КАКАО",
  description: "Густая молочная текстура с насыщенным шоколадным вкусом и лёгкой горчинкой какао.",
  size: "0,2/0,3/0,4",
  price: "305/345/390 ₽",
  image: imageFor("source-39"),
  nutrition: nutritionData["source-39"],
};
const source_40: Drink = {
  id: "source-40",
  title: "ice КАКАО",
  description: "Холодный шоколадный вкус с мягкой молочной текстурой и умеренной сладостью.",
  size: "0,2/0,3/0,4",
  price: "305/345/390 ₽",
  image: imageFor("source-40"),
  nutrition: nutritionData["source-40"],
};
const source_41: Drink = {
  id: "source-41",
  title: "какао бин ту бар",
  description: "Глубокий шоколадный вкус с выраженными оттенками какао и долгим послевкусием.",
  size: "0,2/0,3/0,4",
  price: "345/390/430 ₽",
  image: imageFor("source-41"),
  nutrition: nutritionData["source-41"],
};
const source_42: Drink = {
  id: "source-42",
  title: "листовой чай гречишный",
  description: "Тёплый зерновой аромат с выраженной ореховой нотой и мягким послевкусием.",
  size: "0,3/0,4",
  price: "200/240 ₽",
  image: imageFor("source-42"),
  nutrition: nutritionData["source-42"],
};
const source_43: Drink = {
  id: "source-43",
  title: "листовой ЧАЙ пуэр",
  description: "Глубокий насыщенный вкус с древесными и землистыми оттенками.",
  size: "0,3/0,4",
  price: "200/240 ₽",
  image: imageFor("source-43"),
  nutrition: nutritionData["source-43"],
};
const source_44: Drink = {
  id: "source-44",
  title: "листовой чай молочный улун",
  description: "Мягкий чайный вкус со сливочными и лёгкими цветочными оттенками.",
  size: "0,3/0,4",
  price: "200/240 ₽",
  image: imageFor("source-44"),
  nutrition: nutritionData["source-44"],
};
const source_45: Drink = {
  id: "source-45",
  title: "листовой чай да хун пао",
  description: "Насыщенный чайный вкус с древесными, жареными и тёплыми оттенками.",
  size: "0,3/0,4",
  price: "200/240 ₽",
  image: imageFor("source-45"),
  nutrition: nutritionData["source-45"],
};
const source_46: Drink = {
  id: "source-46",
  title: "листовой чай те гуань инь",
  description: "Свежий ароматный вкус с лёгкими цветочными и травянистыми оттенками.",
  size: "0,3/0,4",
  price: "200/240 ₽",
  image: imageFor("source-46"),
  nutrition: nutritionData["source-46"],
};
const source_47: Drink = {
  id: "source-47",
  title: "листовой чай таежный",
  description: "Лесной травяной аромат с ягодными и пряными оттенками.",
  size: "0,3/0,4",
  price: "200/240 ₽",
  image: imageFor("source-47"),
  nutrition: nutritionData["source-47"],
};
const source_48: Drink = {
  id: "source-48",
  title: "листовой чай травяной",
  description: "Мягкий травяной вкус с лёгкими цветочными и медовыми оттенками.",
  size: "0,3/0,4",
  price: "200/240 ₽",
  image: imageFor("source-48"),
  nutrition: nutritionData["source-48"],
};
const source_49: Drink = {
  id: "source-49",
  title: "малина лаванда лайм",
  description: "Ягодная сладость малины, цветочный аромат лаванды и выразительная кислинка лайма.",
  size: "0,3/0,4",
  price: "335/380 ₽",
  image: imageFor("source-49"),
  nutrition: nutritionData["source-49"],
};
const source_50: Drink = {
  id: "source-50",
  title: "ice малина лаванда лайм",
  description: "Холодный ягодно-цитрусовый вкус с тонким цветочным ароматом лаванды.",
  size: "0,3/0,4",
  price: "335/380 ₽",
  image: imageFor("source-50"),
  nutrition: nutritionData["source-50"],
};
const source_51: Drink = {
  id: "source-51",
  title: "облепиховый чай",
  description: "Яркая кислинка облепихи, сладость апельсина и тёплая пряность корицы.",
  size: "0,3/0,4",
  price: "335/380 ₽",
  image: imageFor("source-51"),
  nutrition: nutritionData["source-51"],
};
const source_52: Drink = {
  id: "source-52",
  title: "ice облепиховый чай",
  description: "Холодный ягодно-цитрусовый вкус с пряным послевкусием корицы.",
  size: "0,3/0,4",
  price: "335/380 ₽",
  image: imageFor("source-52"),
  nutrition: nutritionData["source-52"],
};
const source_53: Drink = {
  id: "source-53",
  title: "Манго маракуйя",
  description: "Тропическая сладость манго с яркой кислинкой маракуйи и цитрусовым оттенком.",
  size: "0,3/0,4",
  price: "335/380 ₽",
  image: imageFor("source-53"),
  nutrition: nutritionData["source-53"],
};
const source_54: Drink = {
  id: "source-54",
  title: "ice Манго маракуйя",
  description: "Холодный тропический вкус с сочной сладостью манго и кислинкой маракуйи.",
  size: "0,3/0,4",
  price: "335/380 ₽",
  image: imageFor("source-54"),
  nutrition: nutritionData["source-54"],
};
const source_55: Drink = {
  id: "source-55",
  title: "Домашний лимонад апельсин",
  description: "Сочный апельсиновый вкус с цитрусовой кислинкой и карамельной сладостью.",
  size: "0,3/0,4",
  price: "325/370 ₽",
  image: imageFor("source-55"),
  nutrition: nutritionData["source-55"],
};
const source_56: Drink = {
  id: "source-56",
  title: "Домашний лимонад лимон",
  description: "Выраженная лимонная кислинка с лёгкой сладостью и игристой текстурой.",
  size: "0,3/0,4",
  price: "325/370 ₽",
  image: imageFor("source-56"),
  nutrition: nutritionData["source-56"],
};
const source_57: Drink = {
  id: "source-57",
  title: "Клубника лайм лимонад",
  description: "Сладкая клубника с яркой кислинкой лайма и лёгкой газированной текстурой.",
  size: "0,3/0,4",
  price: "275/315 ₽",
  image: imageFor("source-57"),
  nutrition: nutritionData["source-57"],
};
const source_58: Drink = {
  id: "source-58",
  title: "Глинтвейн",
  description: "Насыщенный вишнёво-цитрусовый вкус с тёплым ароматом корицы и розмарина.",
  size: "0,3/0,4",
  price: "320/360 ₽",
  image: imageFor("source-58"),
  nutrition: nutritionData["source-58"],
};
const source_59: Drink = {
  id: "source-59",
  title: "Барбарис Латте",
  description: "Сливочный кофейный вкус с ароматной черёмуховой нотой и кисло-сладким послевкусием барбариса.",
  size: "0,3/0,4",
  price: "320/360 ₽",
  image: imageFor("source-59"),
  nutrition: nutritionData["source-59"],
};
const source_60: Drink = {
  id: "source-60",
  title: "Какао белый шоколад",
  description: "Сливочный вкус белого шоколада с тёплой пряной ноткой имбиря.",
  size: "0,3/0,4",
  price: "370/410 ₽",
  image: imageFor("source-60"),
  nutrition: nutritionData["source-60"],
};
const source_61: Drink = {
  id: "source-61",
  title: "Ходзича Латте",
  description: "Жареные чайные оттенки ходзичи, сливочная текстура овсяного молока, солоноватая карамель и лёгкая острота сладкого чили.",
  size: "0,3/0,4",
  price: "320/360 ₽",
  image: imageFor("source-61"),
  nutrition: nutritionData["source-61"],
};

const food_01: Drink = {
  id: "food-01",
  title: "Сэндвич с курицей",
  description:
    "Сочный, хрустящий и сливочный одновременно: нежная курица, свежие овощи и солоноватые нотки каперсов.",
  size: "",
  price: "270 ₽",
  image: imageFor("food-01"),
  nutrition: nutritionData["food-01"],
};
const food_02: Drink = {
  id: "food-02",
  title: "Сэндвич с авокадо и тунцом",
  description:
    "Сливочный авокадо и творожный сыр дополняются нежным тунцом, свежим огурцом и лёгкой лимонной кислинкой.",
  size: "",
  price: "270 ₽",
  image: imageFor("food-02"),
  nutrition: nutritionData["food-02"],
};
const food_03: Drink = {
  id: "food-03",
  title: "Сэндвич с лососем",
  description: "Слабосолёный лосось со сливочным сыром и свежим хрустящим огурцом.",
  size: "",
  price: "360 ₽",
  image: imageFor("food-03"),
  nutrition: nutritionData["food-03"],
};
const food_04: Drink = {
  id: "food-04",
  title: "Рап с курицей",
  description:
    "Сочная курица, свежие овощи и расплавленный сыр с медово-горчичным соусом — сочетание сладости, сливочности и лёгкой остроты.",
  size: "",
  price: "270 ₽",
  image: imageFor("food-04"),
  nutrition: nutritionData["food-04"],
};
const food_05: Drink = {
  id: "food-05",
  title: "Рап Гриль",
  description: "Сочная курица и сыр с насыщенным соусом гриль и свежими овощами.",
  size: "",
  price: "270 ₽",
  image: imageFor("food-05"),
  nutrition: nutritionData["food-05"],
};
const food_06: Drink = {
  id: "food-06",
  title: "Ролл с курицей и морковью по-корейски",
  description:
    "Пряная морковь, сочная курица, свежие овощи и сладкий чили — яркое сочетание остроты, сладости и свежести.",
  size: "",
  price: "270 ₽",
  image: imageFor("food-06"),
  nutrition: nutritionData["food-06"],
};
const food_07: Drink = {
  id: "food-07",
  title: "Салат Цезарь",
  description:
    "Хрустящий салат и сухарики, сочная курица, солоноватый Пармезан и пикантные каперсы в классическом сочетании.",
  size: "",
  price: "350 ₽",
  image: imageFor("food-07"),
  nutrition: nutritionData["food-07"],
};
const food_08: Drink = {
  id: "food-08",
  title: "Круассан Классический",
  description:
    "Хрустящие слоёные корочки и мягкая сердцевина с тонкой сливочно-карамельной сладостью.",
  size: "",
  price: "170 ₽",
  image: imageFor("food-08"),
  nutrition: nutritionData["food-08"],
};
const food_09: Drink = {
  id: "food-09",
  title: "Круассан с карамелью",
  description: "Хрустящий круассан с тягучей солёной карамелью и ореховым хрустом.",
  size: "",
  price: "250 ₽",
  image: imageFor("food-09"),
  nutrition: nutritionData["food-09"],
};
const food_10: Drink = {
  id: "food-10",
  title: "Круассан с шоколадом",
  description:
    "Воздушные слои теста с густой шоколадной начинкой и насыщенным сливочным послевкусием.",
  size: "",
  price: "250 ₽",
  image: imageFor("food-10"),
  nutrition: nutritionData["food-10"],
};
const food_11: Drink = {
  id: "food-11",
  title: "Круассан с Нутеллой",
  description:
    "Шоколадно-ореховая начинка, карамельная сладость и хрустящий миндаль в румяном слоёном тесте.",
  size: "",
  price: "250 ₽",
  image: imageFor("food-11"),
  nutrition: nutritionData["food-11"],
};
const food_12: Drink = {
  id: "food-12",
  title: "Банановый хлеб",
  description:
    "Мягкий и влажный мякиш с насыщенным вкусом спелого банана и тёплой ореховой ноткой.",
  size: "",
  price: "180 ₽",
  image: imageFor("food-12"),
  nutrition: nutritionData["food-12"],
};
const food_13: Drink = {
  id: "food-13",
  title: "Лимонный кекс",
  description:
    "Мягкий сливочный мякиш с яркой лимонной кислинкой и тонкой сладостью сахарной пудры.",
  size: "",
  price: "180 ₽",
  image: imageFor("food-13"),
  nutrition: nutritionData["food-13"],
};
const food_14: Drink = {
  id: "food-14",
  title: "Брауни",
  description:
    "Плотный влажный мякиш с глубоким шоколадным вкусом и лёгкой горчинкой какао.",
  size: "",
  price: "210 ₽",
  image: imageFor("food-14"),
  nutrition: nutritionData["food-14"],
};
const food_15: Drink = {
  id: "food-15",
  title: "Муравейник",
  description:
    "Хрустящая песочная крошка с густой сливочно-карамельной сладостью варёной сгущёнки.",
  size: "",
  price: "170 ₽",
  image: imageFor("food-15"),
  nutrition: nutritionData["food-15"],
};
const food_16: Drink = {
  id: "food-16",
  title: "Черничный пирог",
  description:
    "Нежная сливочная начинка, сочная черника с приятной кислинкой и хрустящий миндальный акцент.",
  size: "",
  price: "230 ₽",
  image: imageFor("food-16"),
  nutrition: nutritionData["food-16"],
};
const food_17: Drink = {
  id: "food-17",
  title: "Чизкейк Сан-Себастьян",
  description:
    "Кремовая, почти тающая текстура с насыщенным сливочным вкусом и молочно-шоколадным послевкусием.",
  size: "",
  price: "270 ₽",
  image: imageFor("food-17"),
  nutrition: nutritionData["food-17"],
};
const food_18: Drink = {
  id: "food-18",
  title: "Десерт Красный бархат",
  description:
    "Мягкий шоколадный бисквит со сливочным кремом — сочетание какао, сливочности и лёгкой сладости.",
  size: "",
  price: "260 ₽",
  image: imageFor("food-18"),
  nutrition: nutritionData["food-18"],
};
const food_19: Drink = {
  id: "food-19",
  title: "Десерт Шоколадно молочный",
  description:
    "Насыщенный шоколадный вкус с нежным сливочным слоем и хрустящими шоколадно-молочными шариками.",
  size: "",
  price: "260 ₽",
  image: imageFor("food-19"),
  nutrition: nutritionData["food-19"],
};
const food_20: Drink = {
  id: "food-20",
  title: "Десерт Сникерс",
  description:
    "Глубокий шоколадный вкус, сливочная текстура и насыщенная арахисовая нота с лёгкой солоноватостью.",
  size: "",
  price: "260 ₽",
  image: imageFor("food-20"),
  nutrition: nutritionData["food-20"],
};
const food_21: Drink = {
  id: "food-21",
  title: "Десерт Чиа-пудинг с манго",
  description:
    "Кремовая кокосовая текстура, сочное манго, банановая сладость и свежая ягодная кислинка.",
  size: "",
  price: "260 ₽",
  image: imageFor("food-21"),
  nutrition: nutritionData["food-21"],
};
const food_22: Drink = {
  id: "food-22",
  title: "Сырники с джемом",
  description:
    "Мягкие сырники с выраженным творожным вкусом, ванильной ноткой и кисло-сладким ягодным соусом.",
  size: "",
  price: "250 ₽",
  image: imageFor("food-22"),
  nutrition: nutritionData["food-22"],
};
const food_23: Drink = {
  id: "food-23",
  title: "Творожное кольцо",
  description:
    "Воздушное заварное тесто с нежной сливочно-творожной начинкой и тонкой сахарной сладостью.",
  size: "",
  price: "170 ₽",
  image: imageFor("food-23"),
  nutrition: nutritionData["food-23"],
};
const food_24: Drink = {
  id: "food-24",
  title: "Кокосанка",
  description:
    "Плотная, чуть тягучая текстура и насыщенный вкус кокоса с лёгкой карамельной ноткой.",
  size: "",
  price: "80 ₽",
  image: imageFor("food-24"),
  nutrition: nutritionData["food-24"],
};
const food_25: Drink = {
  id: "food-25",
  title: "Пирожное Картошка в бельгийском шоколаде",
  description:
    "Плотная шоколадная текстура с насыщенным какао-вкусом и тонким слоем хрустящей шоколадной глазури.",
  size: "",
  price: "",
  image: imageFor("food-25"),
  nutrition: nutritionData["food-25"],
};
const food_26: Drink = {
  id: "food-26",
  title: "крекер в молочном шоколаде",
  description:
    "Хрустящий солоноватый крекер и нежная молочная шоколадная глазурь — контраст сладости и соли.",
  size: "",
  price: "250 ₽",
  image: imageFor("food-26"),
  nutrition: nutritionData["food-26"],
};
const food_27: Drink = {
  id: "food-27",
  title: "клубника в шоколаде",
  description:
    "Концентрированный ягодный вкус с приятной кислинкой и сливочной сладостью белого шоколада.",
  size: "",
  price: "270 ₽",
  image: imageFor("food-27"),
  nutrition: nutritionData["food-27"],
};
const food_28: Drink = {
  id: "food-28",
  title: "вафельное драже",
  description:
    "Хрустящая вафельная текстура в сладкой шоколадной оболочке с насыщенным какао-послевкусием.",
  size: "",
  price: "250 ₽",
  image: imageFor("food-28"),
  nutrition: nutritionData["food-28"],
};
const food_29: Drink = {
  id: "food-29",
  title: "Маракуйя сушеная",
  description:
    "Плотная фруктовая текстура и концентрированный вкус маракуйи с выраженной кисло-сладкой нотой.",
  size: "",
  price: "300 ₽",
  image: imageFor("food-29"),
  nutrition: nutritionData["food-29"],
};
const food_30: Drink = {
  id: "food-30",
  title: "Ананас сушеный",
  description: "Плотные фруктовые кусочки с насыщенной ананасовой сладостью и лёгкой кислинкой.",
  size: "",
  price: "300 ₽",
  image: imageFor("food-30"),
  nutrition: nutritionData["food-30"],
};
const food_31: Drink = {
  id: "food-31",
  title: "Миндаль жареный",
  description: "Хрустящий миндаль с насыщенным ореховым вкусом и тёплыми обжаренными нотами.",
  size: "",
  price: "250 ₽",
  image: imageFor("food-31"),
  nutrition: nutritionData["food-31"],
};

export const menuCategories: MenuCategory[] = [
  {
    id: "black-coffee",
    title: "Черный кофе",
    subtitle: "Классика эспрессо и фильтр-кофе",
    items: [
      source_01,
      source_02,
      source_03,
      source_04,
      source_05,
      source_06,
      source_07,
      source_08,
      source_09,
      source_10,
      source_11,
      source_12,
      source_13,
      source_14,
    ],
  },
  {
    id: "cold-coffee",
    title: "Холодный кофе",
    subtitle: "Освежающие кофейные напитки",
    items: [source_15, source_16, source_17, source_18],
  },
  {
    id: "coffee-mix",
    title: "Кофе микс",
    subtitle: "Кофейные напитки с яркими добавками",
    items: [source_19, source_20, source_21, source_22],
  },
  {
    id: "frappe",
    title: "Фраппе",
    subtitle: "Холодные напитки с сырной пеной",
    items: [source_23, source_24, source_25, source_26, source_27, source_28, source_29, source_30],
  },
  {
    id: "matcha-cocoa",
    title: "Матча / какао",
    subtitle: "Матча, шоколад и молочные напитки",
    items: [
      source_31,
      source_32,
      source_33,
      source_34,
      source_35,
      source_36,
      source_37,
      source_38,
      source_39,
      source_40,
      source_41,
    ],
  },
  {
    id: "tea-lemonade",
    title: "Чай / лимонад",
    subtitle: "Чайные сборы и домашние лимонады",
    items: [
      source_42,
      source_43,
      source_44,
      source_45,
      source_46,
      source_47,
      source_48,
      source_49,
      source_50,
      source_51,
      source_52,
      source_53,
      source_54,
      source_55,
      source_56,
      source_57,
    ],
  },
  {
    id: "author",
    title: "Авторские напитки",
    subtitle: "Сезонные рецепты команды бариста",
    items: [source_58, source_59, source_60, source_61],
  },
  {
    id: "food",
    title: "Еда",
    subtitle: "Сэндвичи, рапы и свежие блюда",
    items: [food_01, food_02, food_03, food_04, food_05, food_06, food_07],
  },
  {
    id: "desserts",
    title: "Десерты",
    subtitle: "Выпечка и десерты собственного производства",
    items: [
      food_08,
      food_09,
      food_10,
      food_11,
      food_12,
      food_13,
      food_14,
      food_15,
      food_16,
      food_17,
      food_18,
      food_19,
      food_20,
      food_21,
      food_22,
      food_23,
      food_24,
      food_25,
    ],
  },
  {
    id: "snacks",
    title: "Снеки",
    subtitle: "Сладкие и полезные перекусы",
    items: [food_26, food_27, food_28, food_29, food_30, food_31],
  },
];

/**
 * Превью на главной: понемногу из каждой категории —
 * от классики и альтернативы до чая, еды, десертов и снеков.
 * 11 карточек + плитка «Меню целиком» = 12 тайлов (ровно по сеткам 4/3/2).
 */
export const featured: Drink[] = [
  source_09, // капучино — черный кофе
  food_01, // сэндвич с курицей — еда
  source_31, // матча латте — матча / какао
  food_08, // круассан классический — десерты
  source_15, // эспрессо тоник — холодный кофе
  source_51, // облепиховый чай — чай / лимонад
  source_25, // фраппе капучино — фраппе
  food_31, // миндаль жареный — снеки
  source_04, // V60 — черный кофе (альтернатива)
  source_19, // латте халва — кофе микс
  source_58, // глинтвейн — авторские напитки
];

/** Всего позиций в меню (для счётчика «Ещё N+ позиций» на главной). */
export const totalMenuItems = menuCategories.reduce(
  (sum, category) => sum + category.items.length,
  0,
);
