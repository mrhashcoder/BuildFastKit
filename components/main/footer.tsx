import Link from "next/link";
import { Icons } from "../ui/icons";
import { NavbarLinks } from "@/config/links";

export default function Footer() {
  const NavBarLinkGroupHTML = NavbarLinks.map((link) => {
    return (
      <Link
        href={link.path}
        className="text-muted-foreground hover:text-foreground"
        key={link.name}
      >
        {link.name}
      </Link>
    );
  });
  return (
    <footer className="flex flex-wrap items-start justify-between px-4 py-2 bg-background my-8">
      <div className="flex flex-col gap-4 my-8 md:basis-2/3">
        <div className="flex items-center gap-2">
          <Icons.mountainIcon className="h-6 w-6" />
          <span className="text-lg font-bold">BuildFastKit</span>
        </div>
        <div className="text-muted-foreground mt-2">
          Crafting innovative solutions for a better tomorrow.
        </div>
        <div className="flex gap-4">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground"
          >
            <Icons.twitter className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            <Icons.github className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            <Icons.linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:items-end items-start gap-2">
        <h4 className="text-lg font-semibold">Quick Links</h4>
        {NavBarLinkGroupHTML}
      </div>

      <div className="flex flex-col lg:items-end items-start gap-2">
        <h4 className="text-lg font-semibold">Resources</h4>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          Documentation
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          Tutorials
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          Support
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          FAQs
        </Link>
      </div>
    </footer>
  );
}
