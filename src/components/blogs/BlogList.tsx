"use client";

import React, { useEffect, useState } from "react";
import { Masonry, MasonryItem } from "mason-grid";
import Image from "next/image";

/* ---------------- Types ---------------- */

interface ImageItem extends MasonryItem {
  id: string;
  width: number;
  height: number;
  url: string;
  title: string;
}

/* ---------------- Image Loader ---------------- */

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
  });
}

async function generateImages(count: number): Promise<ImageItem[]> {
  return Promise.all(
    Array.from({ length: count }, async (_, i) => {
      const index = i + 1;
      const url = `/placholder/${index}.jpg`;
      const img = await loadImage(url);

      return {
        id: String(index),
        width: img.naturalWidth,
        height: img.naturalHeight,
        url,
        title: `Image ${index}`,
      };
    })
  );
}

/* ---------------- Component ---------------- */

export default function BlogList({posts , isLoading}) {
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    generateImages(7)
      .then((imgs) => {
        setImages(imgs);
      })
      .catch(console.error);
  }, []);

  if (isLoading) {
    return (
      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-60 bg-gray-300 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  const BUTTON_HEIGHT = 44; // button height with padding

  return (
    <div className="w-full flex justify-center">
      <Masonry
        data={images}
        minColumnWidth={250}
        gap={16}
        className="w-full"
        renderItem={(item, position) => {
          // Calculate image height minus button space
          const imageHeight = position.height - BUTTON_HEIGHT;
          
          return (
            <div className="flex flex-col h-full">
              <div
                className="relative w-full rounded-lg overflow-hidden hover:shadow-xl transition-shadow shrink-0"
                style={{ height: `${imageHeight}px` }}
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  width={position.width}
                  height={imageHeight}
                  className="w-full h-full object-cover"
                />
              </div>

              <button className="w-full px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all text-sm font-medium mt-2">
                gae shang
              </button>
            </div>
          );
        }}
      />
    </div>
  );
}