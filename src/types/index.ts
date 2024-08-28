import { SVGProps } from "react";

// Sidebar links type
export type SidebarLinkProps = {
  label: string;
  href: string;
  icon: React.FC<IconProps>;
  subLinks?: SidebarLinkProps[];
};

// Sidebar state
export interface SidebarState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

// Balance card type
export type BalanceCardProps = {
  className?: string;
  title: string;
  amount: string;
};

// // Trending card type
// export type TrendingCardProps = {
//   className?: string;
//   icon: string;
//   iconWidth?: number;
//   iconHeight?: number;
//   coinTitle: string;
//   coinSubtitle: string;
//   percentageChange: string;
//   value: string;
//   marketCap: string;
// };

// Icon type
export interface IconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

// Market data type
export type CryptoMarketDataProps = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  total_volume: number;
  current_price: number;
  market_cap: string;
  circulating_supply: number;
  market_cap_rank: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: {
    price: string[];
  };
};

export interface CoinDetailsProps {
  description: {
    en: string;
  };
  id: string;
  name: string;
  symbol: string;
  image: {
    small: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    price_change_percentage_24h: number;
    market_cap_rank: number;
    circulating_supply: number;
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    sparkline_7d: {
      price: number[];
    };
  };
}
// Crypto market state
export interface CryptoMarketState {
  cryptoMarketData: CryptoMarketDataProps[];
  setCryptoMarketData: (market: CryptoMarketDataProps[]) => void;
}

// Search input type
export interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ToggleOverviewProps {
  selectedCoinId: string | null;
  isOverviewOpen: boolean;
  setIsOverviewOpen: (isOpen: boolean) => void;
  setSelectedCoinId: (id: string | null) => void;
}
