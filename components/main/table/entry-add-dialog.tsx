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

interface EntryAddDialogProps<TData> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (newEntry: TData) => void;
  schema: TableSchema;
}

export default function EntryAddDialog<TData>({
  open,
  onOpenChange,
  onAdd,
  schema,
}: EntryAddDialogProps<TData>) {
  // Form state based on schema
  const [formData, setFormData] = React.useState<Partial<TData>>({});

  // Reset form when dialog opens
  React.useEffect(() => {
    if (open) {
      const initialData: Partial<TData> = {};
      schema.columns.forEach((column) => {
        if (column.type === "select" || column.type === "actions") return;
        initialData[column.key as keyof TData] = undefined;
      });
      setFormData(initialData);
    }
  }, [open, schema]);

  function handleAdd() {
    const newEntry = {
      id: Date.now().toString(),
      ...formData,
    } as TData;
    onAdd(newEntry);
    onOpenChange(false);
  }

  function handleInputChange(key: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Entry</DialogTitle>
          <DialogDescription>
            Fill out the fields below to create a new entry.
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
          <Button onClick={handleAdd}>Add Entry</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
