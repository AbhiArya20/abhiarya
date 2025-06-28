import { DATA } from "@/lib/data";

export default async function sitemap() {
	const url = new URL(DATA.portfolio).origin;

	const routes = ["", "/projects"].map(route => ({
		url: `${url}${route}`,
		lastModified: new Date().toISOString(),
	}));

	return [...routes];
}
