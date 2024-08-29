import { Comment, Heart } from "@/assets/icons";
import icon from "@/assets/images/icons-new.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

export const NewsCard = React.forwardRef<HTMLDivElement>(
  ({ ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex w-full group flex-col 2xl:min-w-[199px] gap-2.5 rounded-xxl bg-background dark:bg-tokena-dark-blue-2 p-3 border dark:border-tokena-gray/15 border-tokena-light-gray cursor-pointer"
      )}
      {...props}
    >
      <div className="flex items-center gap-1 h-8">
        <Image src={icon} alt={`Icon`} width={24} height={24} />
        <div>
          <h3 className="text-tokena-dark dark:text-tokena-white text-xs font-semibold">
            CoinMarketCap
          </h3>
          <span className="text-tokena-dark-gray dark:text-tokena-light-gray text-xs block">
            News - 7 hours ago
          </span>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden w-full h-[194px] bg-tokena-light-gray dark:bg-[#1D1D1D]/70">
        {/* <Image
          className="w-full object-cover"
          src={image}
          alt="image"
          width={259}
          height={194}
        /> */}
      </div>
      <div>
        <h3 className="italic text-xs font-semibold mb-1.5 dark:text-tokena-gray">
          Ethereum&apos;s Merge Coming and the Stakes Couldn&apos;t Be Higher
        </h3>
        <p className="text-xs font-medium text-tokena-dark-gray dark:text-tokena-white">
          The most important upgrade in blockchain history is slated for August.
          And the outcome of Ethe....
        </p>
        <div className="flex gap-2.5 mt-2">
          <span className="flex items-center gap-1">
            <Heart /> <span className="font-medium">5</span>
          </span>
          <span className="flex items-center gap-1">
            <Comment /> <span className="font-medium">5</span>
          </span>
        </div>
      </div>
    </div>
  )
);
NewsCard.displayName = "NewsCard";
