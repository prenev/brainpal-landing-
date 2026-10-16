import { site } from "@/config";
import type { FooterProps } from "@/types";
import { LEGAL_LINKS, NAV_LINKS } from "./links";

const linkClass =
	"text-xs text-[#6e6e73] transition-colors hover:text-[#1d1d1f] hover:underline dark:text-[#86868b] dark:hover:text-white";

const Footer = ({ name }: FooterProps) => (
	<footer className="bg-[#f5f5f7] px-6 py-10 dark:bg-[#161617]">
		<div className="mx-auto max-w-6xl">
			<p className="mb-6 border-b border-black/10 pb-6 text-xs leading-relaxed text-[#6e6e73] dark:border-white/10 dark:text-[#86868b]">
				{name} is a self-help tool. It does not diagnose or treat any condition.
				If you might be in danger, call your local emergency number. Crisis
				support is always one tap away in the app.
			</p>
			<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
				<nav aria-label="Product" className="flex flex-col gap-2.5">
					<p className="text-xs font-semibold text-[#1d1d1f] dark:text-white">
						Explore
					</p>
					{NAV_LINKS.map((l) => (
						<a key={l.label} href={l.href} className={linkClass}>
							{l.label}
						</a>
					))}
				</nav>
				<nav aria-label="Legal" className="flex flex-col gap-2.5">
					<p className="text-xs font-semibold text-[#1d1d1f] dark:text-white">
						Legal
					</p>
					{LEGAL_LINKS.map((l) => (
						<a key={l.label} href={l.href} className={linkClass}>
							{l.label}
						</a>
					))}
				</nav>
				<div className="flex flex-col gap-2.5">
					<p className="text-xs font-semibold text-[#1d1d1f] dark:text-white">
						Contact
					</p>
					<a href={`mailto:${site.contactEmail}`} className={linkClass}>
						{site.contactEmail}
					</a>
				</div>
			</div>
			<p className="mt-8 border-t border-black/10 pt-6 text-xs text-[#6e6e73] dark:border-white/10 dark:text-[#86868b]">
				Copyright © {site.copyrightYear} {site.companyName}. All rights
				reserved.
			</p>
		</div>
	</footer>
);

export default Footer;
