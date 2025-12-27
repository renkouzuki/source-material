import { cache } from "react";
import { mockData } from "./mock-data";

export const api = {
  getMenu: (type: string) => mockData.menu(type), /// example axios.get(`/example-api?query=${example}`)
  getPageBySlug: (slug) => mockData.getPageBySlug(slug),
  getSlugType: cache((slug) => mockData.slugType(slug)),
  getPostByCate: () => mockData.getPostByCate({}),
  getPostBySlug: (slug, type) => mockData.getPostBySlug({ slug, type }),
};
