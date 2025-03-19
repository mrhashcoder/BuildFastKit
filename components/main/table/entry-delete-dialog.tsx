"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface EntryDeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
}

export default function EntryDeleteDialog({
  open,
  onOpenChange,
  onDelete,
  title = "Delete Entry",
  description = "Are you sure you want to delete this entry?",
  confirmText = "Delete",
  cancelText = "Cancel",
}: EntryDeleteDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {cancelText}
          </Button>
          <Button variant="destructive" onClick={onDelete}>
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
