// app/components/AuthenticatedRoute.tsx
"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface AuthenticatedRouteProps {
  children: React.ReactNode;
}

export const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  children,
}) => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  // Access roles from the user object
  const roles = user
    ? (user["https://smallgroup.vercel.app/roles"] as string[])
    : null;

  // Access login count from the user object
  const loginCount = user
    ? (user["https://smallgroup.vercel.app/logins"] as number)
    : null;

  useEffect(() => {
    // if no user, route to login
    if (!isLoading && !user) {
      router.replace("/login");
    } else if (
      // role is pending OR users first login, route to signup
      (roles && roles.includes("Pending")) ||
      (loginCount && loginCount === 1)
    ) {
      router.replace("/signup");
    }
  }, [user, isLoading, router, roles, loginCount]);

  if (isLoading || !user) {
    return <div>Loading...</div>; // Or a custom loading component
  }

  return <>{children}</>;
};
