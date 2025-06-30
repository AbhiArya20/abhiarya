import { PERSONAL_DATA } from "@/data/personal";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    sitemap: `${new URL(PERSONAL_DATA.portfolio).origin}/sitemap.xml`,
  };
}
