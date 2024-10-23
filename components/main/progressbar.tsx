"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

export function Progressbar() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(90), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-full" />;
}
