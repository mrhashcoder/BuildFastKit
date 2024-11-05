"use client";

import React from "react";
import { sidebarLinks } from "@/config/links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nonActiveLinks = ["/signup", "/login"];

function Sidebar() {
  const pathname = usePathname();

  const validLinks = () => {
    return nonActiveLinks.some((link) => pathname === link);
  };

  return validLinks() ? (
    <></>
  ) : (
    <div className="md:w-60 sticky left-0 border-r border-zinc-200 hidden md:flex">
      <div className="flex flex-col w-full">
        {sidebarLinks.map((item, index) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link href={item.route} key={index}>
              <h1
                className={cn(
                  "text-lg pl-3 py-1 rounded border border-transparent mx-2 mt-1",
                  { "bg-blue-400": isActive }
                )}
              >
                {item.title}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
