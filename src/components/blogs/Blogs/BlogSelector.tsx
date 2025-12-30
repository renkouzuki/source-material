"use client";
import { useState } from "react";
import BlogList from "../BlogList";
import BlogSelectorLists from "../BlogSelectorLists";

const BlogSelector = ({ data }) => {
  const [isBlogLoading, setIsBlogLoading] = useState(false);
  return (
    <>
      {data.blogs.category_list && (
        <BlogSelectorLists
          categories={data.blogs.category_list}
          onLoadingChange={setIsBlogLoading}
        />
      )}

      <BlogList posts={data.blogs.posts} isLoading={isBlogLoading} />
    </>
  );
};

export default BlogSelector;
