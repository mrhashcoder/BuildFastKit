"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/config/dashboard-links";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-[70] p-2 rounded-lg bg-white dark:bg-[#0F0F12] shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>

      <nav
        className={`fixed inset-y-0 left-0 z-[70] w-64 bg-white dark:bg-[#0F0F12] transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:w-64 border-r border-gray-200 dark:border-[#1F1F23] ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-full flex flex-col">
          <Link
            href="/"
            className="h-16 px-6 flex items-center border-b border-gray-200 dark:border-[#1F1F23]"
          >
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              BuildFastKit
            </span>
          </Link>

          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-6">
            {NAV_LINKS.map(({ category, links }) => (
              <div key={category}>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {category}
                </div>
                <div className="space-y-1">
                  {links.map(({ name, path, icon: Icon }) => (
                    <Link
                      key={name}
                      href={path}
                      className="flex items-center px-3 py-2 text-sm rounded-md transition-colors text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-4 w-4 mr-3" />
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[65] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
