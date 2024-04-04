"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@auth0/nextjs-auth0/client";

interface MdPicture {
  picture: string;
}

interface CustomUser {
  name?: string;
  email?: string;
  "smallgroup/mdPicture"?: {
    picture: string;
  };
}

const links = [
  { name: "Home", href: "/" },
  { name: "Schedule", href: "/schedule" },
  { name: "Roster", href: "/roster" },
  // { name: "Profile", href: "/profile" },
];

//TODO Might need to change this back to Page() if there are errors
export default function Navigation() {
  const pathname = usePathname();
  const { user } = useUser() as { user: CustomUser };
  const mdPictureUrl = user?.["smallgroup/mdPicture"]?.picture;

  return (
    <nav className=" flex justify-center gap-4 lg:justify-end lg:gap-12 border-b-2 border-b-white p-4 mx-4">
      <div className=" flex gap-2 lg:justify-end lg:gap-12">
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
        {/* //// PROFILE IMAGE HERE */}
        {mdPictureUrl ? (
          <Link href="/profile" className="self-center">
            <Avatar>
              <AvatarImage src={mdPictureUrl} />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
          </Link>
        ) : (
          <Link
            href="/profile"
            className={clsx("customLink", {
              "bg-sky-100 text-blue-600": pathname === "/profile",
            })}
          >
            <h3 className="text-sm">Profile</h3>
          </Link>
        )}
      </div>
    </nav>
  );
}
