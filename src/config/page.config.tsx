import { api } from "@/lib/api";
import Home from "@/components/home/Home";
import Post from "@/components/post/Post";
import Test from "@/components/test/Test";
import Documents from "@/components/documents/Documents";
import Blogs from "@/components/blogs/Blogs/Blogs";
import BlogCategoryPosts from "@/components/blogs/BlogCategoryPosts/BlogCategoryPosts";

export const pageHandlers = {
  page: {
    fetch: (slug: string) => {
      const pageData = api.getPageBySlug(slug);
      if (pageData.type === "blogs") {
        return {
          ...pageData,
          blogs: api.getArtPinsByCategory(),
        };
      }
      return pageData;
    },
    render: ({ data }) => {
      const components = {
        home: Home,
        blogs: Blogs,
        default: Post,
        documents: Documents,
      };
      const Component = components[data.type] || components.default;
      return <Component data={data} />;
    },
  },

  post: {
    /////// this for chhecking a detail of wordpress page
    fetch: (slug: string, type: string) => api.getPostBySlug(slug, type),
    render: ({ data = null }) => {
      return <Test data={data} />;
    },
  },

  category: {
    fetch: (slug: string) => {
      return {
        slug,
        ...api.getArtPinsByCategory(),
      };
    },
    render: ({ data }) => {
      return <BlogCategoryPosts data={data} />;
    },
  },
};
