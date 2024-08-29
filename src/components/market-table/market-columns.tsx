import { CryptoMarketDataProps } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import Sparkline from "../coin-chart";
import { Badge } from "../ui/badge";
import CoinCell from "./coin-cell";

export const Marketcolumns: ColumnDef<CryptoMarketDataProps>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      const index = row.index + 1;
      return <span>{index}</span>;
    },
  },
  {
    accessorKey: "crypto_info",
    header: "Coins",
    accessorFn: (row) => row.name,
    cell: ({ row }) => {
      const crypto_info = row.original;
      return <CoinCell crypto_info={crypto_info} />;
    },
  },
  {
    accessorKey: "current_price",
    header: "Price",
    cell: ({ row }) => {
      const { current_price } = row.original;
      return (
        <span>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(Number(current_price))}
        </span>
      );
    },
  },
  {
    accessorKey: "price_change_percentage_24h",
    header: "24h",
    cell: ({ row }) => {
      const { price_change_percentage_24h } = row.original;
      const percentageChange = price_change_percentage_24h
        ? price_change_percentage_24h.toFixed(1)
        : "0.00";
      return (
        <Badge
          size="sm"
          variant="ghost"
          className={`${
            price_change_percentage_24h >= 0
              ? "text-tokena-green bg-tokena-green/15"
              : "text-tokena-red bg-tokena-red/15"
          } border-none`}
        >
          {price_change_percentage_24h >= 0 ? "+" : ""}
          {percentageChange}%
        </Badge>
      );
    },
  },
  {
    accessorKey: "total_volume",
    header: "24h Volume",
    cell: ({ row }) => {
      const { total_volume } = row.original;
      return (
        <span>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(Number(total_volume))}
        </span>
      );
    },
  },
  {
    accessorKey: "market_cap",
    header: "Market Cap",
    cell: ({ row }) => {
      const { market_cap } = row.original;
      return (
        <span>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(Number(market_cap))}
        </span>
      );
    },
  },
  {
    accessorKey: "sparkline_in_7d",
    header: "Last 7 days",
    cell: ({ row }) => {
      const { sparkline_in_7d, price_change_percentage_24h } = row.original;
      return (
        <div>
          <Sparkline
            data={sparkline_in_7d.price.map(Number)}
            isPositiveChange={price_change_percentage_24h >= 0}
          />
        </div>
      );
    },
  },
];
