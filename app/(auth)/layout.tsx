"use client";

import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/core/navbar";
import Footer from "@/components/core/footer";
import AuthLayout from "@/components/auth/auth-layout";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="">
      <AuthLayout>
        <>
          <NavBar />
          <div className="w-7xl flex justify-center">{children}</div>
          <Footer />
          <Toaster />
        </>
      </AuthLayout>
    </div>
  );
}
