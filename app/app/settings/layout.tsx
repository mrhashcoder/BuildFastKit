"use client";

import * as React from "react";
import { Settings, User, Palette, Monitor, Bell } from "lucide-react";
import SideBarMenu from "@/components/core/sidebar-menu";

const menuItems = [
  {
    title: "Account",
    name: "Account",
    href: "/app/settings/account",
    path: "/app/settings/account",
    icon: User,
    description: "Manage your account settings",
  },
  {
    title: "Appearance",
    name: "Appearance",
    href: "/app/settings/appearance",
    path: "/app/settings/appearance",
    icon: Palette,
    description: "Customize your app's appearance",
  },
  {
    title: "Display",
    name: "Display",
    href: "/app/settings/display",
    path: "/app/settings/display",
    icon: Monitor,
    description: "Configure display settings",
  },
  {
    title: "Notifications",
    name: "Notifications",
    href: "/app/settings/notifications",
    path: "/app/settings/notifications",
    icon: Bell,
    description: "Manage notification preferences",
  },
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container relative mx-auto p-6">
      <div className="flex items-center space-x-4 mb-8">
        <Settings className="h-6 w-6" />
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
      </div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5">
          <SideBarMenu items={menuItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
