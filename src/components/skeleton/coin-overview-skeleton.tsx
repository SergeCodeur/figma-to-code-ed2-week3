import { Skeleton } from "@/components/ui/skeleton";

const CoinOverviewSkeleton = () => {
  return (
    <>
      <div className="flex justify-between">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-6" />
      </div>
      <div className="space-y-[26px]">
        <div>
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-4 w-24 mt-2" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-40" />
          </div>
          <Skeleton className="h-6 w-24" />
        </div>
        <ul className="space-y-1.5">
          <li className="flex items-center justify-between">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-16" />
          </li>
          <li className="flex items-center justify-between">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-24" />
          </li>
          <li className="flex items-center justify-between">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-32" />
          </li>
          <li className="flex items-center justify-between">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-32" />
          </li>
          <li className="flex items-center justify-between">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-32" />
          </li>
        </ul>
        <div>
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-16 w-full mt-2" />
        </div>
        <Skeleton className="h-10 w-full mt-4" />
      </div>
    </>
  );
};

export default CoinOverviewSkeleton;
