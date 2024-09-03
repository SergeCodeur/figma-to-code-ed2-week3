import NewsFeed from "@/components/news-feed";

const News = () => {
  return (
    <div className="p-6 space-y-9">
      <h1 className="text-base font-semibold text-tokena-black dark:text-tokena-gray">
        Latest crypto news
      </h1>

      <NewsFeed />
    </div>
  );
};

export default News;
