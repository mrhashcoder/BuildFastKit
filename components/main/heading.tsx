"use client";

import * as React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="mb-6">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
