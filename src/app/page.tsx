import FAQ from "@/components/FAQ";
import { faqs, screenshots, site } from "@/config";
import { fetchStoreData } from "@/fetchStoreData";

const howItWorks = [
	{
		title: "1. Check in",
		body: "Tap a face to log how you feel in one tap, then add a note only if you want to.",
	},
	{
		title: "2. Calm down",
		body: "Slow breathing with gentle haptics or 5-4-3-2-1 grounding can help you settle in a couple of minutes.",
	},
	{
		title: "3. Move forward",
		body: "Park a worry, pick one tiny next step, and start it with a short focus timer.",
	},
];

const featureBlocks = [
	{
		title: "Check in with one tap",
		body: "Tap a face and add a short note if you want. Thought records guide you from a worrying thought to a kinder one.",
	},
	{
		title: "Calm your body in minutes",
		body: "Slow breathing with soft haptics plus 5-4-3-2-1 grounding. See how you feel before and after.",
	},
	{
		title: "See your month at a glance",
		body: "Track moods on a calendar, check simple charts, and spot patterns without needing to be good at maths.",
	},
	{
		title: "Park worries, plan one small step",
		body: "Write a worry down for Worry Time, then choose whether to plan around it or let it go.",
	},
	{
		title: "Proof you're growing",
		body: "Skill levels grow with what you do and never go down, so progress reflects your own effort over time.",
	},
	{
		title: "A private place to write",
		body: "A journal that feels like your notes app, with optional prompts when words are hard to find.",
	},
];

const smallerFeatures = [
	{
		title: "Five daily anchors",
		body: "Up to five tiny habits like water, a walk, or one line of writing. Deliberately not a big to-do list.",
	},
	{
		title: "Reminders that respect you",
		body: "Gentle reminders can skip themselves once you already did the thing.",
	},
	{
		title: "Sleep, if you want it",
		body: "See sleep from Apple Health next to mood. It's read-only and stays on your phone.",
	},
	{
		title: "Coins for showing up",
		body: "Spend earned coins on rest days that protect your streak. No real money, ever.",
	},
	{
		title: "Works offline",
		body: "Everything works without an account. Account is optional and only adds sync between devices.",
	},
	{
		title: "Apple Health",
		body: "Breathing sessions can be saved to Mindful Minutes when you choose.",
	},
];

const trustLine = "Free · No ads · No tracking · No account needed";

function CTAButtons({
	appleHref,
	browserHref,
}: {
	appleHref: string;
	browserHref: string;
}) {
	return (
		<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
			<a
				href={appleHref}
				target="_blank"
				rel="noopener noreferrer"
				className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black"
			>
				Download on the App Store (coming soon)
			</a>
			<a
				href={browserHref}
				target="_blank"
				rel="noopener noreferrer"
				className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 dark:border-white/20 dark:bg-white/6 dark:text-white dark:hover:bg-white/10"
			>
				Try it in your browser / Get notified
			</a>
		</div>
	);
}

export default async function HomePage() {
	const storeData = await fetchStoreData();
	const logo = storeData.logo ?? site.logo;
	const storeLinks = storeData.storeLinks ?? site.storeLinks;
	const appScreenshots =
		storeData.screenshots && storeData.screenshots.length > 0
			? storeData.screenshots
			: screenshots;
	const heroScreenshot = appScreenshots[0] ?? logo;

	return (
		<main className="container mx-auto px-3 md:px-6">
			<section className="mb-16 pt-12 text-center md:mb-24 md:pt-20">
				<span className="section-label mb-4">Brain Pal</span>
				<h1 className="mb-4 text-4xl font-black tracking-tight text-heading sm:text-5xl md:text-6xl">
					Check in. Breathe. Take one small step.
				</h1>
				<p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-body md:text-lg">
					A private mood diary and calming toolkit for anxious days and ordinary
					ones. One tap to log how you feel, a minute to calm your body, and a
					gentle plan for whatever is on your mind.
				</p>
				<CTAButtons
					appleHref={storeLinks.apple}
					browserHref={storeLinks.google}
				/>
				<p className="mt-4 text-sm font-medium text-muted">{trustLine}</p>

				<div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-[2fr_1fr]">
					<img
						src={heroScreenshot}
						alt="Brain Pal check-in screen"
						className="card-base mx-auto aspect-9/16 w-full max-w-xs rounded-3xl object-cover p-1 md:max-w-sm"
					/>
					<div className="card-base mx-auto flex max-w-xs flex-col items-center justify-center gap-3 p-6 text-center">
						<img
							src={logo}
							alt="Pal mascot waving"
							className="h-24 w-24 rounded-3xl border border-gray-200/60 object-cover dark:border-white/10"
						/>
						<p className="text-sm text-body">Pal is here to cheer you on.</p>
					</div>
				</div>
			</section>

			<section id="how-it-works" className="mb-16 scroll-mt-8 md:mb-24">
				<div className="mb-8 text-center">
					<span className="section-label mb-4">How it works</span>
					<h2 className="section-heading">Three gentle steps</h2>
				</div>
				<div className="grid gap-4 md:grid-cols-3">
					{howItWorks.map((item) => (
						<article key={item.title} className="card-base p-6">
							<h3 className="mb-2 text-lg font-bold text-heading">
								{item.title}
							</h3>
							<p className="text-body">{item.body}</p>
						</article>
					))}
				</div>
			</section>

			<section id="features" className="mb-16 scroll-mt-8 md:mb-24">
				<div className="mb-8 text-center">
					<span className="section-label mb-4">Features</span>
					<h2 className="section-heading">Built for real days</h2>
				</div>
				<div className="grid gap-6">
					{featureBlocks.map((item, index) => (
						<article
							key={item.title}
							className="card-base grid gap-4 p-4 md:grid-cols-[180px_1fr] md:items-center"
						>
							<img
								src={appScreenshots[index % appScreenshots.length]}
								alt={item.title}
								className="aspect-9/16 w-36 rounded-2xl border border-gray-200 object-cover dark:border-white/10"
							/>
							<div>
								<h3 className="mb-2 text-lg font-bold text-heading">
									{item.title}
								</h3>
								<p className="text-body">{item.body}</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section id="small-features" className="mb-16 scroll-mt-8 md:mb-24">
				<div className="mb-8 text-center">
					<span className="section-label mb-4">More features</span>
					<h2 className="section-heading">Small things that help daily</h2>
				</div>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{smallerFeatures.map((item) => (
						<article key={item.title} className="card-base p-5">
							<h3 className="mb-2 text-base font-bold text-heading">
								{item.title}
							</h3>
							<p className="text-sm text-body">{item.body}</p>
						</article>
					))}
				</div>
			</section>

			<section id="privacy" className="mb-16 scroll-mt-8 md:mb-24">
				<div className="card-base p-6 md:p-8">
					<span className="section-label mb-4">Privacy</span>
					<h2 className="mb-4 text-3xl font-bold text-heading">
						Private by design.
					</h2>
					<ul className="space-y-3 text-body">
						<li>
							Everything stays on your device by default. An account is optional
							and only adds sync.
						</li>
						<li>No ads. No analytics. No tracking. We never sell your data.</li>
						<li>
							AI helpers are off by default. Self-harm related content is not
							sent to AI and support options are shown instead.
						</li>
						<li>
							Sleep data is only read if you allow it and does not leave your
							phone.
						</li>
					</ul>
				</div>
			</section>

			<section id="meet-pal" className="mb-16 scroll-mt-8 md:mb-24">
				<div className="mb-8 text-center">
					<span className="section-label mb-4">Meet Pal</span>
					<h2 className="section-heading">Meet Pal, your soft sidekick</h2>
					<p className="mx-auto mt-3 max-w-3xl text-body">
						Pal cheers you on when you show up, keeps you company when things
						are hard, and never guilts you for missing a day.
					</p>
				</div>
				<div className="grid gap-4 sm:grid-cols-3">
					{["Waving", "Thinking", "Celebrating"].map((pose) => (
						<div
							key={pose}
							className="card-base flex flex-col items-center p-5 text-center"
						>
							<img
								src={logo}
								alt={`Pal ${pose.toLowerCase()} pose`}
								className="mb-3 h-20 w-20 rounded-3xl border border-gray-200/60 object-cover dark:border-white/10"
							/>
							<p className="text-sm font-medium text-heading">{pose}</p>
						</div>
					))}
				</div>
			</section>

			<section className="mb-16 scroll-mt-8 md:mb-24">
				<div className="rounded-2xl border border-amber-300/70 bg-amber-50 px-5 py-4 text-amber-900 dark:border-amber-400/40 dark:bg-amber-500/10 dark:text-amber-100">
					<h2 className="mb-2 text-lg font-bold">Safety note</h2>
					<p className="text-sm leading-relaxed">
						Brain Pal is a self-help tool and does not diagnose or treat any
						condition. If you might be in danger, call your local emergency
						number. Crisis support options are always easy to find in the app.
					</p>
				</div>
			</section>

			<section id="faq" className="mb-16 scroll-mt-8 md:mb-24">
				<FAQ items={faqs} />
			</section>

			<section className="mb-16 text-center md:mb-24">
				<div className="card-base px-6 py-10 md:px-10">
					<h2 className="mb-3 text-3xl font-bold text-heading">
						Be a little kinder to your mind, today.
					</h2>
					<p className="mx-auto mb-7 max-w-2xl text-body">
						Brain Pal is free, private, and built for small steps that add up.
					</p>
					<CTAButtons
						appleHref={storeLinks.apple}
						browserHref={storeLinks.google}
					/>
				</div>
			</section>
		</main>
	);
}
