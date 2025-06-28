import { MetadataRoute } from "next";
import { DATA } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
		},
		sitemap: `${new URL(DATA.portfolio).origin}/sitemap.xml`,
	};
}
