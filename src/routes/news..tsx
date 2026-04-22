import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { getNewsArticle } from "../data/news";

function NewsNotFound() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-2xl border border-border bg-surface p-8 shadow-editorial">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Missing note</p>
        <h1 className="mt-4 text-4xl font-bold text-ink">This news item was not found.</h1>
        <Link className="mt-8 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline" to="/">
          Back to news desk
        </Link>
      </div>
    </main>
  );
}

export const Route = createFileRoute("/news/")({
  loader: ({ params }) => {
    const article = getNewsArticle(params.slug);
    if (!article) {
      throw notFound();
    }
    return article;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.title} — Archive Desk` },
      { name: "description", content: loaderData.summary },
      { property: "og:title", content: `${loaderData.title} — Archive Desk` },
      { property: "og:description", content: loaderData.summary },
    ],
  }),
  component: NewsDetailPage,
  notFoundComponent: NewsNotFound,
});

function NewsDetailPage() {
  const article = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-[260px_1fr] lg:py-16">
        <aside className="editorial-reveal lg:sticky lg:top-10 lg:self-start">
          <Link className="inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline" to="/">
            ← News desk
          </Link>
          <div className="mt-8 border-l-2 border-accent pl-5">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">{article.category}</p>
            <p className="mt-3 text-sm text-muted-foreground">{article.date}</p>
            <p className="mt-1 text-sm text-muted-foreground">{article.readTime}</p>
          </div>
        </aside>

        <section className="editorial-reveal border border-border bg-surface p-7 shadow-editorial backdrop-blur sm:p-10 lg:p-14">
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
            {article.title}
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-muted-foreground">{article.summary}</p>
          <div className="mt-10 h-px bg-border" />
          <div className="mt-10 space-y-7 text-lg leading-9 text-foreground">
            {article.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
