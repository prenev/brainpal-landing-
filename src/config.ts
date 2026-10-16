export const site = {
	name: "Wobbi: Mood & Calm",
	shortName: "Wobbi",
	url: "https://wobbi.app",
	/** <title> of the home page (keep under ~60 characters). */
	title: "Wobbi: Mood Diary, Breathing & Calm for iPhone",
	/** Meta description (keep under ~160 characters). */
	description:
		"A free, private mood diary for iPhone: one-tap check-ins, guided breathing, a worry box and a gentle journal. No ads, no tracking. Join the waitlist.",
	ogImage: {
		url: "/og-share.png",
		width: 1200,
		height: 630,
		alt: "Wobbi: check in, breathe, take one small step, with the Home screen on an iPhone",
	},
	locale: "en_US",
	logo: "/icon-192.png",
	keywords: [
		"Wobbi",
		"mood diary",
		"mood tracker",
		"CBT thought record",
		"breathing exercise",
		"anxiety toolkit",
		"worry time",
		"private journal",
		"iPhone app",
	],
	links: {
		/** Swap for the real App Store URL at launch. */
		appStore: "#get-the-app",
	},
	companyName: "Wobbi",
	contactEmail: "hello@wobbi.app",
	copyrightYear: 2026,
} as const;

export const steps = [
	{
		eyebrow: "Check in",
		title: "One tap to say how you feel.",
		body: "Tap a face, add a note only if you want to. Thought records walk you from a worrying thought to a kinder one.",
		image: "/assets/mockups/checkin.webp",
		alt: "Wobbi home screen with daily anchors and a mood check-in",
	},
	{
		eyebrow: "Calm down",
		title: "Slow your body in a minute.",
		body: "Guided breathing with soft haptics, plus 5-4-3-2-1 grounding. Notice how you feel before and after.",
		image: "/assets/mockups/calm.webp",
		alt: "Wobbi breathing exercise showing a hold-and-count circle",
	},
	{
		eyebrow: "See patterns",
		title: "Your month, at a glance.",
		body: "A calendar of faces and simple charts. Spot what helps without needing to be good at maths.",
		image: "/assets/mockups/calendar.webp",
		alt: "Wobbi calendar of daily mood faces",
	},
	{
		eyebrow: "Worry time",
		title: "Park it. Plan one small step.",
		body: "Write a worry down for later, then choose whether to plan around it or let it go.",
		image: "/assets/mockups/worries.webp",
		alt: "Wobbi worry time screen with parked and reviewed worries",
	},
	{
		eyebrow: "Progress",
		title: "Skills that only go up.",
		body: "Levels grow with what you actually do and never go down. Progress is your effort, not a streak to lose.",
		image: "/assets/mockups/progress.webp",
		alt: "Wobbi progress screen with skill levels",
	},
	{
		eyebrow: "Journal",
		title: "A private place to write.",
		body: "Feels like your notes app, with optional prompts when words are hard to find. A line is enough.",
		image: "/assets/mockups/journal.webp",
		alt: "Wobbi journal with a small-wins entry",
	},
] as const;

export const promises = [
	{ title: "No ads", body: "Not now, not ever. Nothing to dismiss or buy." },
	{
		title: "No tracking",
		body: "No analytics, no telemetry, no profile built about you.",
	},
	{
		title: "On your phone",
		body: "Everything stays on your device by default.",
	},
	{
		title: "AI is off",
		body: "Only turns on if you add your own key. Crisis text is never sent.",
	},
	{
		title: "No account needed",
		body: "An account is optional and only adds sync between devices.",
	},
	{
		title: "Yours to delete",
		body: "Delete your account and data from inside the app.",
	},
];

export const faqs = [
	{
		question: "Is it really free?",
		answer:
			"Yes. Wobbi is free, with no ads, no subscriptions, and no in-app purchases.",
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
			"No. Wobbi is a self-help companion and does not diagnose or treat any condition.",
	},
	{
		question: "Is there an Android version?",
		answer:
			"Wobbi launches on iPhone first. Android is planned for later. Tell us your phone in the form above and we'll email you when it's ready.",
	},
];
