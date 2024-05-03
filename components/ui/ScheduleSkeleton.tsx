import { Skeleton } from "@/components/ui/skeleton";

export function ScheduleSkeleton() {
  return (
    <div className="flex flex-col w-3/4 md:max-w-[750px]">
      <div className="flex justify-center my-6 ">
        <div className="flex w-full h-fit md:justify-end">
          {/* //// SELECTOR */}{" "}
          <Skeleton className="bg-slate-400 rounded-md text-white w-full min-w-fit h-10 md:h-12 md:w-48"></Skeleton>
        </div>
      </div>
      {/* //// LISTED EVENTS */}
      <div className="flex flex-col flex-1">
        <div className="flex flex-col h-fit gap-8 my-6">
          <Skeleton className="flex flex-col bg-slate-400 h-72 justify-around px-4" />
          <Skeleton className="flex flex-col bg-slate-400 h-72 justify-around px-4" />
        </div>
      </div>
    </div>
  );
}
