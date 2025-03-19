"use client";
import { useState, type JSX } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { NavLink } from "@/types";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: NavLink[];
}

export default function SideBarMenu({
  className,
  items,
  ...props
}: SidebarNavProps) {
  const pathname = usePathname();
  const navigate = useRouter();
  const [val, setVal] = useState(pathname ?? "/app/settings");

  const handleSelect = (e: string) => {
    setVal(e);
    navigate.push(e);
  };

  return (
    <>
      <div className="p-1 lg:hidden">
        <Select value={val} onValueChange={handleSelect}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.path} value={item.path}>
                <div className="flex gap-x-4 px-2 py-1">
                  <span className="scale-125">
                    <item.icon size={18} />
                  </span>
                  <span className="text-md">{item.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <ScrollArea
        type="always"
        className="hidden min-w-40 bg-background px-1 py-2 lg:block"
      >
        <nav
          className={cn(
            "flex space-x-2 py-1 lg:flex-col lg:space-x-0 lg:space-y-1",
            className
          )}
          {...props}
        >
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                pathname === item.path
                  ? "bg-muted hover:bg-muted"
                  : "hover:bg-transparent hover:underline",
                "justify-start"
              )}
            >
              <span className="mr-2">
                <item.icon size={18} />
              </span>
              {item.name}
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </>
  );
}
