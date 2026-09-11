export const SITE = {
  name: "Мама варит кофе",
  tagline: "Ваше третье место на Покровке. Кофе из Уфы, встречи и время для себя.",
  address: "Москва, ул. Покровка, 8",
  phone: "+7 (925) 561-19-84",
  phoneHref: "tel:+79255611984",
  url: "https://mamavaritcoffee.ru",
  hours: "Ежедневно 07:00–23:00",
  routeUrl: "https://yandex.ru/maps/?text=Москва, улица Покровка, 8",
  mapEmbed:
    "https://yandex.ru/map-widget/v1/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%2C%208&z=17",
} as const;

export const NAV = [
  { to: "/", label: "Главная" },
  { to: "/menu", label: "Меню" },
  { to: "/about", label: "О нас" },
  { to: "/gallery", label: "Галерея" },
  { to: "/contacts", label: "Контакты" },
] as const;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: SITE.name,
  description: SITE.tagline,
  url: SITE.url,
  telephone: "+79255611984",
  servesCuisine: "Кофе, десерты",
  priceRange: "₽₽",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Покровка, 8",
    addressLocality: "Москва",
    addressCountry: "RU",
  },
  geo: { "@type": "GeoCoordinates", latitude: 55.759, longitude: 37.643 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "23:00",
    },
  ],
};
