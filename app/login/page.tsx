"use client";

import Image from "next/image";
import logo from "@/public/sg_logo.png";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    window.location.href = "/";
  }

  return (
    <main className="flex flex-col min-h-screen p-2 items-center justify-center">
      <div className="flex flex-col items-center testBorder gap-12">
        <Image src={logo} width={200} height={200} alt="Small Group Logo" />
        <a href="/api/auth/login?returnTo=/">
          <button className="testBorder w-fit px-12 py-2">Log In</button>
        </a>
      </div>
    </main>
  );
}
