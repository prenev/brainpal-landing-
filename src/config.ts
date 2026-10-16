import type {
	FAQItem,
	Feature,
	PricingTier,
	Review,
	SocialLink,
} from "@/types";

export const storeConfig = {
	/** Set to true to pull live metadata from the App Store at build time */
	fetchRealData: false,
	/** Numeric App Store app ID (without the "id" prefix) */
	appStoreAppId: 686449807,
} as const;

export const site = {
	name: "Brain Pal: Mood & Calm",
	url: "https://prenev.github.io/brain-pal/",
	description:
		"One-tap mood check-ins, a private journal, slow breathing and a gentle plan for worries. Free, no ads, no tracking, works without an account.",
	logo: "/favicon.svg",
	keywords: [
		"Brain Pal",
		"mood diary",
		"calming tools",
		"breathing exercise",
		"private journal",
	],
	storeLinks: {
		apple: "#",
		google:
			"mailto:hello@brainpal.app?subject=Notify%20me%20when%20Brain%20Pal%20launches",
	},
	rating: {
		score: 5,
		count: "Coming soon",
	},
	ageRating: "4+",
	version: "Coming soon",
	minimumOS: "16.0",
	releaseDate: "Coming soon",
	companyName: "Brain Pal",
	contactEmail: "hello@brainpal.app",
	copyrightYear: 2026,
	social: [] as SocialLink[],
} as const;

export const features: Feature[] = [
	{
		title: "Check in",
		description:
			"Tap a face to log your mood and add a quick note only when you want to.",
		icon: "FiHeart",
	},
	{
		title: "Calm down",
		description:
			"Use slow breathing or grounding in a couple of minutes to settle your body.",
		icon: "FiZap",
	},
	{
		title: "Move forward",
		description:
			"Park a worry and choose one tiny next step with a gentle focus timer.",
		icon: "FiTrendingUp",
	},
];

export const screenshots: string[] = [
	"/assets/screenshots/1.png",
	"/assets/screenshots/1.png",
	"/assets/screenshots/1.png",
	"/assets/screenshots/1.png",
	"/assets/screenshots/1.png",
	"/assets/screenshots/1.png",
];

export const pricingTiers: PricingTier[] = [];

export const reviews: Review[] = [];

export const faqs: FAQItem[] = [
	{
		question: "Is it really free?",
		answer:
			"Yes. Brain Pal is free, with no ads, no subscriptions, and no in-app purchases.",
	},
	{
		question: "Do I need an account?",
		answer:
			"No. It works fully on your phone. An account is optional and only adds sync between devices.",
	},
	{
		question: "Where is my data stored?",
		answer:
			"By default, on your device. If you choose an account, data is stored securely so only you can access it, and you can delete your account and data in the app.",
	},
	{
		question: "Does it use AI?",
		answer:
			"Only if you add your own Google Gemini key. AI helpers are off by default.",
	},
	{
		question: "Is it a replacement for therapy?",
		answer:
			"No. Brain Pal is a self-help companion and does not diagnose or treat any condition.",
	},
	{
		question: "Android?",
		answer: "Use the web version and add it to your home screen.",
	},
];
