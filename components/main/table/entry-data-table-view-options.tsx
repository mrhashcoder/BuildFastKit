"use client";

import * as React from "react";
import { Table } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";

interface EntryDataTableViewOptionsProps<TData> {
  table: Table<TData>;
  onClose: () => void;
}

export default function EntryDataTableViewOptions<TData>({
  table,
  onClose,
}: EntryDataTableViewOptionsProps<TData>) {
  return (
    <div className="absolute right-0 z-10 mt-2 w-48 rounded-md border bg-popover p-2 shadow-md">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">Columns</span>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-2">
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => {
            return (
              <div key={column.id} className="flex items-center space-x-2">
                <Checkbox
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  id={column.id}
                />
                <label
                  htmlFor={column.id}
                  className="text-sm font-medium leading-none"
                >
                  {column.id}
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
}
