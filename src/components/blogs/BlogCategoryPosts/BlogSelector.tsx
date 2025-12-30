"use client";
import { useState } from "react";
import BlogList from "../BlogList";
import BlogSelectorLists from "../BlogSelectorLists";

const BlogSelector = ({ data }) => {
  const [isBlogLoading, setIsBlogLoading] = useState(false);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{data.posts?.[0]?.title || "Pins"}</h1>

      <BlogSelectorLists
        categories={data.category_list}
        activeSlug={data.slug}
        onLoadingChange={setIsBlogLoading}
      />

      <BlogList posts={data.posts} isLoading={isBlogLoading} />
    </div>
  );
};

export default BlogSelector;
