"use client";
import useToggleCoinOverview from "@/store/use-toggle-coins-overview";
import Image from "next/image";
import React from "react";

interface CoinCellProps {
  crypto_info: {
    id: string;
    image: string;
    name: string;
    symbol: string;
  };
}

const CoinCell: React.FC<CoinCellProps> = ({ crypto_info }) => {
  const setIsOverviewOpen = useToggleCoinOverview(
    (state) => state.setIsOverviewOpen
  );
  const setSelectedCoinId = useToggleCoinOverview(
    (state) => state.setSelectedCoinId
  );

  const handleClick = () => {
    setSelectedCoinId(crypto_info.id);
    setIsOverviewOpen(true);
  };

  return (
    <div className="flex items-center gap-2.5">
      <Image
        src={crypto_info.image}
        alt={crypto_info.name}
        width={24}
        height={24}
      />
      <span onClick={handleClick} className="cursor-pointer">
        {crypto_info.name}-{crypto_info.symbol.toUpperCase()}
      </span>
    </div>
  );
};

export default CoinCell;
