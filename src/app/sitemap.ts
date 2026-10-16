import type { MetadataRoute } from "next";
import { site } from "@/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const legal = ["privacy", "terms", "support", "licenses"].map((id) => ({
		url: `${site.url}/${id}/`,
		lastModified: new Date(),
		changeFrequency: "yearly" as const,
		priority: 0.3,
	}));
	return [
		{
			url: `${site.url}/`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		...legal,
	];
}
