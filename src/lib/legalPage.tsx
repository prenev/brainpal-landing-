import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import MarkdownLayout from "@/components/Markdown";
import { parseMarkdown } from "@/components/Markdown/parseMarkdown";
import { site } from "@/config";

export const legalPages = {
	privacy: {
		title: "Privacy Policy",
		description:
			"What Wobbi stores, what can leave your phone, how the website and waitlist handle your email, and how to delete your data.",
	},
	terms: {
		title: "Terms of Service",
		description:
			"The terms for using Wobbi, including the optional Wobbi Pro subscription.",
	},
	support: {
		title: "Support",
		description: "Get help with Wobbi, find crisis support, and contact us.",
	},
	licenses: {
		title: "Open-source notices",
		description:
			"Open-source software, fonts and artwork used in Wobbi, and their licences.",
	},
} as const;

export type LegalId = keyof typeof legalPages;

export const legalMetadata = (id: LegalId): Metadata => ({
	title: legalPages[id].title,
	description: legalPages[id].description,
	alternates: { canonical: `${site.url}/${id}/` },
	robots: { index: true, follow: true },
});

export async function LegalPage({ id }: { id: LegalId }) {
	const raw = fs.readFileSync(
		path.join(process.cwd(), "src/content/legal", `${id}.md`),
		"utf-8",
	);
	const updated = raw.match(/\*\*Last updated: ([^*]+)\*\*/)?.[1] ?? "";
	// The page header already shows the title and date, so drop them from the body.
	const body = raw.replace(/^#[^\n]+\n+\*\*[^\n]+\n+/, "");
	const html = String(await parseMarkdown(body));
	return (
		<main className="px-4 pb-8 pt-8 md:px-6 md:pt-12">
			<div className="mx-auto max-w-375">
				<Breadcrumbs items={[{ label: legalPages[id].title }]} />
				<MarkdownLayout
					htmlContent={html}
					rawContent={body}
					title={legalPages[id].title}
					lastUpdated={updated}
				/>
			</div>
		</main>
	);
}
