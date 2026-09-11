import interior1 from "@/assets/official/about-2.jpg";
import interior2 from "@/assets/official/about-3.jpg";
import barista1 from "@/assets/official/about-6.jpg";
import barista2 from "@/assets/barista-2.webp";
import dessert1 from "@/assets/dessert-1.webp";
import dessert2 from "@/assets/dessert-2.webp";
import atmosphere from "@/assets/atmosphere.webp";
import beans from "@/assets/official/about-11.jpg";
import cappuccino from "@/assets/official/about-10.jpg";
import filter from "@/assets/official/about-7.jpg";
import drinkOfMonth from "@/assets/drink-of-month.webp";
import hero from "@/assets/official/about-4.jpg";

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
  needsReplacement: boolean;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: interior1, alt: "Уголок кофейни с креслами и надписью Третье место", category: "interior", needsReplacement: false },
  { id: "g2", src: cappuccino, alt: "Фирменный стакан Мама варит кофе среди кофейных зёрен", category: "coffee", needsReplacement: false },
  { id: "g3", src: barista1, alt: "Обжарщик проверяет кофе у ростера", category: "coffee", needsReplacement: false },
  { id: "g4", src: dessert1, alt: "Баскский чизкейк с чашкой кофе", category: "desserts", needsReplacement: true },
  { id: "g5", src: atmosphere, alt: "Гости за столиком у окна", category: "atmosphere", needsReplacement: true },
  { id: "g6", src: beans, alt: "Обжаренные кофейные зёрна крупным планом", category: "coffee", needsReplacement: false },
  { id: "g7", src: interior2, alt: "Кресло и растения в интерьере кофейни", category: "interior", needsReplacement: false },
  { id: "g8", src: barista2, alt: "Руки бариста темперуют кофе", category: "baristas", needsReplacement: true },
  { id: "g9", src: dessert2, alt: "Свежие круассаны", category: "desserts", needsReplacement: true },
  { id: "g10", src: filter, alt: "Кофейные зёрна в охладителе ростера", category: "coffee", needsReplacement: false },
  { id: "g11", src: hero, alt: "Диван и растения в индустриальном интерьере кофейни", category: "atmosphere", needsReplacement: false },
  { id: "g12", src: drinkOfMonth, alt: "Кленовый латте со специями", category: "coffee", needsReplacement: true },
];
