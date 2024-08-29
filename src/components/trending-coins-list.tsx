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

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 max-lg:grid-rows-1 gap-1.5">
        {Array.from({ length: 4 }).map((_, index) => (
          <TrendingCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 max-lg:grid-rows-1 gap-1.5">
      {data?.coins.map((coin) => (
        <TrendingCard key={coin.item.id} coin={coin.item} />
      ))}
    </div>
  );
};

export default TrendingCoinsList;
