import { Link, createFileRoute, notFound, useRouter } from "@tanstack/react-router";
import { getNewsArticle } from "../data/news";

function NewsNotFound() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-2xl border border-border bg-surface p-8 shadow-editorial">
        <p className="text-sm font-semibold text-accent">یادداشت پیدا نشد</p>
        <h1 className="mt-4 text-4xl font-bold text-ink">این خبر پیدا نشد.</h1>
        <Link className="mt-8 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline" to="/">
          بازگشت به میز خبر
        </Link>
      </div>
    </main>
  );
}

function NewsError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-2xl border border-border bg-surface p-8 shadow-editorial">
        <p className="text-sm font-semibold text-accent">خطای بارگذاری</p>
        <h1 className="mt-4 text-4xl font-bold text-ink">این خبر باز نشد.</h1>
        <p className="mt-4 text-muted-foreground">{error.message}</p>
        <button
          className="mt-8 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          type="button"
        >
          تلاش دوباره
        </button>
      </div>
    </main>
  );
}

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const article = getNewsArticle(params.slug);
    if (!article) {
      throw notFound();
    }
    return article;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — میز آرشیو` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.title} — میز آرشیو` },
          { property: "og:description", content: loaderData.summary },
        ]
      : [{ title: "خبر — میز آرشیو" }],
  }),
  component: NewsDetailPage,
  errorComponent: NewsError,
  notFoundComponent: NewsNotFound,
});

function NewsDetailPage() {
  const article = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-[260px_1fr] lg:py-16">
        <aside className="editorial-reveal lg:sticky lg:top-10 lg:self-start">
          <Link className="inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline" to="/">
            بازگشت به میز خبر ←
          </Link>
          <div className="mt-8 border-l-2 border-accent pl-5">
            <p className="text-sm font-bold text-accent">{article.category}</p>
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
