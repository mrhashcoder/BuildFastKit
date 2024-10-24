"use client";

import React from "react";
import { SidebarProvider } from "../ui/sidebar";
import { cn } from "@/lib/utils";

const ProviderSidebar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <div
        className={cn(
          "absolute top-0 z-40 w-full bg-background transition-all duration-300 ease-in-out",
          open ? "pl-64" : "pl-0"
        )}
      >
        {children}
      </div>
    </SidebarProvider>
  );
};

export default ProviderSidebar;
