"use client";

import type { ReactNode } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SideBarMenu from "@/components/core/sidebar-menu";
import { Heading } from "@/components/main/heading";
import { SettingLinks } from "@/config/dashboard-links";

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
    <>
      <Heading
        title="Manage Your Settings"
        subtitle="Manage your account settings and set e-mail preferences."
      />
      <div className="flex justify-start flex-col lg:flex-row">
        <SideBarMenu items={SettingLinks} className="max-w-sm" />
        <div className="m-16 lg:my-0">{children}</div>
      </div>
    </>
  );
}
