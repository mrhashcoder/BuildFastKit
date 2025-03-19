"use client";

import { Column } from "@tanstack/react-table";
import { ChevronsUpDown, ArrowUpDown } from "lucide-react";

interface EntryDataTableColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>;
  title: string;
}

export function EntryDataTableColumnHeader<TData, TValue>({
  column,
  title,
}: EntryDataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div>{title}</div>;
  }

  const isSorted = column.getIsSorted();
  return (
    <button
      className="flex items-center space-x-2"
      onClick={() => column.toggleSorting(isSorted === "asc")}
    >
      <span>{title}</span>
      {isSorted === "desc" ? (
        <ChevronsUpDown className="h-4 w-4" />
      ) : isSorted === "asc" ? (
        <ChevronsUpDown className="h-4 w-4 rotate-180" />
      ) : (
        <ArrowUpDown className="h-4 w-4" />
      )}
    </button>
  );
}
