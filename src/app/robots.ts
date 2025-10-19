import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const domain = `${protocol}://${host}`;

  return {
    rules: [
      {
        userAgent: "*",
        crawlDelay: 60 * 60 * 24, // 1 day
      },
    ],
    sitemap: `${domain}/sitemap.xml`,
  };
}
