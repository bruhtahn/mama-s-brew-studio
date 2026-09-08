import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import {
  FeaturedCoffee,
  WhyUs,
  DrinkOfMonth,
  FoodPromo,
  GalleryPreview,
  Testimonials,
} from "@/components/home/Sections";
import { CtaSection } from "@/components/site/CtaSection";

const title = "Мама варит кофе — кофейня на Покровке, 8 в Москве";
const description =
  "Спешелти-кофейня «Мама варит кофе» на Покровке, 8. Свежая обжарка, авторские напитки, домашние десерты. Ежедневно 07:00–23:00.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturedCoffee />
      <WhyUs />
      <DrinkOfMonth />
      <FoodPromo />
      <GalleryPreview />
      <Testimonials />
      <CtaSection />
    </>
  );
}
