import { FooterLinks } from "@/config/links";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              BuildFastKit
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            {FooterLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-sm hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
