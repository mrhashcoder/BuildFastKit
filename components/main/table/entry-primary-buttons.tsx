"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

interface EntryPrimaryButtonsProps {
  onAdd?: () => void;
  onInvite?: () => void;
}

export default function EntryPrimaryButtons({
  onAdd,
  onInvite,
}: EntryPrimaryButtonsProps) {
  return (
    <div className="flex items-center space-x-2">
      {onInvite && (
        <Button variant="secondary" onClick={onInvite}>
          Invite Entry
        </Button>
      )}
      {onAdd && <Button onClick={onAdd}>Add Entry</Button>}
    </div>
  );
}
