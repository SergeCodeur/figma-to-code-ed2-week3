import { NewsCard } from "@/components/cards/news-card";

const News = () => {
  return (
    <div className="p-6 space-y-9">
      <h1 className="text-base font-semibold text-tokena-black dark:text-tokena-gray">
        Latest crypto news
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default News;
