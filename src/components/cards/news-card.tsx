import { Comment, Heart } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { NewsCardProps } from "@/types";
import Image from "next/image";
import * as React from "react";

export const NewsCard = React.forwardRef<HTMLDivElement, NewsCardProps>(
  (
    {
      icon,
      source,
      timeAgo,
      image,
      title,
      description,
      likes,
      comments,
      ...props
    },
    ref
  ) => (
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
            {source}
          </h3>
          <span className="text-tokena-dark-gray dark:text-tokena-light-gray text-xs block">
            News - {timeAgo}
          </span>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden w-full h-[194px] bg-tokena-light-gray dark:bg-[#1D1D1D]/70">
        {image && (
          <Image
            className="w-full object-cover"
            src={image}
            alt="image"
            width={259}
            height={194}
          />
        )}
      </div>
      <div>
        <h3 className="italic text-xs font-semibold mb-1.5 dark:text-tokena-gray">
          {title}
        </h3>
        <p className="text-xs font-medium text-tokena-dark-gray dark:text-tokena-white line-clamp-3">
          {description}
        </p>
        <div className="flex gap-2.5 mt-2">
          <span className="flex items-center gap-1 text-xs">
            <Heart /> <span className="font-medium">{likes}</span>
          </span>
          <span className="flex items-center gap-1 text-xs">
            <Comment /> <span className="font-medium">{comments}</span>
          </span>
        </div>
      </div>
    </div>
  )
);
NewsCard.displayName = "NewsCard";
