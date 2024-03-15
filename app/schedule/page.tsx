// ** might be able to use client side rendering since we're not displaying data on this page

import Nav from "@/ui/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Fall 2023", href: "/schedule/fall23" },
  { name: "Spring 2024", href: "/schedule/spring24" },
];

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-2">
      <Nav />
      <div className="flex flex-col flex-1 testBorder p-4">
        {/* TODO Not MVP */}
        {/* <div className="flex justify-end testBorder m-4">
          <button className="testBorder rounded-md py-2 px-4 shadow-lg">
            New Event
          </button>
        </div> */}
        <div className="flex flex-col testBorder items-center">
          {links.map((link) => {
            return (
              <Link key={link.name} href={link.href} className="customLink">
                <h2>{link.name}</h2>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
// <Link href="/schedule/fall23" className="testBorder">
//   <h2>Fall 2023</h2>
// </Link>
// <Link href="/schedule/spring24" className="testBorder">
//   <h2>Spring 2024</h2>
// </Link>
