import Link from "next/link";
import Nav from "@/ui/nav";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-2">
      <Nav />
      <div className="flex flex-1 items-center testBorder">
        <div className="flex flex-col min-h-fit h-60 p-6 w-full testBorder items-center justify-center gap-4">
          <input
            type="password"
            placeholder="Password"
            className="testBorder p-2"
          />
          <button className="testBorder w-fit px-12 py-2">Enter</button>
        </div>
      </div>
    </main>
  );
}
