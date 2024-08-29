import { CryptoMarketDataProps } from "@/types";
import { useEffect, useState } from "react";

const useCryptoMarketData = () => {
  const [data, setData] = useState<CryptoMarketDataProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Ctether&category=layer-1&sparkline=true&price_change_percentage=1h%2C24h%2C7d";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
          },
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export default useCryptoMarketData;
