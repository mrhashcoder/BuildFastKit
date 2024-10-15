import { NavLink } from "@/types";

export const privateLinks: NavLink[] = [
  {
    name: "dashboard",
    path: "/dashboard",
    description: "The Dashboard",
  },
  {
    name: "private",
    path: "/private",
    description: "The Private Route",
  },
  {
    name: "invoice",
    path: "/invoice",
    description: "the Inoivce",
  },
  {
    name: "profile",
    path: "/profile",
    description: "the Profile",
  },
];

export const publicLinks: NavLink[] = [
  {
    name: "login",
    path: "/login",
    description: "the Login",
  },
  {
    name: "signin",
    path: "/login",
    description: "the Login",
  },
  {
    name: "root",
    path: "/",
    description: "The root",
  },
];

export const afterAuthLink: NavLink = privateLinks[0];

export const authLink: NavLink = publicLinks[0];
