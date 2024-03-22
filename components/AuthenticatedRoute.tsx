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

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    } else if (!roles || roles.includes("Pending")) {
      router.replace("/signup");
    }
  }, [user, isLoading, router, roles]);

  if (isLoading || !user) {
    return <div>Loading...</div>; // Or a custom loading component
  }

  return <>{children}</>;
};
