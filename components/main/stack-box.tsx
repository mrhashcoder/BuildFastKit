"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";

interface StackItem {
  name: string;
  description: string;
  icon: LucideIcon; // You can also type this as React.ReactNode if you prefer
}

interface StackBoxProps {
  title: string;
  items: StackItem[];
}

export function StackBox({ title, items }: StackBoxProps) {
  return (
    <section className="space-y-4 border rounded-md p-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.name} className="flex items-center p-4">
            <item.icon className="h-6 w-6 shrink-0 text-muted-foreground mx-4" />
            <div className="space-y-1 leading-tight">
              <p className="text-sm">{item.name}</p>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
