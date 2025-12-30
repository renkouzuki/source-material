"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import { useRouter } from "next/navigation";

const BlogSelectorLists = ({
  categories,
  activeSlug = null,
  onLoadingChange,
}) => {
  const normalizeSlug = (slug: string) => slug.replace(/-/g, "");

  const [clickedSlug, setClickedSlug] = useState<string | null>(null);
  const router = useRouter();

  const isLoading =
    clickedSlug !== null &&
    normalizeSlug(clickedSlug) !==
      (activeSlug ? normalizeSlug(activeSlug) : null);

  const normalizedActive =
    isLoading && clickedSlug
      ? normalizeSlug(clickedSlug)
      : activeSlug
      ? normalizeSlug(activeSlug)
      : null;

  const handleClick = (slug: string | null) => {
    setClickedSlug(slug);
    onLoadingChange?.(true);
  };

  useEffect(() => {
    if (!isLoading && clickedSlug !== null) {
      onLoadingChange?.(false);
    }
  }, [isLoading, clickedSlug, onLoadingChange]);

  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      <Button
        onClick={() => {
          handleClick(null);
          router.push("/blogs");
        }}
        size="sm"
        className={`text-sm ${
          normalizedActive === null
            ? "bg-blue-500 scale-105 shadow-lg"
            : "bg-gray-500 hover:bg-gray-600"
        }`}
      >
        All
      </Button>

      {categories.map((cat) => {
        const normalizedSlug = normalizeSlug(cat.slug);
        const isActive = normalizedActive === normalizedSlug;

        return (
          <Button
            key={cat.slug}
            size="sm"
            className={`text-sm ${
              isActive
                ? "bg-blue-500 scale-105 shadow-lg"
                : "bg-gray-500 hover:bg-gray-600"
            }`}
            onClick={() => {
              handleClick(cat.slug);
              router.push(`/${normalizedSlug}`);
            }}
          >
            {cat.name}
          </Button>
        );
      })}
    </div>
  );
};

export default BlogSelectorLists;
