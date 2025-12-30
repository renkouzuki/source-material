import { pageHandlers } from "@/config/page.config";
import { api } from "@/lib/api";
import { generateMeta } from "@/lib/generateMeta";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const slugString = slug?.join("/") || "home";

  const { type } = api.getSlugType(slugString);
  if (!type) return generateMeta({ title: "404" });

  const handler = pageHandlers[type];
  if (!handler) return generateMeta({ title: "404" });

  const data = handler.fetch(slugString, type);

  return generateMeta({
    title: data.seo_title,
    description: data.seo_description,
    image: data.image,
    url: `/${slugString}`,
    type: type === "post" ? "article" : "website",
    publishedTime: data.post_date,
  });
}

const Page = async ({ params }: { params: Promise<{ slug?: string[] }> }) => {
  const { slug } = await params;
  const slugString = slug?.join("/") || "home";

  const { type } = api.getSlugType(slugString);
  if (!type) notFound();

  const handler = pageHandlers[type];
  if (!handler) notFound();

  const data = handler.fetch(slugString, type);

  return handler.render({data , slug});
};

export default Page;