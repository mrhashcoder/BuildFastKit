"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu,
  Home,
  Info,
  Briefcase,
  Mail,
  LogIn,
  ArrowRight,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "../providers/strapi-auth-provider";
import {
  afterAuthLink,
  authLink,
  authRegisterLink,
  NavbarLinks,
} from "@/config/links";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            BuildFastKit
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {NavbarLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-md hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Authentication Buttons */}
          <div className="hidden md:flex">
            {isAuthenticated ? (
              <>
                <Button asChild>
                  <Link href={afterAuthLink.path}>
                    <>
                      <LayoutDashboard className="mr-2 h-5 w-5" />
                      Dashboard
                    </>
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" className="mr-2" asChild>
                  <Link href={authLink.path}>
                    <>
                      <LogIn className="mr-2 h-5 w-5" />
                      Login
                    </>
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={authRegisterLink.path}>
                    <>
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Register
                    </>
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4">
                    {NavbarLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className="flex items-center text-lg font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        <>
                          <item.icon className="mr-2 h-5 w-5" />
                          {item.name}
                        </>
                      </Link>
                    ))}

                    {isAuthenticated ? (
                      <>
                        <Button asChild className="w-full justify-start">
                          <Link href={afterAuthLink.path}>
                            <>
                              <LayoutDashboard className="mr-2 h-6 w-6" />
                              Dashboard
                            </>
                          </Link>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                          asChild
                        >
                          <Link href={authLink.path}>
                            <>
                              <LogIn className="mr-2 h-5 w-5" />
                              Login
                            </>
                          </Link>
                        </Button>
                        <Button className="w-full justify-start" asChild>
                          <Link href={authRegisterLink.path}>
                            <>
                              <ArrowRight className="mr-2 h-5 w-5" />
                              Register
                            </>
                          </Link>
                        </Button>
                      </>
                    )}
                  </nav>
                </SheetContent>
              </>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
