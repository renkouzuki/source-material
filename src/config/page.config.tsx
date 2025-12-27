import { api } from "@/lib/api";
import Contact from "@/components/contact/Contact";
import Home from "@/components/home/Home";
import Post from "@/components/post/Post";
import Pricing from "@/components/pricing/Pricing";
import Service from "@/components/service/Service";
import Test from "@/components/test/Test";

export const pageHandlers = {
  page: {
    fetch: (slug: string) => api.getPageBySlug(slug),
    render: (data: any) => {
      const components = {
        pricing: Pricing,
        contact: Contact,
        home: Home,
        default: Post,
      };
      const Component = components[data.type];
      return <Component data={data} />;
    },
  },

  post: {
    fetch: (slug: string, type: string) => api.getPostBySlug(slug, type),
    render: (data: any) => {
      return <Test data={data} />;
    },
  },

  category: {
    fetch: () => api.getPostByCate(),
    render: (data: any) => {
      return <Service data={data} />;
    },
  },
};
