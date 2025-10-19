import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { PERSONAL_DATA } from "@/data/personal";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const domain = `${protocol}://${host}`;

  const url = new URL(domain);
  const routes = ["", "/projects"].map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    images: [`${domain}/${PERSONAL_DATA.avatar}`],
  })) as MetadataRoute.Sitemap;

  return routes;
}
