"use client";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../core/mode-toggle";
import {
  authLink,
  authRegisterLink,
  DashboardLinks,
  NavbarLinks,
} from "@/config/links";
import { Icons } from "../ui/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useAuth } from "@/components/providers/strapi-auth-provider";
import { LoginButton, LogoutButton, SignUpButton } from "../core/auth-buttons";

export default function NavBar() {
  const { isAuthenticated } = useAuth();

  const NavBarLinkGroupHTML = NavbarLinks.map((link) => {
    return (
      <Link
        href={link.path}
        className="text-lg font-medium hover:underline underline-offset-4"
        prefetch={false}
        key={link.name}
      >
        {link.name}
      </Link>
    );
  });

  const DashboardLinkGroupHTML = DashboardLinks.map((link) => {
    return (
      <Link
        href={link.path}
        className="text-lg font-medium hover:underline underline-offset-4"
        prefetch={false}
        key={link.name}
      >
        {link.name}
      </Link>
    );
  });

  return (
    <header className="w-full h-full flex items-center justify-between px-4 py-2 bg-background">
      <div className="flex gap-2 items-center">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Icons.mountainIcon className="h-6 w-6" />
          <span className="text-xl font-bold">BuildFastKit</span>
        </Link>
      </div>

      {/* Top Navbar Data Links Goes inside this div */}
      <div className="hidden md:flex items-center gap-4">
        {NavBarLinkGroupHTML}
        {isAuthenticated ? (
          <>
            <LogoutButton width={5} />
          </>
        ) : (
          <>
            <SignUpButton width={5} />
            <LoginButton width={5} />
          </>
        )}
        <ModeToggle />
      </div>

      <div className="md:hidden flex items-center justify-between">
        <div className="mx-2">
          <ModeToggle />
        </div>
        {/* Side Navbar in mobile links goes insde this div */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className=" border-primary border-[1px] lg:hidden"
            >
              <Icons.menuIcon className="h-10 w-10" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="rounded-md border-y-1 border-primary"
          >
            <div className="flex h-full flex-col justify-between items-start">
              <div>
                <div className="flex flex-col divide-y divide-primary items-start w-md py-4">
                  {NavBarLinkGroupHTML}
                </div>

                <div className="flex flex-col divide-y divide-primary items-start w-md py-4">
                  {DashboardLinkGroupHTML}
                </div>
              </div>

              {isAuthenticated ? (
                <div className="w-full flex flex-wrap items-center justify-end ">
                  <LogoutButton width={12} />
                </div>
              ) : (
                <div className="w-full flex flex-wrap items-center justify-end ">
                  <Link
                    href={authLink.path}
                    className={`w-[5rem] ${cn(buttonVariants({ size: "lg" }))} text-lg font-medium m-2`}
                    prefetch={false}
                    key={authLink.name}
                  >
                    {authLink.name}
                  </Link>
                  <Link
                    href={authRegisterLink.path}
                    className={`w-[5rem] ${cn(buttonVariants({ size: "lg" }))} text-lg font-medium m-2`}
                    prefetch={false}
                    key={authRegisterLink.name}
                  >
                    {authRegisterLink.name}
                  </Link>
                </div>
              )}
            </div>
            <div className=""></div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
