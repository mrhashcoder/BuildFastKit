"use client";

import React from "react";
import { useRecoilValue } from "recoil";
import { usersStore } from "@/store/store-instance";
import { EntriesTable } from "@/components/main/table/entries-table";
import { UserSchema } from "@/types/user-schema";
import EntryAddDialog from "@/components/main/table/entry-add-dialog";
import EntryEditDialog from "@/components/main/table/entry-edit-dialog";
import EntryInviteDialog from "@/components/main/table/entry-invite-dialog";
import EntryDeleteDialog from "@/components/main/table/entry-delete-dialog";
import { User } from "@/types/collections";

interface TableListManagerProps {
  userIds: (string | number)[];
}

function UserListManager({ userIds }: TableListManagerProps) {
  const users = useRecoilValue(usersStore.aggregatedEntitiesSelector(userIds));

  // Dialog states
  const [inviteOpen, setInviteOpen] = React.useState(false);
  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [userToEdit, setUserToEdit] = React.useState<User | null>(null);
  const [userToDelete, setUserToDelete] = React.useState<User | null>(null);

  // Handlers for each dialog action
  const handleInvite = (email: string) => {
    // Handle invite logic here
    console.log("Invite user with email:", email);
  };

  const handleAdd = (newUser: User) => {
    // Handle add logic here
    console.log("Add new user:", newUser);
  };

  const handleEdit = (updatedUser: User) => {
    // Handle edit logic here
    console.log("Update user:", updatedUser);
  };

  const handleDelete = () => {
    if (userToDelete) {
      // Handle delete logic here
      console.log("Delete user:", userToDelete);
      setDeleteOpen(false);
      setUserToDelete(null);
    }
  };

  return (
    <div className="space-y-4">
      <EntriesTable<User>
        data={users}
        schema={UserSchema}
        onEdit={(user) => {
          setUserToEdit(user);
          setEditOpen(true);
        }}
        onDelete={(user) => {
          setUserToDelete(user);
          setDeleteOpen(true);
        }}
        onInvite={() => setInviteOpen(true)}
        onAdd={() => setAddOpen(true)}
      />

      {/* Invite Dialog */}
      <EntryInviteDialog
        open={inviteOpen}
        onOpenChange={setInviteOpen}
        onInvite={handleInvite}
        title="Invite User"
        description="Enter the email address to send an invitation."
        confirmText="Send Invite"
        cancelText="Cancel"
      />

      {/* Add Dialog */}
      <EntryAddDialog<User>
        open={addOpen}
        onOpenChange={setAddOpen}
        onAdd={handleAdd}
        schema={UserSchema}
      />

      {/* Edit Dialog */}
      <EntryEditDialog<User>
        open={editOpen}
        onOpenChange={setEditOpen}
        entry={userToEdit}
        onEdit={handleEdit}
        schema={UserSchema}
      />

      {/* Delete Dialog */}
      <EntryDeleteDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        onDelete={handleDelete}
        title="Delete User"
        description={`Are you sure you want to delete ${userToDelete?.username || "this user"}? This action cannot be undone.`}
        confirmText="Delete User"
        cancelText="Cancel"
      />
    </div>
  );
}

export default UserListManager;
