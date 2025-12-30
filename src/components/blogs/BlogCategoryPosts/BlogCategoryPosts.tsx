import BlogsLayout from "../BlogsLayout";
import BlogSelector from "./BlogSelector";

const BlogCategoryPosts = ({ data }) => {
  return (
    <BlogsLayout>
      <BlogSelector data={data} />
    </BlogsLayout>
  );
};

export default BlogCategoryPosts;
