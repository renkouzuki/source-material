import BlogsLayout from "../BlogsLayout";
import BlogSelector from "./BlogSelector";

const Blogs = ({ data }) => {
  return (
    <BlogsLayout>
      <BlogSelector data={data} />
    </BlogsLayout>
  );
};

export default Blogs;
