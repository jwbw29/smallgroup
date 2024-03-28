"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Schedule", href: "/schedule" },
  { name: "Roster", href: "/roster" },
  { name: "Profile", href: "/profile" },
];

//TODO Might need to change this back to Page() if there are errors
export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-around lg:justify-end lg:gap-12">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("customLink", {
              "bg-sky-100 text-blue-600": pathname === link.href,
            })}
          >
            <h3 className="text-sm">{link.name}</h3>
          </Link>
        );
      })}
    </nav>
  );
}
