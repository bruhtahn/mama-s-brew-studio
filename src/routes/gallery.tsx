import { PhotoReplacementBadge } from "@/components/site/PhotoReplacementBadge";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { galleryFilters, galleryItems, type GalleryCategory } from "@/lib/gallery-data";
import { cn } from "@/lib/utils";

const title = "Галерея — Мама варит кофе";
const description =
  "Фотографии кофейни «Мама варит кофе»: интерьер, кофе, десерты, бариста и атмосфера на Покровке, 8.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/gallery" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = galleryItems.filter((i) => filter === "all" || i.category === filter);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIndex((cur) => (cur === null ? cur : (cur + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : items[openIndex];

  return (
    <>
      <PageHero
        eyebrow="Галерея"
        title="Кофейня в кадрах"
        description="Фактуры стен, большие окна, общие столы и уголки для двоих. Рассмотрите пространство и выберите место под своё настроение."
      />

      <section className="bg-background py-14 sm:py-20">
        <div className="container-x">
          <div
            role="tablist"
            aria-label="Категории галереи"
            className="-mx-5 flex gap-x-2 overflow-x-auto border-b border-border px-5 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {galleryFilters.map((f) => (
              <button
                key={f.id}
                role="tab"
                type="button"
                aria-selected={filter === f.id}
                onClick={() => {
                  setFilter(f.id);
                  setOpenIndex(null);
                }}
                className={cn(
                  "-mb-px shrink-0 cursor-pointer whitespace-nowrap rounded-t-lg border-b-2 px-5 py-3.5 text-base tracking-wide transition-colors duration-300",
                  filter === f.id
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-12 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
            <AnimatePresence mode="popLayout">
              {items.map((item, i) => (
                <motion.button
                  key={item.id}
                  layout
                  type="button"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setOpenIndex(i)}
                  aria-label={`Открыть фото: ${item.alt}`}
                  className="group relative block w-full overflow-hidden rounded-2xl bg-muted break-inside-avoid"
                >
                  {item.needsReplacement && <PhotoReplacementBadge />}
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {current ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/95 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Закрыть"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Предыдущее фото"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10 sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Следующее фото"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10 sm:right-8"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
            <motion.figure
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[85dvh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
              {current.needsReplacement && <PhotoReplacementBadge />}
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[75dvh] w-auto rounded-2xl object-contain"
              />
              </div>
              <figcaption className="mt-4 text-center text-sm text-cream/60">
                {current.alt}
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <CtaSection />
    </>
  );
}
