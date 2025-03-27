"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableSchema } from "./table-schema";

interface EntryEditDialogProps<TData> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entry: TData | null;
  onEdit: (updatedEntry: TData) => void;
  schema: TableSchema;
}

export default function EntryEditDialog<TData>({
  open,
  onOpenChange,
  entry,
  onEdit,
  schema,
}: EntryEditDialogProps<TData>) {
  // Form state based on schema
  const [formData, setFormData] = React.useState<Partial<TData>>({});

  // Update form data when entry changes or dialog opens
  React.useEffect(() => {
    if (open && entry) {
      const initialData: Partial<TData> = {};
      schema.columns.forEach((column) => {
        if (column.type === "select" || column.type === "actions") return;
        initialData[column.key as keyof TData] =
          entry[column.key as keyof TData];
      });
      setFormData(initialData);
    }
  }, [open, entry, schema]);

  function handleSave() {
    if (!entry) return;
    const updatedEntry = {
      ...entry,
      ...formData,
    } as TData;
    onEdit(updatedEntry);
    onOpenChange(false);
  }

  function handleInputChange(key: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  if (!entry) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Entry</DialogTitle>
          <DialogDescription>
            Update the entry's details below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {schema.columns.map((column) => {
            if (
              column.type === "select" ||
              column.type === "actions" ||
              column.editable === false
            )
              return null;

            return (
              <div key={column.key} className="space-y-2">
                <Label htmlFor={column.key}>{column.label}</Label>
                {column.type === "status" || column.type === "role" ? (
                  <Select
                    value={formData[column.key as keyof TData] as string}
                    onValueChange={(value) =>
                      handleInputChange(column.key, value)
                    }
                  >
                    <>
                      <SelectTrigger>
                        <SelectValue placeholder={`Select ${column.label}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {column.options?.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </>
                  </Select>
                ) : (
                  <Input
                    id={column.key}
                    type={column.type === "email" ? "email" : "text"}
                    value={formData[column.key as keyof TData] as string}
                    onChange={(e) =>
                      handleInputChange(column.key, e.target.value)
                    }
                    placeholder={`Enter ${column.label.toLowerCase()}`}
                  />
                )}
              </div>
            );
          })}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
