import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2 py-1 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent dark:bg-tokena-light-gray/15 bg-tokena-dark text-tokena-white",
        outline: "text-tokena-dark-gray border border-tokena-dark-gray",
        ghost: "border-tokena-light-gray bg-tokena-light-gray",
      },
      size: {
        lg: "px-2 py-1 text-xs h-6",
        sm: "px-1.5 py-1 !text-xxs h-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
