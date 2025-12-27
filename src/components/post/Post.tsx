import { api } from "@/lib/api";
import PostLayout from "./PostLayout";

const Post = ({ data }) => {
  const paginate = api.getPostByCate();
  return (
    <PostLayout>
      <div className="flex flex-col">
        <div className="mb-2">
          <p>title: {data.title}</p>
          <p>seo_title: {data.seo_title}</p>
          <p>seo_description: {data.seo_description}</p>
        </div>
        <div>
            {JSON.stringify(paginate)}
        </div>
      </div>
    </PostLayout>
  );
};

export default Post;
