import { CoinsResponse } from "@/types/trending";
import { useEffect, useState } from "react";
const useCryptoTrending = () => {
  const [data, setData] = useState<CoinsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = "https://api.coingecko.com/api/v3/search/trending";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
          },
        });
        const result: CoinsResponse = await response.json();
        const top4Coins = {
          coins: result.coins.slice(0, 4),
        };

        setData(top4Coins);
      } catch (error) {
        setError("Error fetching trending data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default useCryptoTrending;
