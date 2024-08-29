import { CoinDetailsProps } from "@/types";
import { useEffect, useState } from "react";

const useCoinDetails = (coinId: string | null) => {
  const [data, setData] = useState<CoinDetailsProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!coinId) return;
      setIsLoading(true);
      const url = `https://api.coingecko.com/api/v3/coins/${coinId}?sparkline=true`;
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
        setError("Error fetching coin details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [coinId]);

  return { data, error, isLoading };
};

export default useCoinDetails;
