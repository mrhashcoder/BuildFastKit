import { SignOut } from "@/components/main/signout";
import React from "react";
import { logout } from "@/lib/supabaseService";

export default function Dashboard() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignOut logout={logout} />
    </div>
  );
}
