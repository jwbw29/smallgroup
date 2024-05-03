import { Skeleton } from "@/components/ui/skeleton";

export function ScheduleSkeleton() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-6 ">
        <div className="flex h-fit w-3/4 max-w-[750px] justify-between my-8 lg:my-16">
          {/* //// SELECTOR */}{" "}
          <Skeleton className="bg-slate-400 rounded-md text-white w-[9rem] min-w-fit h-10 lg:h-12 lg:w-36"></Skeleton>
          <Skeleton className="bg-slate-400 rounded-md text-white w-[9rem] min-w-fit h-10 lg:h-12 lg:w-36"></Skeleton>
        </div>
      </div>
      {/* //// LISTED EVENTS */}
      <div className="flex flex-col flex-1 items-center ">
        <div className="flex flex-col h-fit w-3/4 max-w-[750px] gap-8 my-6">
          <Skeleton className="flex flex-col bg-slate-400 h-72 justify-around px-4" />
          <Skeleton className="flex flex-col bg-slate-400 h-72 justify-around px-4" />
        </div>
      </div>
    </div>
  );
}
