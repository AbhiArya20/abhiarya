import { PERSONAL_DATA } from "@/data/personal";

export default async function sitemap() {
  const url = new URL(PERSONAL_DATA.portfolio).origin;

  const routes = ["", "/projects"].map(route => ({
    url: `${url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
