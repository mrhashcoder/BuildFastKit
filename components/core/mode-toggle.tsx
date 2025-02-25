"use client";

import * as React from "react";
import { Icons } from "../ui/icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      className="border-primary border-[1px] rounded-full"
    >
      <Icons.sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ease-in duration-300 dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ease-in duration-300 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
