import { usersStore } from "@/store/store-instance";
import React from "react";
import { useRecoilValue, selectorFamily } from "recoil";
import { UserTable } from "../main/users-table";

interface TableListManagerProps {
  userIds: string[];
}

function TableListManager({ userIds }: TableListManagerProps) {
  const users = useRecoilValue(usersStore.aggregatedEntitiesSelector(userIds));

  return <UserTable users={users} />;
}

export default TableListManager;
