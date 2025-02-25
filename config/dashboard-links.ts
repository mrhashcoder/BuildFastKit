import {
  Home,
  BarChart2,
  Building2,
  Folder,
  Wallet,
  Receipt,
  CreditCard,
  Users2,
  Shield,
  MessagesSquare,
  Video,
  Settings,
  HelpCircle,
} from "lucide-react";

import type { NavLink } from "@/types";
export interface NavCategory {
  category: string;
  links: NavLink[];
}

export const DashboardLinks: NavCategory[] = [
  {
    category: "Overview",
    links: [
      {
        name: "Dashboard",
        path: "/app",
        description: "View key metrics and insights",
        icon: Home,
      },
      {
        name: "Analytics",
        path: "/app/analytics",
        description: "Analyze trends and data",
        icon: BarChart2,
      },
      {
        name: "Organization",
        path: "/app/organization",
        description: "Manage your organization structure",
        icon: Building2,
      },
      {
        name: "Projects",
        path: "/app/projects",
        description: "Track and manage projects",
        icon: Folder,
      },
    ],
  },
  {
    category: "Finance",
    links: [
      {
        name: "Transactions",
        path: "/app/transactions",
        description: "View and manage transactions",
        icon: Wallet,
      },
      {
        name: "Invoices",
        path: "/app/invoices",
        description: "Manage and send invoices",
        icon: Receipt,
      },
      {
        name: "Payments",
        path: "/app/payments",
        description: "Handle payment processing",
        icon: CreditCard,
      },
    ],
  },
  {
    category: "Team",
    links: [
      {
        name: "Members",
        path: "/app/members",
        description: "Manage team members",
        icon: Users2,
      },
      {
        name: "Permissions",
        path: "/app/permissions",
        description: "Set roles and permissions",
        icon: Shield,
      },
      {
        name: "Chat",
        path: "/app/chat",
        description: "Communicate with your team",
        icon: MessagesSquare,
      },
      {
        name: "Meetings",
        path: "/app/meetings",
        description: "Schedule and join meetings",
        icon: Video,
      },
    ],
  },
  {
    category: "Settings",
    links: [
      {
        name: "Settings",
        path: "/app/settings",
        description: "Configure system settings",
        icon: Settings,
      },
      {
        name: "Help",
        path: "/login",
        description: "Get help and support",
        icon: HelpCircle,
      },
    ],
  },
];
