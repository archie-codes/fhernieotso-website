"use client";

import Image from "next/image";
import { GalleryImage } from "@/lib/data";
import { useState } from "react";
import { X } from "lucide-react";

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer bg-muted h-64"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.image}
              alt={image.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
              <div className="w-full p-4 bg-linear-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="font-semibold">{image.title}</h3>
                <p className="text-sm text-gray-300">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-card rounded-lg max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-96">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {selectedImage.description}
              </p>
              <div className="flex gap-2">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
