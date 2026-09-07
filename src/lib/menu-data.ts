import espresso from "@/assets/espresso.jpg";
import americano from "@/assets/americano.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import latte from "@/assets/latte.jpg";
import flatwhite from "@/assets/flatwhite.jpg";
import raf from "@/assets/raf.jpg";
import filter from "@/assets/filter.jpg";
import cold from "@/assets/cold.jpg";
import tea from "@/assets/tea.jpg";
import dessert1 from "@/assets/dessert-1.jpg";
import dessert2 from "@/assets/dessert-2.jpg";
import drinkOfMonth from "@/assets/drink-of-month.jpg";
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
  /** Состав и КБЖУ на порцию. Значения редактируются в `nutrition-data.ts`. */
  nutrition: Nutrition;
};

export const featured: Drink[] = [
  {
    id: "espresso",
    title: "Эспрессо",
    description: "Плотный шот с ореховой сладостью и долгим карамельным послевкусием.",
    size: "60 мл",
    price: "210 ₽",
    image: espresso,
    nutrition: nutritionData.espresso,
  },
  {
    id: "americano",
    title: "Американо",
    description: "Эспрессо и мягкая горячая вода — чистый вкус зерна без лишнего.",
    size: "250 мл",
    price: "200 ₽",
    image: americano,
    nutrition: nutritionData.americano,
  },
  {
    id: "cappuccino",
    title: "Капучино",
    description: "Бархатная молочная пена, тёплые тона какао и молочного шоколада.",
    size: "250 мл",
    price: "280 ₽",
    image: cappuccino,
    nutrition: nutritionData.cappuccino,
  },
  {
    id: "latte",
    title: "Латте",
    description: "Нежный и обволакивающий: много молока, мягкая кофейная основа.",
    size: "350 мл",
    price: "300 ₽",
    image: latte,
    nutrition: nutritionData.latte,
  },
  {
    id: "flat-white",
    title: "Флэт Уайт",
    description: "Двойной ристретто и тонкий слой микропены. Крепко и сливочно.",
    size: "200 мл",
    price: "310 ₽",
    image: flatwhite,
    nutrition: nutritionData["flat-white"],
  },
  {
    id: "raf",
    title: "Раф",
    description: "Сливки, ваниль и эспрессо, взбитые вместе до шелковой текстуры.",
    size: "300 мл",
    price: "340 ₽",
    image: raf,
    nutrition: nutritionData.raf,
  },
  {
    id: "filter",
    title: "Фильтр-кофе",
    description: "Альтернатива на V60: ягодная кислотность и чайное тело.",
    size: "300 мл",
    price: "290 ₽",
    image: filter,
    nutrition: nutritionData.filter,
  },
];

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: Drink[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "coffee",
    title: "Кофе",
    subtitle: "Классика на зерне собственной обжарки",
    items: featured.slice(0, 6),
  },
  {
    id: "author",
    title: "Авторские напитки",
    subtitle: "Сезонные рецепты от нашей команды бариста",
    items: [
      {
        id: "maple",
        title: "Кленовый латте",
        description: "Кленовый сироп, корица и бадьян — напиток месяца.",
        size: "350 мл",
        price: "390 ₽",
        image: drinkOfMonth,
        nutrition: nutritionData.maple,
      },
      {
        id: "honey-raf",
        title: "Раф на гречишном мёде",
        description: "Тёмный мёд, морская соль и сливки. Плотно и уютно.",
        size: "300 мл",
        price: "380 ₽",
        image: raf,
        nutrition: nutritionData["honey-raf"],
      },
      {
        id: "orange-espresso",
        title: "Эспрессо-тоник с апельсином",
        description: "Свежий тоник, цедра апельсина и яркий шот.",
        size: "300 мл",
        price: "360 ₽",
        image: cold,
        nutrition: nutritionData["orange-espresso"],
      },
      {
        id: "cocoa",
        title: "Какао на топлёном молоке",
        description: "Бельгийский шоколад и топлёное молоко. Для холодных дней.",
        size: "300 мл",
        price: "320 ₽",
        image: latte,
        nutrition: nutritionData.cocoa,
      },
    ],
  },
  {
    id: "cold",
    title: "Холодный кофе",
    subtitle: "Для тёплой погоды и долгих прогулок",
    items: [
      {
        id: "iced-latte",
        title: "Айс латте",
        description: "Холодное молоко, лёд и двойной эспрессо.",
        size: "400 мл",
        price: "330 ₽",
        image: cold,
        nutrition: nutritionData["iced-latte"],
      },
      {
        id: "cold-brew",
        title: "Колд брю",
        description: "16 часов холодной экстракции: мягко, сладко, без горечи.",
        size: "350 мл",
        price: "350 ₽",
        image: americano,
        nutrition: nutritionData["cold-brew"],
      },
      {
        id: "bumble",
        title: "Бамбл",
        description: "Апельсиновый фреш, лёд и эспрессо слоями.",
        size: "400 мл",
        price: "370 ₽",
        image: filter,
        nutrition: nutritionData.bumble,
      },
      {
        id: "iced-flat",
        title: "Айс флэт уайт",
        description: "Крепкая версия на холодном молоке.",
        size: "300 мл",
        price: "340 ₽",
        image: flatwhite,
        nutrition: nutritionData["iced-flat"],
      },
    ],
  },
  {
    id: "tea",
    title: "Чай",
    subtitle: "Листовой чай и авторские травяные сборы",
    items: [
      {
        id: "sea-buckthorn",
        title: "Облепиха с имбирём",
        description: "Согревающий сбор с мёдом и свежим имбирём.",
        size: "450 мл",
        price: "320 ₽",
        image: tea,
        nutrition: nutritionData["sea-buckthorn"],
      },
      {
        id: "jasmine",
        title: "Зелёный с жасмином",
        description: "Мягкий цветочный аромат, чистое послевкусие.",
        size: "450 мл",
        price: "280 ₽",
        image: tea,
        nutrition: nutritionData.jasmine,
      },
      {
        id: "herbal",
        title: "Травяной «Покровка»",
        description: "Чабрец, мята и липа — наш фирменный сбор.",
        size: "450 мл",
        price: "300 ₽",
        image: tea,
        nutrition: nutritionData.herbal,
      },
    ],
  },
  {
    id: "desserts",
    title: "Десерты",
    subtitle: "Выпекаем каждое утро на месте",
    items: [
      {
        id: "cheesecake",
        title: "Баскский чизкейк",
        description: "Карамелизованная корочка и кремовая середина.",
        size: "140 г",
        price: "420 ₽",
        image: dessert1,
        nutrition: nutritionData.cheesecake,
      },
      {
        id: "croissant",
        title: "Круассан",
        description: "36 часов расстойки, французское масло, хрустящие слои.",
        size: "90 г",
        price: "230 ₽",
        image: dessert2,
        nutrition: nutritionData.croissant,
      },
      {
        id: "medovik",
        title: "Медовик",
        description: "Домашний рецепт с тонкими коржами и сметанным кремом.",
        size: "150 г",
        price: "390 ₽",
        image: dessert1,
        nutrition: nutritionData.medovik,
      },
      {
        id: "cinnamon",
        title: "Синнабон с кардамоном",
        description: "Тёплая булочка с корицей и скандинавским кардамоном.",
        size: "120 г",
        price: "290 ₽",
        image: dessert2,
        nutrition: nutritionData.cinnamon,
      },
    ],
  },
];
