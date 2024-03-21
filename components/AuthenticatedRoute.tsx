// app/components/AuthenticatedRoute.tsx
"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// This could be in a separate file like types.ts or directly in your component file

interface MyUser {
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
  "https://smallgroup.vercel.app/roles"?: string[]; // Your custom roles
}

interface AuthenticatedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[]; // Optional prop to specify allowed roles for a route
}

export const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  children,
  allowedRoles = [], // Default to empty, meaning no specific role required
}) => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const [userRoles, setUserRoles] = useState<string[]>([]);

  useEffect(() => {
    const roles = user
      ? (user as MyUser)["https://smallgroup.vercel.app/roles"] || []
      : [];
    setUserRoles(roles);

    if (!isLoading && !user) {
      // User not authenticated, redirect to login
      router.replace("/login");
    } else if (!isLoading && user && allowedRoles.length > 0) {
      // Check if user roles do not match allowed roles for the route
      const hasRequiredRole = userRoles.some((role) =>
        allowedRoles.includes(role)
      );
      if (!hasRequiredRole) {
        // Redirect to an unauthorized or a specific page based on your logic
        router.replace("/unauthorized");
      }
    }
  }, [user, isLoading, router, allowedRoles, userRoles]);

  if (isLoading || !user) {
    return <div>Loading...</div>; // Or a custom loading component
  }

  return <>{children}</>;
};
