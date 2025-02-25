"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../providers/strapi-auth-provider";
import { afterAuthLink, authLink } from "@/config/links";

interface LayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: LayoutProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log(isLoading, isAuthenticated);
    if (isLoading) {
      return;
    }
    if (isAuthenticated) {
      router.push(afterAuthLink.path); // Redirect unauthenticated users
      router.refresh();
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading)
    return <div className="w-7xl flex justify-center h-screen">Loading...</div>; // Show loading until auth check is done

  return !isAuthenticated ? <>{children}</> : null;
};

export default AuthLayout;
