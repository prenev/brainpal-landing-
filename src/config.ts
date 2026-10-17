export const site = {
	name: "Wobbi: Mood & Calm",
	shortName: "Wobbi",
	url: "https://wobbi.app",
	/** <title> of the home page (keep under ~60 characters). */
	title: "Wobbi: Mood Diary, Breathing & Calm for iPhone",
	/** Meta description (keep under ~160 characters). */
	description:
		"A private mood diary for iPhone: one-tap check-ins, guided breathing, worry time, widgets and a gentle journal. Free to start, no ads, no tracking. Join the waitlist.",
	ogImage: {
		url: "/og-share.png",
		width: 1200,
		height: 630,
		alt: "Wobbi: check in, breathe, take one small step, with the Home and breathing screens on iPhones",
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
		"widgets",
		"focus timer",
		"pomodoro",
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
		body: "Tap a face and it's logged. Home also holds your daily anchors, a focus block, a journal prompt and your parked worries.",
		image: "/assets/mockups/checkin.webp",
		alt: "Wobbi home screen with the streak, tools, daily anchors and today's mood entry",
	},
	{
		eyebrow: "Think it through",
		title: "Walk through a worry with Wobbi.",
		body: "A step-by-step entry: how you feel, what happened, and what went through your mind. Wobbi points out common thinking traps, then helps you find a kinder thought.",
		image: "/assets/mockups/think.webp",
		alt: "Wobbi thought entry listing common thinking traps like catastrophizing and mind reading",
	},
	{
		eyebrow: "Calm down",
		title: "Slow your body in a minute.",
		body: "A full-screen breathing scene where Wobbi swells and settles with each breath, with soft haptics and sound you can switch off.",
		image: "/assets/mockups/calm.webp",
		alt: "Wobbi full-screen breathing scene on a green glow, showing inhale and round 1 of 6",
	},
	{
		eyebrow: "SOS",
		title: "Anxious right now? One tap.",
		body: "The red siren is on Home and Breathe. Rate how you feel, pick slow breathing, grounding or box breathing, and see the change.",
		image: "/assets/mockups/sos.webp",
		alt: "Wobbi SOS screen saying you're safe, let's slow things down, with a 0 to 10 anxiety slider",
	},
	{
		eyebrow: "Focus",
		title: "One calm block at a time.",
		body: "A pomodoro timer with Wobbi beside you. Pick a task from your to-do list, finish the block, take a proper break, and watch your week add up.",
		image: "/assets/mockups/focus.webp",
		alt: "Wobbi focus timer showing 25:00 with a ring of stars around Wobbi at a laptop",
	},
] as const;

/** The "even more inside" row: real screens, one per idea. */
export const moreInside = [
	{
		title: "Daily anchors",
		body: "Up to five small habits. Some tick themselves, like a breathing session.",
		image: "/assets/mockups/anchors.webp",
		alt: "Wobbi daily anchors with ideas such as slow breathing, walk, sunlight and water",
	},
	{
		title: "A to-do list that fits",
		body: "Add what you want to get done, pick one for the next focus block, and see how many pomodoros each task took.",
		image: "/assets/mockups/todo.webp",
		alt: "Wobbi to-do list with two open tasks and a button to add a new one",
	},
	{
		title: "Sleep, from Apple Health",
		body: "Last night and your last seven nights, next to your mood. Opt-in and read-only.",
		image: "/assets/mockups/sleep.webp",
		alt: "Wobbi sleep screen showing last night and a seven-night chart",
	},
	{
		title: "Wobbi's shop",
		body: "Earn coins for showing up and dress Wobbi in hats, bows and colours. No real money, ever.",
		image: "/assets/mockups/shop.webp",
		alt: "Wobbi's Shop showing a crowned Wobbi, a coin balance and wardrobe items",
	},
] as const;

export const promises = [
	{ title: "No ads", body: "Not now, not ever. Nothing to dismiss." },
	{
		title: "No tracking",
		body: "No analytics, no telemetry, no profile built about you.",
	},
	{
		title: "On your phone",
		body: "Everything stays on your device by default.",
	},
	{
		title: "Widgets show numbers",
		body: "They never show or send what you wrote.",
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
		body: "Export or delete your data from inside the app.",
	},
];

/** What's free and what's Pro today (see brain-pal docs/MONETIZATION.md). Keep in sync with the app. */
export const plans = {
	free: [
		"SOS siren, breathing, grounding and crisis support",
		"Mood check-ins, thought records, journal and worry time",
		"Calendar, reminders, daily anchors and today's summary",
		"Widgets, Live Activity and Control Center controls",
		"Coins, the shop, achievements and Wobbi stickers",
		"Focus timer, to-do list and sleep insights",
		"Sync between your devices",
		"Exporting or deleting your data",
	],
	pro: [
		"Everything in Free",
		"Before-and-after proof cards, showing how much calming helped",
		"Weekly and monthly summaries",
		"More Pro features are on the way",
		"Cancel any time in your App Store settings",
	],
};

export const faqs = [
	{
		question: "Is it really free?",
		answer:
			"Wobbi is free to download, and the core app is free: check-ins, thought records, journal, breathing, SOS, worry time, reminders, widgets and more. There are no ads. An optional subscription, Wobbi Pro, adds before-and-after proof cards and weekly and monthly summaries. Safety tools and exporting or deleting your data are always free.",
	},
	{
		question: "What does Wobbi Pro add?",
		answer:
			"Wobbi Pro is optional. It adds before-and-after proof cards, which show how much calming helped you, and weekly and monthly summaries. More Pro features are coming. It starts at $4 a month after a 7-day free trial, renews monthly through the App Store, and you can cancel any time in your App Store settings. The final price is always shown in the App Store before you subscribe.",
	},
	{
		question: "Do I need an account?",
		answer:
			"No. The app opens straight to Home and works fully on your phone. An account is optional and only adds sync between devices.",
	},
	{
		question: "Where is my data stored?",
		answer:
			"By default, on your device. If you choose an account, data is stored securely so only you can access it, and you can delete your account and data in the app.",
	},
	{
		question: "What are the widgets and controls?",
		answer:
			"There are 14 Home Screen widgets, four of which also work on the Lock Screen: mood check-in, daily anchors, streak, breathe, SOS, worry jar, journal prompt, sleep, focus and more. There is also a Live Activity for breathing and focus timers, and four Control Center controls: SOS, Breathe, Park a worry and Focus. They show numbers and a few words, never what you wrote. Widgets need iOS 17 and controls need iOS 18.",
	},
	{
		question: "What is the Focus timer?",
		answer:
			"A pomodoro timer inside Wobbi. Pick a preset (Classic, Gentle or Deep), choose a task from your to-do list, and work in blocks with short and long breaks. You can set a daily goal and see your blocks and minutes for the week. Finished blocks earn coins like other things you do in the app.",
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
			"Wobbi launches on iPhone first. Android is planned for later. Tell us your phone in the waitlist form and we'll email you when it's ready.",
	},
	{
		question: "Which iPhones does it work on?",
		answer:
			"iPhones running iOS 15 or later. Widgets need iOS 17 and Control Center controls need iOS 18.",
	},
];
