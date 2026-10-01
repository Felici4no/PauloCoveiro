import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { getAllWorks } from "@/content/works";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    ...getAllWorks().map((w) => ({
      url: `${siteUrl}/trabalhos/${w.slug}`,
      changeFrequency: "yearly" as const,
      priority: w.featured ? 0.8 : 0.5,
      images: w.images?.map((i) => `${siteUrl}${i.src.src}`),
    })),
  ];
}
