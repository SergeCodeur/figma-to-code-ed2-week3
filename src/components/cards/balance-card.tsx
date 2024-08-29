import { ArrowDown, ArrowUp } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { BalanceCardProps } from "@/types";
import * as React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const BalanceCard = React.forwardRef<HTMLDivElement, BalanceCardProps>(
  ({ className, title, amount, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex w-full xl:max-w-[316px] group flex-col gap-2 rounded-xxl bg-background p-3 border border-tokena-light-gray dark:border-tokena-gray/20",
        className
      )}
      {...props}
    >
      <div className="space-y-1.5">
        <h3 className="text-tokena-dark text-lg font-semibold">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="block text-lg font-bold text-tokena-dark">
            {amount}
          </span>
          <span className="flex items-center gap-1.5">
            <Badge
              variant="ghost"
              size="sm"
              className="text-tokena-green bg-tokena-green/15 border-none font-semibold"
            >
              +2.3%
            </Badge>
            <span className="text-tokena-dark-gray dark:text-tokena-gray text-xs font-medium">
              {" "}
              vs last month
            </span>
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-1.5">
        <Button variant="ghost" className="w-1/2 dark:border-tokena-gray/15">
          {" "}
          <ArrowUp />
          <span>Deposit</span>
        </Button>
        <Button variant="ghost" className="w-1/2 dark:border-tokena-gray/15">
          {" "}
          <ArrowDown /> <span>Withdraw</span>
        </Button>
      </div>
    </div>
  )
);
BalanceCard.displayName = "BalanceCard";
