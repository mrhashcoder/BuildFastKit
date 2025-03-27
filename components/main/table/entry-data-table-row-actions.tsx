"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

interface EntryDataTableRowActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
  onInvite?: () => void;
  onAdd?: () => void;
}

export default function EntryDataTableRowActions({
  onEdit,
  onDelete,
  onInvite,
  onAdd,
}: EntryDataTableRowActionsProps) {
  return (
    <DropdownMenu>
      <>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {onInvite && (
            <DropdownMenuItem onClick={onInvite}>Invite Entry</DropdownMenuItem>
          )}
          {onAdd && (
            <DropdownMenuItem onClick={onAdd}>Add Entry</DropdownMenuItem>
          )}
          {onEdit && <DropdownMenuItem onClick={onEdit}>Edit</DropdownMenuItem>}
          {onDelete && (
            <DropdownMenuItem onClick={onDelete} className="text-red-600">
              Delete
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </>
    </DropdownMenu>
  );
}
