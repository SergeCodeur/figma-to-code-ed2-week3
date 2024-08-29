"use client";
import useCryptoTrending from "@/hooks/use-fetch-crypto-trending";
import React from "react";
import { TrendingCard } from "./cards/trending-card";
import TrendingCardSkeleton from "./skeleton/trending-car-skeleton";

const TrendingCoinsList: React.FC = () => {
  const { data, error, isLoading } = useCryptoTrending();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-lg:grid-rows-1 gap-1.5">
      {data?.coins.map((coin) => (
        <>
          {isLoading ? (
            <TrendingCardSkeleton />
          ) : (
            <TrendingCard key={coin.item.id} coin={coin.item} />
          )}
        </>
      ))}
    </div>
  );
};

export default TrendingCoinsList;
