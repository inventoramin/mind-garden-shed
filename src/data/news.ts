export type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  body: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "knowledge-graphs-move-to-the-frontline",
    title: "Knowledge graphs move to the frontline of daily decisions",
    category: "Research Ops",
    date: "Apr 22, 2026",
    readTime: "4 min read",
    summary:
      "Teams are turning scattered documents into connected maps that make decisions traceable and reusable.",
    body: [
      "Knowledge graphs are becoming the working surface for teams that need more than a folder of files. Instead of storing articles, meeting notes, and research findings as isolated objects, organizations are linking them by people, topics, decisions, and outcomes.",
      "The result is a system where a reader can move from a headline to the supporting context in seconds. Product teams can see which customer interviews influenced a roadmap choice, while policy teams can trace a recommendation back to the source material that shaped it.",
      "The biggest shift is cultural. Knowledge is no longer treated as an archive at the end of work. It is becoming the operating layer that sits beside planning, reporting, and execution.",
    ],
  },
  {
    slug: "ai-summaries-need-human-signals",
    title: "AI summaries improve when editors leave human signals behind",
    category: "Editorial Systems",
    date: "Apr 18, 2026",
    readTime: "3 min read",
    summary:
      "Short annotations, confidence labels, and source notes are helping automated summaries stay useful and accountable.",
    body: [
      "Automated summaries are useful, but teams are learning that the best results come from pairing models with lightweight editorial signals. A note about why a source matters can be as valuable as the extracted text itself.",
      "Several knowledge teams now add confidence levels, source quality markers, and short editor observations to each item. Those signals help readers understand whether a summary is a starting point, a verified brief, or an item that still needs review.",
      "This approach keeps speed without removing accountability. Readers get quick orientation, while the system preserves the judgment that made the original information trustworthy.",
    ],
  },
  {
    slug: "search-is-becoming-a-reading-flow",
    title: "Search is becoming a reading flow, not a results page",
    category: "Product Design",
    date: "Apr 12, 2026",
    readTime: "5 min read",
    summary:
      "Knowledge apps are replacing long result lists with guided reading paths and related context panels.",
    body: [
      "Search in knowledge management is moving away from the familiar list of blue links. Newer systems behave more like reading rooms, presenting the most relevant item alongside related notes, definitions, and follow-up questions.",
      "The change reflects how people actually use internal knowledge. They rarely need one document in isolation. They need the surrounding context: who wrote it, what it changed, and which newer updates may have replaced it.",
      "Designers are responding with interfaces that make exploration feel continuous. A reader can open a news item, skim the full text, and then continue into neighboring topics without losing orientation.",
    ],
  },
  {
    slug: "small-teams-build-living-archives",
    title: "Small teams build living archives with simple publishing rituals",
    category: "Team Practice",
    date: "Apr 7, 2026",
    readTime: "3 min read",
    summary:
      "A weekly review cadence is helping compact teams keep their knowledge base accurate without heavyweight governance.",
    body: [
      "Small teams often avoid knowledge systems because they fear maintenance work. The teams that succeed are choosing simple rituals over complex taxonomies: one weekly review, clear owners, and a habit of retiring outdated notes.",
      "A living archive does not need to capture everything. It needs to preserve the decisions, signals, and stories that people will look for later. That focus keeps the system useful without turning it into a dumping ground.",
      "The most effective ritual is a short editorial pass. Teams ask what changed, what should be linked, and what can be removed. Over time, that rhythm creates a trustworthy knowledge base with very little ceremony.",
    ],
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
