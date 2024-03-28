"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="flex flex-col min-h-screen p-2">
          <div className="flex flex-1   justify-center">
            <div className="flex flex-col my-20   gap-8 max-w-[500px] px-8">
              <div className=" ">
                <h1 className="text-4xl text-blue-950 ">Ruh roh....</h1>
              </div>
              <div className=" ">
                <p className="text-lg text-blue-950">Something went wrong!</p>
              </div>
              <div className="flex justify-end mt-16">
                <button onClick={() => reset()} className="primaryButton">
                  Try again
                </button>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
