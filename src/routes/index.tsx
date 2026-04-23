import { Link, createFileRoute } from "@tanstack/react-router";
import { getNewsArticles } from "../data/news";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "میز آرشیو خبرهای دانش" },
      {
        name: "description",
        content: "خبرهای منتخب مدیریت دانش را با عنوان مرور کنید و متن کامل هر خبر را بخوانید.",
      },
      { property: "og:title", content: "میز آرشیو خبرهای دانش" },
      {
        property: "og:description",
        content: "یک خبرخوان فارسی برای مدیریت دانش با فهرست عنوان‌ها و صفحه کامل هر خبر.",
      },
    ],
  }),
  loader: () => getNewsArticles(),
  component: Index,
});

function Index() {
  const newsArticles = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:py-16">
        <header className="editorial-reveal grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="text-sm font-bold text-accent">سیستم مدیریت دانش</p>
            <h1 className="mt-5 max-w-5xl text-6xl font-bold leading-[0.9] text-ink sm:text-7xl lg:text-8xl">
              میز آرشیو
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
              یک اتاق مطالعه آرام برای خبرهای منتخب: عنوان‌ها را مرور کنید، خبر را باز کنید و متن کامل را نزدیک به منبع نگه دارید.
            </p>
          </div>
          <div className="border border-border bg-surface p-6 shadow-editorial backdrop-blur">
            <p className="text-4xl font-bold text-primary">{newsArticles.length}</p>
            <p className="mt-2 text-sm font-semibold text-muted-foreground">خبر ثبت‌شده</p>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              برای تیم‌هایی به‌روز می‌شود که به دسترسی سریع به دانش قابل اعتماد نیاز دارند.
            </p>
          </div>
        </header>

        <section className="mt-10 grid gap-5" aria-label="News articles">
          {newsArticles.map((article, index) => (
            <Link
              key={article.slug}
              to="/news/$slug"
              params={{ slug: article.slug }}
              className="press-hover group grid gap-5 border border-border bg-card p-6 shadow-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:grid-cols-[96px_1fr_auto] sm:items-center"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="editorial-reveal flex h-20 w-20 items-center justify-center border border-border bg-paper font-serif text-3xl font-bold text-accent">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="editorial-reveal">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="font-bold text-accent">{article.category}</span>
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-ink group-hover:text-primary sm:text-4xl">
                  {article.title}
                </h2>
                <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{article.summary}</p>
              </div>
              <span className="editorial-reveal text-3xl text-primary transition-transform group-hover:-translate-x-1" aria-hidden="true">
                ←
              </span>
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}
