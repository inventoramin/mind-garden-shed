import { Link, createFileRoute } from "@tanstack/react-router";
import { newsArticles } from "../data/news";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Archive Desk Knowledge News" },
      {
        name: "description",
        content: "Browse curated knowledge updates by title and open each story for full text.",
      },
      { property: "og:title", content: "Archive Desk Knowledge News" },
      {
        property: "og:description",
        content: "A focused knowledge management news reader with title lists and full article pages.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:py-16">
        <header className="editorial-reveal grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Knowledge management system</p>
            <h1 className="mt-5 max-w-5xl text-6xl font-bold leading-[0.9] text-ink sm:text-7xl lg:text-8xl">
              Archive Desk
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
              A calm reading room for curated news: scan titles, open the story, and keep the full text close to the source.
            </p>
          </div>
          <div className="border border-border bg-surface p-6 shadow-editorial backdrop-blur">
            <p className="text-4xl font-bold text-primary">{newsArticles.length}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Filed stories</p>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              Updated editorially for teams that need fast access to reliable knowledge.
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
                  <span className="font-bold uppercase tracking-[0.18em] text-accent">{article.category}</span>
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-ink group-hover:text-primary sm:text-4xl">
                  {article.title}
                </h2>
                <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{article.summary}</p>
              </div>
              <span className="editorial-reveal text-3xl text-primary transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}
