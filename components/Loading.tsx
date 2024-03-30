"use client";

export default function Loading() {
  return (
    <main className="flex flex-col min-h-screen p-2 items-center justify-center">
      <div className="flex flex-col items-center gap-12">
        <div className=" bg-blue-200 h-[200px] w-[200px] rounded-full"></div>
        <div className=" bg-blue-200 w-32 h-12 rounded-lg "></div>
      </div>
    </main>
  );
}
