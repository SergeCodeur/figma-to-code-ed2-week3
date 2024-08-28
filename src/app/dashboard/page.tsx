import { ChevronRight } from "@/assets/icons";
import { BalanceCard } from "@/components/cards/balance-card";
import CoinOverview from "@/components/coin-overiew";
import MarketTableContainer from "@/components/market-table-container";
import TrendingCoinsList from "@/components/trending-coins-list";
import { BalanceData } from "@/constants/data";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="p-6 relative">
      <div className="flex items-center max-xl:flex-col gap-[22px]">
        {BalanceData.map((data, index) => (
          <BalanceCard key={index} title={data.title} amount={data.amount} />
        ))}
        <div className="xl:flex-1 w-full space-y-3">
          <div className="flex justify-between w-full">
            <h3 className="text-tokena-dark dark:text-tokena-light-gray text-base font-semibold">
              Trending
            </h3>
            <Link
              href="#"
              className="flex items-center text-tokena-dark-gray dark:text-tokena-gray"
            >
              <span className="text-xxs font-medium">View more</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <TrendingCoinsList />
        </div>
      </div>
      <div>
        <MarketTableContainer />
      </div>

      <CoinOverview />
    </div>
  );
};

export default Dashboard;
