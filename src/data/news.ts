export type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  body?: string[];
};

export type FullNewsArticle = NewsArticle & { body: string[] };

type NewsArticleResponse = FullNewsArticle | { article: FullNewsArticle | null } | null;
type NewsArticlesResponse = NewsArticle[] | { articles: NewsArticle[] };

const API_BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL?.replace(/\/$/, "");

export const newsArticles: FullNewsArticle[] = [
  {
    slug: "knowledge-graphs-in-organizations",
    title: "گراف‌های دانش به مرکز تصمیم‌گیری سازمان‌ها می‌آیند",
    category: "عملیات پژوهش",
    date: "۲ اردیبهشت ۱۴۰۵",
    readTime: "۴ دقیقه مطالعه",
    summary:
      "تیم‌ها اسناد پراکنده را به نقشه‌های متصل تبدیل می‌کنند تا مسیر تصمیم‌ها قابل ردیابی و استفاده دوباره باشد.",
    body: [
      "گراف دانش برای تیم‌هایی که فراتر از پوشه‌ای از فایل‌ها فکر می‌کنند، به سطح اصلی کار تبدیل شده است. سازمان‌ها به جای ذخیره مقاله‌ها، یادداشت جلسات و یافته‌های پژوهشی به شکل جداگانه، آن‌ها را بر اساس افراد، موضوعات، تصمیم‌ها و نتیجه‌ها به هم وصل می‌کنند.",
      "نتیجه، سیستمی است که خواننده می‌تواند در چند ثانیه از یک تیتر به زمینه پشتیبان برسد. تیم محصول می‌بیند کدام مصاحبه مشتری روی نقشه راه اثر گذاشته و تیم سیاست‌گذاری می‌تواند پیشنهادها را تا منبع اولیه دنبال کند.",
      "مهم‌ترین تغییر، فرهنگی است. دانش دیگر آرشیوی در پایان کار نیست؛ بلکه لایه عملیاتی کنار برنامه‌ریزی، گزارش‌گیری و اجراست.",
    ],
  },
  {
    slug: "ai-summaries-with-editorial-signals",
    title: "خلاصه‌های هوش مصنوعی با نشانه‌های انسانی دقیق‌تر می‌شوند",
    category: "سامانه‌های تحریریه",
    date: "۳۰ فروردین ۱۴۰۵",
    readTime: "۳ دقیقه مطالعه",
    summary:
      "یادداشت‌های کوتاه، برچسب‌های اطمینان و توضیح منبع کمک می‌کنند خلاصه‌های خودکار کاربردی و قابل اتکا بمانند.",
    body: [
      "خلاصه‌های خودکار مفیدند، اما تیم‌ها یاد گرفته‌اند بهترین نتیجه زمانی به دست می‌آید که مدل‌ها با نشانه‌های سبک تحریریه همراه شوند. توضیح کوتاهی درباره اهمیت یک منبع گاهی به اندازه متن استخراج‌شده ارزش دارد.",
      "بسیاری از تیم‌های دانش اکنون سطح اطمینان، کیفیت منبع و مشاهده‌های کوتاه ویراستار را کنار هر آیتم ثبت می‌کنند. این نشانه‌ها به خواننده می‌گویند با یک نقطه شروع، یک گزارش تاییدشده یا محتوایی نیازمند بازبینی روبه‌روست.",
      "این رویکرد سرعت را حفظ می‌کند، بدون آن‌که پاسخ‌گویی را حذف کند. خواننده سریع جهت می‌گیرد و سیستم قضاوت انسانی پشت اطلاعات معتبر را نگه می‌دارد.",
    ],
  },
  {
    slug: "search-as-reading-flow",
    title: "جست‌وجو از صفحه نتایج به جریان مطالعه تبدیل می‌شود",
    category: "طراحی محصول",
    date: "۲۴ فروردین ۱۴۰۵",
    readTime: "۵ دقیقه مطالعه",
    summary:
      "اپلیکیشن‌های دانش، فهرست‌های طولانی نتیجه را با مسیرهای مطالعه هدایت‌شده و پنل‌های زمینه جایگزین می‌کنند.",
    body: [
      "جست‌وجو در مدیریت دانش از فهرست آشنای لینک‌های جداگانه فاصله می‌گیرد. سیستم‌های تازه بیشتر شبیه اتاق مطالعه عمل می‌کنند و مرتبط‌ترین آیتم را کنار یادداشت‌های مرتبط، تعریف‌ها و پرسش‌های بعدی نمایش می‌دهند.",
      "این تغییر با روش واقعی استفاده از دانش داخلی هماهنگ است. افراد به ندرت فقط یک سند جدا می‌خواهند؛ آن‌ها زمینه اطراف سند را می‌خواهند: چه کسی آن را نوشته، چه چیزی را تغییر داده و کدام به‌روزرسانی جدیدتر جای آن را گرفته است.",
      "طراحان با رابط‌هایی پاسخ می‌دهند که کاوش را پیوسته نگه می‌دارد. خواننده خبر را باز می‌کند، متن کامل را مرور می‌کند و بدون گم‌کردن مسیر وارد موضوعات نزدیک می‌شود.",
    ],
  },
  {
    slug: "living-archives-for-small-teams",
    title: "تیم‌های کوچک با آیین‌های ساده آرشیو زنده می‌سازند",
    category: "تمرین تیمی",
    date: "۱۹ فروردین ۱۴۰۵",
    readTime: "۳ دقیقه مطالعه",
    summary:
      "یک بازبینی هفتگی به تیم‌های کوچک کمک می‌کند پایگاه دانش را دقیق نگه دارند، بدون آن‌که گرفتار فرآیندهای سنگین شوند.",
    body: [
      "تیم‌های کوچک معمولاً از سیستم‌های دانش دوری می‌کنند چون از کار نگهداری می‌ترسند. تیم‌های موفق به جای طبقه‌بندی‌های پیچیده، آیین‌های ساده انتخاب می‌کنند: یک بازبینی هفتگی، مالک‌های مشخص و عادت حذف یادداشت‌های قدیمی.",
      "آرشیو زنده لازم نیست همه چیز را ثبت کند. باید تصمیم‌ها، نشانه‌ها و روایت‌هایی را نگه دارد که افراد بعداً دنبالشان می‌گردند. همین تمرکز، سیستم را مفید نگه می‌دارد و از تبدیل‌شدن آن به انبار اطلاعات جلوگیری می‌کند.",
      "موثرترین آیین، یک مرور کوتاه تحریریه است. تیم می‌پرسد چه چیزی تغییر کرده، چه چیزی باید لینک شود و چه چیزی می‌تواند حذف شود. با گذشت زمان، همین ریتم پایگاه دانشی قابل اعتماد می‌سازد.",
    ],
  },
];

function extractArticles(data: NewsArticlesResponse) {
  return Array.isArray(data) ? data : data.articles;
}

function extractArticle(data: NewsArticleResponse) {
  return data && "article" in data ? data.article : data;
}

let cachedArticles: NewsArticle[] | null = null;
const articleCache = new Map<string, NewsArticle>();

function hasFullBody(article: NewsArticle | null | undefined): article is FullNewsArticle {
  return Array.isArray(article?.body) && article.body.length > 0;
}

function storeArticles(articles: NewsArticle[]) {
  cachedArticles = articles;
  articles.forEach((article) => {
    const existing = articleCache.get(article.slug);
    articleCache.set(article.slug, { ...article, body: article.body ?? existing?.body });
  });
  return articles;
}

function storeArticle(article: FullNewsArticle | null) {
  if (article) {
    articleCache.set(article.slug, { ...articleCache.get(article.slug), ...article });
  }
  return article;
}

export async function getNewsArticles() {
  if (cachedArticles) {
    return cachedArticles;
  }

  if (!API_BASE_URL) {
    return storeArticles(newsArticles);
  }

  const response = await fetch(`${API_BASE_URL}/news`);
  if (!response.ok) {
    throw new Error("فهرست خبرها از API دریافت نشد.");
  }

  return storeArticles(extractArticles((await response.json()) as NewsArticlesResponse));
}

export async function getNewsArticle(slug: string) {
  const cachedArticle = articleCache.get(slug);
  if (hasFullBody(cachedArticle)) {
    return cachedArticle;
  }

  if (!API_BASE_URL) {
    return storeArticle(newsArticles.find((article) => article.slug === slug) ?? null);
  }

  const response = await fetch(`${API_BASE_URL}/news/${encodeURIComponent(slug)}`);
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error("خبر از API دریافت نشد.");
  }

  return storeArticle(extractArticle((await response.json()) as NewsArticleResponse));
}
