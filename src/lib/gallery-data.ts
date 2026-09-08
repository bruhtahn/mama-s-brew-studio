import interior1 from "@/assets/interior-1.webp";
import interior2 from "@/assets/interior-2.webp";
import barista1 from "@/assets/barista-1.webp";
import barista2 from "@/assets/barista-2.webp";
import dessert1 from "@/assets/dessert-1.webp";
import dessert2 from "@/assets/dessert-2.webp";
import atmosphere from "@/assets/atmosphere.webp";
import beans from "@/assets/beans.webp";
import cappuccino from "@/assets/cappuccino.webp";
import filter from "@/assets/filter.webp";
import drinkOfMonth from "@/assets/drink-of-month.webp";
import hero from "@/assets/hero.webp";

export type GalleryCategory = "interior" | "coffee" | "desserts" | "baristas" | "atmosphere";

export const galleryFilters: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "interior", label: "Интерьер" },
  { id: "coffee", label: "Кофе" },
  { id: "desserts", label: "Десерты" },
  { id: "baristas", label: "Бариста" },
  { id: "atmosphere", label: "Атмосфера" },
];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: interior1, alt: "Светлый зал кофейни с деревянной мебелью", category: "interior" },
  { id: "g2", src: cappuccino, alt: "Капучино с латте-артом", category: "coffee" },
  { id: "g3", src: barista1, alt: "Бариста за кофемашиной", category: "baristas" },
  { id: "g4", src: dessert1, alt: "Баскский чизкейк с чашкой кофе", category: "desserts" },
  { id: "g5", src: atmosphere, alt: "Гости за столиком у окна", category: "atmosphere" },
  { id: "g6", src: beans, alt: "Обжаренные зёрна спешелти кофе", category: "coffee" },
  { id: "g7", src: interior2, alt: "Уютный уголок с книгами и кофе", category: "interior" },
  { id: "g8", src: barista2, alt: "Руки бариста темперуют кофе", category: "baristas" },
  { id: "g9", src: dessert2, alt: "Свежие круассаны", category: "desserts" },
  { id: "g10", src: filter, alt: "Заваривание фильтр-кофе на V60", category: "coffee" },
  { id: "g11", src: hero, alt: "Бариста готовит латте у стойки", category: "atmosphere" },
  { id: "g12", src: drinkOfMonth, alt: "Кленовый латте со специями", category: "coffee" },
];
