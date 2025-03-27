"use client";

import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/core/sidebar";
import TopNav from "@/components/core/dashnavbar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ProtectedLayout from "@/components/auth/protected-layout";
import { RecoilRoot } from "recoil";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ProtectedLayout>
      <RecoilRoot>
        <div className="flex h-screen">
          <>
            <Sidebar />
            <div className="w-full flex flex-1 flex-col">
              <>
                <header className="h-16 border-b border-gray-200 dark:border-[#1F1F23]">
                  <TopNav />
                </header>
                <main className="w-full flex-1 overflow-auto p-6 bg-white dark:bg-[#0F0F12]">
                  {children}
                </main>
                <Toaster />
              </>
            </div>
          </>
        </div>
      </RecoilRoot>
    </ProtectedLayout>
  );
}
