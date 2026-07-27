import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SITE } from "@/lib/site";

const title = "Политика конфиденциальности — Мама варит кофе";
const description =
  "Как кофейня «Мама варит кофе» собирает, использует и защищает персональные данные посетителей сайта.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/privacy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    heading: "Какие данные мы собираем",
    body: "Только те, что вы отправляете через форму обратной связи: имя, телефон или e-mail и текст сообщения. Мы не запрашиваем платёжные данные и не собираем документы.",
  },
  {
    heading: "Зачем нам эти данные",
    body: "Чтобы ответить на ваш вопрос, подтвердить бронь стола или обсудить сотрудничество. Мы не используем контакты для рассылок без вашего отдельного согласия.",
  },
  {
    heading: "Кому мы передаём данные",
    body: "Никому. Данные обрабатываются внутри команды кофейни и не передаются третьим лицам, кроме случаев, прямо предусмотренных законодательством РФ.",
  },
  {
    heading: "Сколько мы храним данные",
    body: "Обращения хранятся не дольше одного года с момента получения, после чего удаляются.",
  },
  {
    heading: "Файлы cookie",
    body: "Сайт использует технические cookie, необходимые для корректной работы страниц, и анонимную статистику посещений. Их можно отключить в настройках браузера.",
  },
  {
    heading: "Ваши права",
    body: `Вы можете запросить сведения о своих данных, их исправление или удаление. Напишите нам по адресу ${SITE.address} или позвоните по телефону ${SITE.phone}.`,
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Документы"
        title="Политика конфиденциальности"
        description="Коротко и по делу: какие данные мы получаем, зачем они нужны и как их удалить."
      />
      <section className="bg-background py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((s) => (
              <article key={s.heading}>
                <h2 className="font-display text-2xl font-bold">{s.heading}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
            <p className="rule-line" aria-hidden />
            <p className="text-sm text-muted-foreground">
              Последнее обновление: 27 июля 2026 года.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
