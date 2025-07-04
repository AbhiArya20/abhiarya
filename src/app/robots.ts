// import { PERSONAL_DATA } from "@/data/personal";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        crawlDelay: 60 * 60,
      },
    ],
    sitemap: `/sitemap.xml`,
  };
}
