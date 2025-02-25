import {
  Home,
  Info,
  Briefcase,
  Mail,
  LogIn,
  User,
  FileText,
  UserCheck,
  MailIcon,
  Siren,
} from "lucide-react";
import { NavLink } from "@/types";

export const privateLinkMap: Record<string, NavLink> = {
  application: {
    name: "App",
    path: "/app",
    description: "The Application",
    icon: Home,
  },
  private: {
    name: "Private",
    path: "/app/private",
    description: "The Private Route",
    icon: UserCheck,
  },
  invoice: {
    name: "Invoice",
    path: "/app/invoice",
    description: "The Invoice",
    icon: FileText,
  },
  profile: {
    name: "Profile",
    path: "/app/profile",
    description: "The Profile",
    icon: User,
  },
};

export const publicLinkMap: Record<string, NavLink> = {
  login: {
    name: "Login",
    path: "/login",
    description: "The Login",
    icon: LogIn,
  },
  signup: {
    name: "Register",
    path: "/signup",
    description: "The Signup",
    icon: User,
  },
  home: {
    name: "Home",
    path: "/",
    description: "The Home",
    icon: Home,
  },
  about: {
    name: "About",
    path: "/about",
    description: "The About",
    icon: Info,
  },
  pricing: {
    name: "Pricing",
    path: "/pricing",
    description: "The Pricing Page",
    icon: Briefcase,
  },
  contactus: {
    name: "ContactUs",
    path: "/contact",
    description: "Contact Form Page",
    icon: MailIcon,
  },
  policy: {
    name: "Policy",
    path: "/policy",
    description: "The Policy Page",
    icon: Siren,
  },
};

export const NavbarLinks: NavLink[] = [
  publicLinkMap.home,
  publicLinkMap.about,
  publicLinkMap.pricing,
  publicLinkMap.contactus,
];

export const FooterLinks: NavLink[] = [
  publicLinkMap.about,
  publicLinkMap.pricing,
  publicLinkMap.contactus,
  publicLinkMap.policy,
];

export const afterAuthLink: NavLink = privateLinkMap.application;

export const authLink: NavLink = publicLinkMap.login;

export const authRegisterLink: NavLink = publicLinkMap.signup;
