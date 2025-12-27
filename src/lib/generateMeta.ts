import { Metadata } from "next";

type MetaData = {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: "website" | "article";
    publishedTime?: string;
    keywords?: string[];
};

export function generateMeta(data: MetaData): Metadata {
    const siteName = "SEO Kit";
    const baseUrl = "https://yoursite.com";

    const title = data.title ? `${data.title} | ${siteName}` : siteName;
    const description = data.description || "";
    const image = data.image || `${baseUrl}/og-image.jpg`;
    const url = data.url ? `${baseUrl}${data.url}` : baseUrl;

    return {
        title,
        description,
        keywords: data.keywords,
        openGraph: {
            title: data.title || siteName,
            description,
            url,
            siteName,
            images: [{ url: image }],
            type: data.type || "website",
            publishedTime: data.publishedTime,
        },
    };
}