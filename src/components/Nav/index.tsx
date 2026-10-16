import { site } from "@/config";

const links = [
	{ label: "How it works", href: "/#how-it-works" },
	{ label: "Features", href: "/#features" },
	{ label: "Privacy", href: "/#privacy" },
	{ label: "FAQ", href: "/#faq" },
];

/** Apple-style global nav: slim, translucent, always dark. */
const Nav = () => (
	<header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl backdrop-saturate-150">
		<nav
			aria-label="Main"
			className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
		>
			<a
				href="/"
				className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white"
			>
				<img src="/icon-192.png" alt="" className="h-11 w-11 rounded-xl" />
				{site.shortName}
			</a>
			<ul className="hidden items-center gap-8 md:flex">
				{links.map((l) => (
					<li key={l.label}>
						<a
							href={l.href}
							className="text-sm text-white/70 transition-colors hover:text-white"
						>
							{l.label}
						</a>
					</li>
				))}
			</ul>
			<a
				href="#notify"
				className="rounded-full bg-mint px-4 py-1.5 text-sm font-semibold text-ink transition-opacity hover:opacity-85"
			>
				Get notified
			</a>
		</nav>
	</header>
);

export default Nav;
