"use client";
import TableListManager from "@/components/feature/table-list-manager";
import { UserTable } from "@/components/main/users-table";
import { usersStore, wallpapersStore } from "@/store/store-instance";
import { User } from "@/types/collections";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function UsersPage() {
  const fetchUsers = usersStore.useFetchEntities();
  const fetchWallpaper = wallpapersStore.useFetchEntities();
  const [userIdList, setUserIdList] = useState<string[]>([]);

  useEffect(() => {
    fetchUsers()
      .then((ids) => {
        console.log(ids);
        setUserIdList(ids);
      })
      .catch((err) => {
        console.log(err);
      });

    fetchWallpaper()
      .then((ids) => {
        console.log(ids);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <TableListManager userIds={userIdList} />
    </>
  );
}
