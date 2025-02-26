"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Wallpaper } from "@/config/content/wallpapers";

function getImageSize(url: string) {
  return url.includes("800x600")
    ? { width: 800, height: 600 }
    : { width: 1024, height: 768 };
}

interface WallpaperShowcaseProps {
    wallpapers: Wallpaper[];
  }

export default function WallpaperShowcase({ wallpapers }: WallpaperShowcaseProps) {
  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(
    null
  );

  return (
    <div className="container mx-auto p-4">
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {wallpapers.map((wallpaper) => (
          <div
            key={wallpaper.id}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform"
            onClick={() => setSelectedWallpaper(wallpaper)}
          >
            <Image
              src={wallpaper.src}
              alt={wallpaper.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-center mt-2 font-medium">{wallpaper.title}</p>
          </div>
        ))}
      </div>

      {selectedWallpaper && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedWallpaper(null)}
        >
          <div className="relative max-w-4xl w-full p-4">
            <button
              className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
              onClick={() => setSelectedWallpaper(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={selectedWallpaper.src}
              alt={selectedWallpaper.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
