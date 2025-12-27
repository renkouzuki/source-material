import { pageHandlers } from "@/config/page.config";
import { api } from "@/lib/api";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ slug?: string[] }> }) => {
  const { slug } = await params;
  const slugString = slug?.join("/") || "home";

  const { type } = api.getSlugType(slugString);
  if (!type) notFound();

  const handler = pageHandlers[type];
  if (!handler) notFound();

  const data = handler.fetch(slugString, type);

  return handler.render(data);
};

export default Page;