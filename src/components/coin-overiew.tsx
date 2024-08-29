"use client";
import { Star } from "@/assets/icons";
import Close from "@/assets/icons/close";
import useCoinDetails from "@/hooks/use-fetch-crypto-details";
import { formatCurrency } from "@/lib/utils";
import useToggleCoinOverview from "@/store/use-toggle-coins-overview";
import Image from "next/image";
import CoinChart from "./coin-details-chart";
import CoinOverviewSkeleton from "./skeleton/coin-overview-skeleton";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const CoinOverview = () => {
  const { isOverviewOpen, selectedCoinId, setIsOverviewOpen } =
    useToggleCoinOverview();
  const { data: coinDetails, isLoading } = useCoinDetails(selectedCoinId);

  // if (!selectedCoinId) {
  //   return <p>No coin selected.</p>;
  // }

  if (!coinDetails) {
    return null;
  }

  const chartData = coinDetails.market_data.sparkline_7d.price
    .slice(-4)
    .map((price, index) => ({
      month: new Date(
        Date.now() - (3 - index) * 30 * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-US", { month: "short" }),
      price: price,
    }));

  return (
    <div
      className={`${
        isOverviewOpen ? "translate-x-0" : "translate-x-full"
      } bg-background w-[315px] xs:w-[365px] md:w-[496px] space-y-[26px] overflow-y-auto p-5 fixed right-0 top-0 h-screen z-20 transition-transform duration-300 ease-linear`}
    >
      {isLoading ? (
        <CoinOverviewSkeleton />
      ) : (
        <>
          <div className="flex justify-between">
            <h2 className="text-base font-bold text-tokena-dark">
              {coinDetails.name}
            </h2>
            <Button
              size="icon-xs"
              variant="icon-button"
              className="bg-tokena-gray/50 text-tokena-dark"
              onClick={() => setIsOverviewOpen(false)}
            >
              <Close />
            </Button>
          </div>
          <div className="space-y-[26px]">
            <div>
              <CoinChart
                data={chartData}
                priceChangePercentage={
                  coinDetails.market_data.price_change_percentage_24h
                }
              />
              <span className="text-sm font-medium flex items-center gap-[5px]">
                <span
                  className={`${
                    coinDetails.market_data.price_change_percentage_24h >= 0
                      ? "bg-tokena-green"
                      : "bg-tokena-red"
                  } w-5 h-[5px] block`}
                ></span>
                Price
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Image
                  src={coinDetails.image.small}
                  alt={coinDetails.name}
                  width={24}
                  height={24}
                />
                <h3 className="text-sm font-semibold">{`${
                  coinDetails.name
                } (${coinDetails.symbol.toUpperCase()}/USD)`}</h3>
              </div>
              <p className="text-sm font-semibold">
                {formatCurrency(
                  Number(coinDetails.market_data.current_price.usd)
                )}
              </p>
            </div>
            <ul className="space-y-1.5">
              <li className="flex items-center justify-between">
                <span className="text-sm font-medium text-tokena-dark text dark:text-tokena-light-gray">
                  Crypto Market Rank
                </span>
                <Badge
                  variant="ghost"
                  className="font-semibold dark:bg-tokena-gray/15 border-none"
                >
                  Rank#{coinDetails.market_data.market_cap_rank}
                </Badge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-xs xs:text-sm font-medium">
                  Market cap
                </span>
                <span className="font-medium text-tokena-dark-gray text-xs xs:text-sm dark:text-tokena-gray">
                  {formatCurrency(
                    Number(coinDetails.market_data.market_cap.usd)
                  )}
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-xs xs:text-sm font-medium text-tokena-dark text dark:text-tokena-light-gray">
                  Circulating supply
                </span>
                <span className="font-medium text-tokena-dark-gray text-xs xs:text-sm dark:text-tokena-gray">
                  {coinDetails.market_data.circulating_supply}
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-xs xs:text-sm font-medium text-tokena-dark text dark:text-tokena-light-gray">
                  24 Hour High
                </span>
                <span className="font-medium text-tokena-dark-gray text-xs xs:text-sm dark:text-tokena-gray">
                  {formatCurrency(Number(coinDetails.market_data.high_24h.usd))}
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-xs xs:text-sm font-medium text-tokena-dark text dark:text-tokena-light-gray">
                  24 Hour Low
                </span>
                <span className="font-medium text-tokena-dark-gray text-xs xs:text-sm dark:text-tokena-gray">
                  {formatCurrency(Number(coinDetails.market_data.low_24h.usd))}
                </span>
              </li>
            </ul>
            <div className="space-y-[9px]">
              <h3 className="text-xs xs:text-sm font-semibold text-tokena-dark text dark:text-tokena-light-gray">
                Description
              </h3>
              <p className="text-xs text-tokena-dark-gray coin-description-text dark:text-tokena-gray">
                {coinDetails.description.en}
              </p>
            </div>
            <Button variant="ghost" className="w-full">
              <Star />
              <span>Add to favorites</span>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CoinOverview;
