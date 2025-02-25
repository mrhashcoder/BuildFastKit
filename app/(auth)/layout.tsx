"use client";

import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/main/navbar";
import Footer from "@/components/main/footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="">
      <NavBar />
      <div className="w-7xl flex justify-center">{children}</div>
      <Footer />
      <Toaster />
    </div>
  );
}
