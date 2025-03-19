"use client";

import * as React from "react";
import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

import EntryDataTableViewOptions from "./entry-data-table-view-options";
import EntryDataTableFacetedFilter from "./entry-data-table-faceted-filter";

interface EntryDataTableToolbarProps<TData> {
  table: Table<TData>;
  searchKey: string;
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  onInvite?: (entry: TData) => void;
  onAdd?: (entry: TData) => void;
}

export default function EntryDataTableToolbar<TData>({
  table,
  searchKey,
  globalFilter,
  setGlobalFilter,
  onInvite,
  onAdd,
}: EntryDataTableToolbarProps<TData>) {
  const [isViewOptionsOpen, setIsViewOptionsOpen] = React.useState(false);

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={`Filter ${searchKey}...`}
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* Example of a faceted filter. You can replicate the "Status" or "Role" filters here. */}
        <EntryDataTableFacetedFilter
          column={table.getColumn("status")}
          title="Status"
          options={["Active", "Inactive", "Invited", "Suspended"]}
        />
        <EntryDataTableFacetedFilter
          column={table.getColumn("role")}
          title="Role"
          options={["Admin", "Manager", "Editor", "Viewer"]}
        />
      </div>

      <div className="flex items-center space-x-2">
        {onInvite && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onInvite(table.getRowModel().rows[0]?.original)}
          >
            Invite Entry
          </Button>
        )}
        {onAdd && (
          <Button
            size="sm"
            onClick={() => onAdd(table.getRowModel().rows[0]?.original)}
          >
            Add Entry
          </Button>
        )}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsViewOptionsOpen(!isViewOptionsOpen)}
          className="hidden h-8 lg:flex"
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          View Options
        </Button>
        {isViewOptionsOpen && (
          <EntryDataTableViewOptions
            table={table}
            onClose={() => setIsViewOptionsOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
