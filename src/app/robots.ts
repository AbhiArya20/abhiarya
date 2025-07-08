import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        crawlDelay: 60 * 60 * 24, // 1 day
      },
    ],
    sitemap: `/sitemap.xml`,
  };
}
