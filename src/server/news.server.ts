import type { FullNewsArticle, NewsArticle } from "../data/news";

type NewsArticleResponse = FullNewsArticle | { article: FullNewsArticle | null } | null;
type NewsArticlesResponse = NewsArticle[] | { articles: NewsArticle[] };

const API_NEWS_PATH = "/api/v1/answers";

function getApiBaseUrl() {
  return (process.env.NEWS_API_BASE_URL || process.env.VITE_NEWS_API_BASE_URL || "").replace(
    /\/$/,
    "",
  );
}

function extractArticles(data: NewsArticlesResponse) {
  return Array.isArray(data) ? data : data.articles;
}

function extractArticle(data: NewsArticleResponse) {
  return data && "article" in data ? data.article : data;
}

export async function fetchRemoteNewsArticles() {
  const apiBaseUrl = getApiBaseUrl();
  if (!apiBaseUrl) {
    return null;
  }

  const response = await fetch(`${apiBaseUrl}${API_NEWS_PATH}/`);
  if (!response.ok) {
    throw new Error("فهرست خبرها از API دریافت نشد.");
  }

  return extractArticles((await response.json()) as NewsArticlesResponse);
}

export async function fetchRemoteNewsArticle(slug: string) {
  const apiBaseUrl = getApiBaseUrl();
  if (!apiBaseUrl) {
    return null;
  }

  const response = await fetch(`${apiBaseUrl}${API_NEWS_PATH}/${encodeURIComponent(slug)}`);
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error("خبر از API دریافت نشد.");
  }

  return extractArticle((await response.json()) as NewsArticleResponse);
}