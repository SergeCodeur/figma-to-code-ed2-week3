import { TradeDown, TradeUp } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { CoinsResponse } from "@/types/trending";
import Image from "next/image";
import * as React from "react";
import { Badge } from "../ui/badge";

export interface TrendingCardProps {
  className?: string;
  coin: CoinsResponse["coins"][0]["item"];
}

export const TrendingCard = React.forwardRef<HTMLDivElement, TrendingCardProps>(
  ({ className, coin, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex w-full group flex-col 2xl:min-w-[199px] gap-2.5 rounded-xxl bg-background p-3 border dark:border-tokena-gray/15 border-tokena-light-gray cursor-pointer hover:bg-tokena-blue/[0.07] hover:border-tokena-blue/20"
      )}
      {...props}
    >
      <div className="flex gap-1.5 justify-between items-center">
        <div className="flex items-center gap-1 h-8">
          <Image
            src={coin.thumb}
            alt={`${coin.name} Icon`}
            width={32}
            height={32}
          />
          <div>
            <h3 className="text-tokena-dark-gray dark:text-tokena-white text-xs font-bold truncate xl:max-w-[50px] xxl:max-w-[77px] 2xl:max-w-full">
              {coin.name}
            </h3>
            <span className="text-tokena-dark-gray/60 dark:text-tokena-gray text-xxs block font-bold uppercase">
              {coin.symbol}
            </span>
          </div>
        </div>
        <Badge
          className={`${
            coin.data.price_change_percentage_24h.usd >= 0
              ? "text-tokena-green bg-tokena-green/15"
              : "text-tokena-red bg-tokena-red/15"
          } border-none`}
          variant="ghost"
          size="sm"
        >
          <span className="text-xxs font-semibold dark:text-tokena-light-gray">
            {coin.data.price_change_percentage_24h.usd.toFixed(1)}%
          </span>
          {coin.data.price_change_percentage_24h.usd >= 0 ? (
            <TradeUp className="w-3 h-3" />
          ) : (
            <TradeDown className="w-3 h-3" />
          )}
        </Badge>
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="text-xs text-tokena-dark-gray dark:text-tokena-light-gray font-bold">
          {coin.data.price.toFixed(2)} {coin.symbol}
        </h3>
        <span className="text-xxs text-tokena-dark-gray dark:text-tokena-gray font-medium block">
          {coin.data.market_cap}
        </span>
      </div>
    </div>
  )
);
TrendingCard.displayName = "TrendingCard";
