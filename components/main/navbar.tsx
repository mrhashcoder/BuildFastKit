/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CowzfwdSDEY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../core/mode-toggle";
import { DashboardLinks, NavbarLinks } from "@/config/links";
import { Icons } from "../ui/icons";

export default function NavBar() {
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
    <div className="flex items-center justify-between px-4 py-2 bg-background">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Icons.mountainIcon className="h-6 w-6" />
        <span className="text-xl font-bold">BuildFastKit</span>
      </Link>

      {/* Top Navbar Data Links Goes inside this div */}
      <div className="hidden md:flex gap-4">
        {NavBarLinkGroupHTML}
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
            className="rounded-md border-y-1 border-primary overflow-auto"
          >
            <div className="flex flex-col items-start divide-y divide-primary">
              <div className="flex flex-col divide-y divide-primary items-start w-md py-4">
                {NavBarLinkGroupHTML}
              </div>

              <div className="flex flex-col divide-y divide-primary items-start w-md py-4">
                {DashboardLinkGroupHTML}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
