"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Bell, ChevronRight } from "lucide-react";
import ProfileNavCard from "../main/profile-nav-card";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "../ui/button";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function TopNav() {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "BuildFastKit", href: "#" },
    { label: "dashboard", href: "#" },
  ];

  return (
    <nav className="px-3 sm:px-6 flex items-center justify-between bg-white dark:bg-[#0F0F12] border-b border-gray-200 dark:border-[#1F1F23] h-full">
      <div className="font-medium text-sm hidden lg:flex items-center space-x-1 truncate max-w-[500px]">
        {breadcrumbs.map((item, index) => (
          <div key={item.label} className="flex">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400 mx-1" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 dark:text-gray-100">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4 ml-auto">
        <Button
          variant="outline"
          size="icon"
          className="border-primary border-[1px] rounded-full hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors"
        >
          <Bell className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] text-gray-600 dark:text-gray-300" />
        </Button>

        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline" 
              size="icon"
              className="border-primary border-[1px] rounded-full hover:bg-gray-100 dark:hover:bg-[#1F1F23] transition-colors"
            >
              <Image
                src="/images/avatar.png"
                alt="User avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="w-[280px] sm:w-80 bg-background border-border rounded-lg shadow-lg"
          >
            <ProfileNavCard avatar="" />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
