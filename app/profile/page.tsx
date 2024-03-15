"use client";

import Nav from "@/ui/nav";
import ProfileClient from "@/ui/user";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <main className="flex flex-col min-h-screen p-2">
      <Nav />{" "}
      {user && (
        <div className="flex flex-col flex-1 items-center gap-8">
          <h1 className="text-3xl text-center my-6">Profile</h1>{" "}
          <div className="flex flex-col h-fit w-3/4 gap-8 my-6">
            <ProfileClient />
          </div>
          <div className="flex w-3/4 justify-end">
            <a href="/api/auth/logout">
              <button className="border p-2 px-6 rounded-lg">Logout</button>
            </a>
          </div>
        </div>
      )}{" "}
    </main>
  );
}
