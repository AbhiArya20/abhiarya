import { PERSONAL_DATA } from "@/data/personal";
import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const domain = `${protocol}://${host}`;

  const url = new URL(domain);
  const routes = ["", "/projects"].map(route => ({
    url: `${url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    images: [PERSONAL_DATA.avatar],
  })) as MetadataRoute.Sitemap;

  return routes;
}
