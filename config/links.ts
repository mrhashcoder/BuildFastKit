import { NavLink } from "@/types";

export const privateLinkMap: any = {
  dashboard: {
    name: "dashboard",
    path: "/dashboard",
    description: "The Dashboard",
  },
  private: {
    name: "private",
    path: "/private",
    description: "The Private Route",
  },
  invoice: {
    name: "invoice",
    path: "/invoice",
    description: "the Inoivce",
  },
  profile: {
    name: "profile",
    path: "/profile",
    description: "the Profile",
  },
};

export const publicLinkMap: any = {
  login: {
    name: "Login",
    path: "/login",
    description: "The Login",
  },
  signup: {
    name: "Register",
    path: "/signup",
    description: "The Signup",
  },
  home: {
    name: "Home",
    path: "/",
    description: "The Home",
  },
  about: {
    name: "About",
    path: "/about",
    description: "The About",
  },
  pricing: {
    name: "Pricing",
    path: "/pricing",
    description: "The Pricing Page",
  },
};

export const DashboardLinks: NavLink[] = [
  privateLinkMap.dashboard,
  privateLinkMap.private,
];

export const NavbarLinks: NavLink[] = [
  publicLinkMap.home,
  publicLinkMap.about,
  publicLinkMap.pricing,
];

export const afterAuthLink: NavLink = privateLinkMap.dashboard;

export const authLink: NavLink = publicLinkMap.login;

export const authRegisterLink: NavLink = publicLinkMap.signup;
