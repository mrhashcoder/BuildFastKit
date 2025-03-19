"use client";

import * as React from "react";
import { EntryDataTable } from "./entry-data-table";
import { createEntriesColumns } from "./entries-columns";
import { TableSchema } from "./table-schema";

interface EntriesTableProps<TData> {
  data: TData[];
  schema: TableSchema;
  onEdit?: (row: TData) => void;
  onDelete?: (row: TData) => void;
  onInvite?: (row: TData) => void;
  onAdd?: (row: TData) => void;
}

export function EntriesTable<TData>({
  data,
  schema,
  onEdit,
  onDelete,
  onInvite,
  onAdd,
}: EntriesTableProps<TData>) {
  // Build columns using the function from entries-columns.tsx
  const columns = React.useMemo(
    () => createEntriesColumns(schema, onEdit, onDelete, onInvite, onAdd),
    [schema, onEdit, onDelete, onInvite, onAdd]
  );

  return (
    <EntryDataTable
      columns={columns}
      data={data}
      searchKey={schema.searchKey}
      title={schema.title}
      description={schema.description}
      onInvite={onInvite}
      onAdd={onAdd}
    />
  );
}
