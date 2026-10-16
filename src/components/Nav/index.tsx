import { site } from "@/config";

const links = [
	{ label: "How it works", href: "/#how-it-works" },
	{ label: "Features", href: "/#features" },
	{ label: "Privacy", href: "/#privacy" },
	{ label: "FAQ", href: "/#faq" },
];

/** Apple-style global nav: slim, translucent, always dark. */
const Nav = () => (
	<header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl backdrop-saturate-150">
		<nav
			aria-label="Main"
			className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6"
		>
			<a
				href="/"
				className="flex items-center gap-2 text-sm font-semibold text-white"
			>
				<img src="/icon-192.png" alt="" className="h-6 w-6 rounded-md" />
				{site.shortName}
			</a>
			<ul className="hidden items-center gap-8 md:flex">
				{links.map((l) => (
					<li key={l.label}>
						<a
							href={l.href}
							className="text-xs text-white/70 transition-colors hover:text-white"
						>
							{l.label}
						</a>
					</li>
				))}
			</ul>
			<a
				href={site.links.webApp}
				target="_blank"
				rel="noopener noreferrer"
				className="rounded-full bg-white px-3.5 py-1 text-xs font-medium text-black transition-opacity hover:opacity-85"
			>
				Open the app
			</a>
		</nav>
	</header>
);

export default Nav;
