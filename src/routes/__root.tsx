import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">۴۰۴</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">صفحه پیدا نشد</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          صفحه‌ای که دنبالش هستید وجود ندارد یا جابه‌جا شده است.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            بازگشت به خانه
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "میز آرشیو خبرهای دانش" },
      { name: "description", content: "خبرهای منتخب مدیریت دانش را مرور کنید و متن کامل هر خبر را بخوانید." },
      { name: "author", content: "میز آرشیو" },
      { property: "og:title", content: "میز آرشیو خبرهای دانش" },
      { property: "og:description", content: "خبرهای منتخب مدیریت دانش را مرور کنید و متن کامل هر خبر را بخوانید." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "میز آرشیو خبرهای دانش" },
      { name: "twitter:description", content: "خبرهای منتخب مدیریت دانش را مرور کنید و متن کامل هر خبر را بخوانید." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/74bea6d1-d40c-44c9-a8eb-4510c9edaa61/id-preview-2345261d--e619d6c4-3f68-4920-9ba6-39cd0a899ecc.lovable.app-1776841333690.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/74bea6d1-d40c-44c9-a8eb-4510c9edaa61/id-preview-2345261d--e619d6c4-3f68-4920-9ba6-39cd0a899ecc.lovable.app-1776841333690.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
