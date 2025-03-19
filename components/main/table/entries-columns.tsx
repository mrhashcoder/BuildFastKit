"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { TableSchema } from "./table-schema";
import { EntryDataTableColumnHeader } from "./entry-data-table-column-header";
import EntryDataTableRowActions from "./entry-data-table-row-actions";

/**
 * Export a function so we can pass `onEdit` and `onDelete` from the parent.
 */
export function createEntriesColumns<TData>(
  schema: TableSchema,
  onEdit?: (entry: TData) => void,
  onDelete?: (entry: TData) => void,
  onInvite?: (entry: TData) => void,
  onAdd?: (entry: TData) => void
): ColumnDef<TData>[] {
  return schema.columns.map((column) => {
    const columnDef: ColumnDef<TData> = {
      accessorKey: column.key,
      header: column.sortable
        ? ({ column: tableColumn }) => (
            <EntryDataTableColumnHeader
              column={tableColumn}
              title={column.label}
            />
          )
        : column.label,
      enableSorting: column.sortable,
      enableHiding: true,
    };

    // Add cell renderer based on column type
    if (column.type === "select") {
      columnDef.cell = ({ row, table }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={(e) => row.toggleSelected(e.target.checked)}
        />
      );
      columnDef.header = ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllPageRowsSelected()}
          onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
        />
      );
    } else if (column.type === "status") {
      columnDef.cell = ({ row }) => {
        const status = row.getValue(column.key) as string;
        return (
          <span
            className={
              status === "Active"
                ? "text-green-600 font-medium"
                : status === "Suspended"
                  ? "text-red-600 font-medium"
                  : status === "Invited"
                    ? "text-blue-600 font-medium"
                    : "text-muted-foreground"
            }
          >
            {status}
          </span>
        );
      };
    } else if (column.type === "actions") {
      columnDef.cell = ({ row }) => {
        const entry = row.original;
        return (
          <EntryDataTableRowActions
            onEdit={onEdit ? () => onEdit(entry) : undefined}
            onDelete={onDelete ? () => onDelete(entry) : undefined}
            onInvite={onInvite ? () => onInvite(entry) : undefined}
            onAdd={onAdd ? () => onAdd(entry) : undefined}
          />
        );
      };
    }

    return columnDef;
  });
}
