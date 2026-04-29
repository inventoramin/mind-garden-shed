import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { fetchRemoteNewsArticle, fetchRemoteNewsArticles } from "./news.server";

export const getRemoteNewsArticles = createServerFn({ method: "GET" }).handler(async () => {
  return fetchRemoteNewsArticles();
});

export const getRemoteNewsArticle = createServerFn({ method: "GET" })
  .inputValidator((data) => z.object({ slug: z.string().min(1) }).parse(data))
  .handler(async ({ data }) => {
    return fetchRemoteNewsArticle(data.slug);
  });