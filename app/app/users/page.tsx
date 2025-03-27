"use client";
import UserListManager from "@/components/feature/user-list-manager";
import { Heading } from "@/components/main/heading";
import { UserTable } from "@/components/main/users-table";
import { usersStore, wallpapersStore } from "@/store/store-instance";
import { User } from "@/types/collections";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function UsersPage() {
  const userIds = usersStore.useEntityIds();
  return (
    <>
      <UserListManager userIds={userIds} />
    </>
  );
}
