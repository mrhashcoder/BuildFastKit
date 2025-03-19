"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EntryInviteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onInvite: (email: string) => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
}

export default function EntryInviteDialog({
  open,
  onOpenChange,
  onInvite,
  title = "Invite Entry",
  description = "Enter the email address to send an invitation.",
  confirmText = "Send Invite",
  cancelText = "Cancel",
}: EntryInviteDialogProps) {
  const [email, setEmail] = React.useState("");

  function handleConfirm() {
    onInvite(email);
    onOpenChange(false);
    setEmail("");
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {cancelText}
          </Button>
          <Button onClick={handleConfirm}>{confirmText}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
