import { mockData } from "./mock-data";

export const api = {
  getMenu: (type: string) => mockData.menu(type), /// example axios.get(`/example-api?query=${example}`)
  getPageBySlug: (slug) => mockData.getPageBySlug(slug),
  getSlugType: (slug) => mockData.slugType(slug),
  getPostByCate: () => mockData.getPostByCate({}),
  getPostBySlug: (slug, type) => mockData.getPostBySlug({ slug, type }),
};
