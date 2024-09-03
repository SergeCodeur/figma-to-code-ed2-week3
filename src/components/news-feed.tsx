"use client";

import { ArrowDown } from "@/assets/icons";
import { CryptoNewsData } from "@/constants/data";
import { NewsCardProps } from "@/types";
import { useState } from "react";
import { NewsCard } from "./cards/news-card";
import { Button } from "./ui/button";

const NewsFeed = () => {
  const [numArticles, setNumArticles] = useState(8);

  const handleLoadMore = () => {
    setNumArticles(numArticles + 8);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
        {CryptoNewsData.slice(0, numArticles).map(
          (news: NewsCardProps, index: number) => (
            <NewsCard key={index} {...news} />
          )
        )}
      </div>

      {numArticles < CryptoNewsData.length && (
        <div className="w-full flex justify-center items-center">
          <Button
            className="bg-tokena-light-gray border border-tokena-gray font-medium text-tokena-dark rounded-full"
            onClick={handleLoadMore}
          >
            Load More
            <ArrowDown />
          </Button>
        </div>
      )}
    </>
  );
};

export default NewsFeed;
