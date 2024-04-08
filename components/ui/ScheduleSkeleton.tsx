import { Skeleton } from "@/components/ui/skeleton";

export function ScheduleSkeleton() {
  return (
    <div className="flex flex-col flex-1 items-center ">
      <div className="flex flex-col h-fit w-3/4 max-w-[750px] gap-8 my-6">
        <Skeleton className="flex flex-col bg-slate-400 h-72 justify-around px-4" />
        <Skeleton className="flex flex-col bg-slate-400 h-72 justify-around px-4" />
      </div>
    </div>
  );
}
