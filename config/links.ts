import { NavLink } from "@/types"
import path from "path"

export const privateLinks: NavLink[] = [
  {
    name: "root",
    path: "/",
    description: "The root",
  },
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
]

export const publicLinks: NavLink[] = []

export const afterLoginLink: NavLink = privateLinks[2]
