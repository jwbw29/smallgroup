"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  // Access roles from the user object
  const roles = user ? user["https://smallgroup.vercel.app/roles"] : null;

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
        {/* Display the roles */}
        <div>
          <h2>Role: </h2>
          {/* Check if roles exist and join them with a comma if there are multiple roles */}
          <p>{roles ? roles.join(", ") : "No roles"}</p>
        </div>
      </div>
    )
  );
}
