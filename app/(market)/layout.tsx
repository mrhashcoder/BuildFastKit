// @ts-nocheck
"use client";

import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/core/navbar";
import Footer from "@/components/core/footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="">
      <NavBar />
      <div className="w-7xl flex justify-center min-h-screen">{children}</div>
      <Footer />
      <Toaster />
    </div>
  );
}
