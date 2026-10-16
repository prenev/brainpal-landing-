export const NAV_LINKS = [
	{ label: "How it works", href: "#how-it-works" },
	{ label: "Features", href: "#features" },
	{ label: "Privacy", href: "#privacy" },
	{ label: "Meet Pal", href: "#meet-pal" },
	{ label: "FAQ", href: "#faq" },
];

export const LEGAL_LINKS = [
	{
		label: "Privacy Policy",
		href: "https://prenev.github.io/brain-pal/privacy-policy/",
	},
	{
		label: "Terms",
		href: "https://prenev.github.io/brain-pal/terms-of-service/",
	},
	{ label: "Support", href: "https://prenev.github.io/brain-pal/support/" },
	{
		label: "Open-source notices",
		href: "https://prenev.github.io/brain-pal/open-source-notices/",
	},
];

export const fade = (delay = 0) => ({
	initial: { opacity: 0, y: 16 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.5, delay },
});
