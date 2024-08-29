export interface CoinsResponse {
  coins: {
    item: {
      id: string;
      name: string;
      symbol: string;
      thumb: string;
      data: {
        price: number;
        market_cap: number;
        price_change_percentage_24h: {
          usd: number;
        };
      };
    };
  }[];
}
export interface TrendingCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  coin: CoinsResponse;
}
