export type TableColumnType =
  | "text"
  | "email"
  | "status"
  | "role"
  | "select"
  | "actions";

export interface TableColumn {
  key: string;
  label: string;
  type: TableColumnType;
  options?: string[]; // For status, role, or other enum-like fields
  sortable?: boolean;
  filterable?: boolean;
  visible?: boolean;
  editable?: boolean;
}

export interface TableSchema {
  columns: TableColumn[];
  title: string;
  description: string;
  searchKey: string;
}
