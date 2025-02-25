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

export interface NavLink {
  name: string;
  path: string;
  icon: any;
}

export interface NavCategory {
  category: string;
  links: NavLink[];
}

export const NAV_LINKS: NavCategory[] = [
  {
    category: "Overview",
    links: [
      { name: "Dashboard", path: "/", icon: Home },
      { name: "Analytics", path: "/analytics", icon: BarChart2 },
      { name: "Organization", path: "/organization", icon: Building2 },
      { name: "Projects", path: "/projects", icon: Folder },
    ],
  },
  {
    category: "Finance",
    links: [
      { name: "Transactions", path: "/transactions", icon: Wallet },
      { name: "Invoices", path: "/invoices", icon: Receipt },
      { name: "Payments", path: "/payments", icon: CreditCard },
    ],
  },
  {
    category: "Team",
    links: [
      { name: "Members", path: "/members", icon: Users2 },
      { name: "Permissions", path: "/permissions", icon: Shield },
      { name: "Chat", path: "/chat", icon: MessagesSquare },
      { name: "Meetings", path: "/meetings", icon: Video },
    ],
  },
  {
    category: "Settings",
    links: [
      { name: "Settings", path: "/settings", icon: Settings },
      { name: "Help", path: "/help", icon: HelpCircle },
    ],
  },
];
