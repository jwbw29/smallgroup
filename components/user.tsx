"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className="flex flex-col gap-8">
        <div>
          <h2>Username: </h2>
          <p>{user.name}</p>
        </div>
        <div>
          <h2>Email: </h2>
          <p>{user.email}</p>
        </div>
      </div>
    )
  );
}
