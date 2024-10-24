'use client'

import Image from "next/image"

interface Photo {
  url: string
  alt: string
}

interface PhotoGridProps {
  photos: Photo[]
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  if (!photos || photos.length === 0) {
    return <div className="text-center p-4">No photos to display</div>
  }

  const renderPhoto = (index: number) => {
    if (index >= photos.length) {
      return <div className="bg-gray-200 rounded-lg w-full h-full"></div>
    }
    return (
      <Image
        src={photos[index].url}
        alt={photos[index].alt}
        width={300}
        height={300}
        className="rounded-lg object-cover w-full h-full"
      />
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="col-span-2 md:col-span-1 row-span-2">
          {renderPhoto(0)}
        </div>
        <div>
          {renderPhoto(1)}
        </div>
        <div className="row-span-2">
          {renderPhoto(2)}
        </div>
        <div>
          {renderPhoto(3)}
        </div>
        <div>
          {renderPhoto(4)}
        </div>
        <div>
          {renderPhoto(5)}
        </div>
      </div>
    </div>
  )
}