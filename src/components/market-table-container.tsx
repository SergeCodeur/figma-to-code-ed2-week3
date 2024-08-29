"use client";
import useCryptoMarketData from "@/hooks/use-fetch-crypto-market";
import useCryptoMarketStore from "@/store/use-crypto-market-store";
import { useEffect } from "react";
import { Marketcolumns } from "./market-table/market-columns";
import { MarketDataTable } from "./market-table/market-data-table";

const MarketTableContainer = () => {
  const { data, error } = useCryptoMarketData();
  const setCryptoMarketData = useCryptoMarketStore(
    (state) => state.setCryptoMarketData
  );

  useEffect(() => {
    if (data) {
      setCryptoMarketData(data);
    }
  }, [data, setCryptoMarketData]);

  if (error) {
    return <div className="container mx-auto py-10">{error}</div>;
  }

  return <MarketDataTable columns={Marketcolumns} data={data} />;
};

export default MarketTableContainer;
