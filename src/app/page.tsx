import {
	FiAward,
	FiCheck,
	FiFileText,
	FiHeart,
	FiLock,
	FiMic,
	FiVolume2,
	FiWifiOff,
} from "react-icons/fi";
import InterestForm from "@/components/InterestForm";
import { AppStoreButton } from "@/components/ui/AppStoreButton";
import { ContainerScroll } from "@/components/ui/ContainerScroll";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { StickyScroll } from "@/components/ui/StickyScroll";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Controls, LiveActivity, WidgetWall } from "@/components/Widgets";
import { faqs, moreInside, plans, promises, site, steps } from "@/config";

const accent = "text-mint";

const notifyHref = "#notify";
const waitlistButton =
	"inline-flex h-[68px] items-center justify-center rounded-2xl bg-mint px-8 text-xl font-extrabold tracking-tight text-ink transition-opacity hover:opacity-85";
const heroButton =
	"inline-flex h-12 items-center justify-center rounded-full px-6 text-base font-bold transition-opacity hover:opacity-85";

const features = [
	{
		icon: <FiMic size={28} aria-hidden="true" />,
		title: "Hands-free with Siri",
		body: "Say \u201cHey Siri, I need to calm down\u201d or add it to Shortcuts. Breathing, SOS, a mood check-in or a parked worry, without opening the app first.",
	},
	{
		icon: <FiHeart size={28} aria-hidden="true" />,
		title: "Apple Health, if you want it",
		body: "See last night's sleep next to your mood, and save breathing sessions as Mindful Minutes. It's opt-in, sleep is read-only, and it stays on your phone.",
	},
	{
		icon: <FiVolume2 size={28} aria-hidden="true" />,
		title: "Haptics and sounds",
		body: "Soft taps and gentle sounds guide your breathing, and both switch off in one tap if you'd rather not.",
	},
	{
		icon: <FiAward size={28} aria-hidden="true" />,
		title: "Rest days, not guilt",
		body: "Missed a day? Spend coins on a rest day that protects your streak. No real money, ever.",
	},
	{
		icon: <FiFileText size={28} aria-hidden="true" />,
		title: "Plain-language recaps",
		body: "A short summary of your day, written on your phone from your own entries. No AI needed.",
	},
	{
		icon: <FiWifiOff size={28} aria-hidden="true" />,
		title: "Works offline",
		body: "Everything works with no signal. An account is optional and only adds sync between devices.",
	},
];

const poses = [
	{ src: "/assets/pal/wave.png", name: "Waving hello", delay: "0s" },
	{ src: "/assets/pal/think.png", name: "Thinking it through", delay: "0.8s" },
	{ src: "/assets/pal/celebrate.png", name: "Celebrating you", delay: "1.6s" },
	{ src: "/assets/pal/sleepy.png", name: "Resting with you", delay: "2.4s" },
];

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": `${site.url}/#organization`,
			name: site.companyName,
			url: site.url,
			logo: `${site.url}/icon-512.png`,
			email: site.contactEmail,
		},
		{
			"@type": "WebSite",
			"@id": `${site.url}/#website`,
			url: site.url,
			name: site.name,
			description: site.description,
			inLanguage: "en",
			publisher: { "@id": `${site.url}/#organization` },
		},
		{
			"@type": "MobileApplication",
			"@id": `${site.url}/#app`,
			name: site.name,
			description: site.description,
			operatingSystem: "iOS",
			applicationCategory: "HealthApplication",
			image: `${site.url}${site.ogImage.url}`,
			url: site.url,
			offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
			featureList: [
				"One-tap mood check-ins",
				"Thought records",
				"Guided breathing and SOS",
				"Worry time",
				"Home Screen and Lock Screen widgets",
				"Live Activity and Control Center controls",
				"Siri and Shortcuts",
				"Focus guard",
				"Sleep insights from Apple Health",
			],
			publisher: { "@id": `${site.url}/#organization` },
		},
		{
			"@type": "FAQPage",
			"@id": `${site.url}/#faq`,
			mainEntity: faqs.map((f) => ({
				"@type": "Question",
				name: f.question,
				acceptedAnswer: { "@type": "Answer", text: f.answer },
			})),
		},
	],
};

export default function HomePage() {
	return (
		<main className="-mt-16">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			{/* Hero */}
			<section className="relative overflow-hidden bg-ink pt-36 text-center md:pt-44">
				<div className="relative z-10 mx-auto max-w-5xl px-6">
					<img
						src="/icon-512.png"
						alt="Wobbi"
						width={96}
						height={96}
						className="mx-auto mb-8 h-24 w-24 rounded-[26px]"
					/>
					<TextGenerateEffect
						words="Check in. Breathe. Take one small step."
						highlight={["Breathe"]}
						highlightClassName={accent}
						className="text-[2.75rem] font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
					/>
					<Reveal delay={0.9}>
						<p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[#a1a1a6] md:text-2xl">
							A private mood diary and calming toolkit for anxious days and
							ordinary ones.
						</p>
						<div className="mt-9 flex items-center justify-center gap-3">
							<a href={notifyHref} className={`${heroButton} bg-mint text-ink`}>
								Join the waitlist
							</a>
							<a
								href="#faq"
								className={`${heroButton} border border-white/25 text-white`}
							>
								See FAQs
							</a>
						</div>
						<p className="mt-6 text-sm text-[#86868b]">
							iPhone first, Android later · Free to start · No ads · No tracking
						</p>
					</Reveal>
				</div>

				<ContainerScroll>
					<PhoneFrame
						src="/assets/mockups/checkin.webp"
						alt="Wobbi home screen"
						priority
					/>
				</ContainerScroll>
			</section>

			{/* Statement */}
			<section className="bg-paper px-6 py-28 md:py-44">
				<Reveal className="mx-auto max-w-4xl">
					<p className="text-3xl font-bold leading-[1.15] tracking-tight text-[#86868b] md:text-5xl">
						Some days are heavy.{" "}
						<span className="text-[#1d1d1f]">
							Wobbi gives you one tap to say so, one minute to settle, and one
							small thing to do next.
						</span>{" "}
						No streak guilt. No noise. Just a soft place to land.
					</p>
				</Reveal>
			</section>

			{/* Walkthrough */}
			<section id="how-it-works" className="scroll-mt-16 bg-ink py-24 md:py-32">
				<Reveal className="mx-auto mb-6 max-w-3xl px-6 text-center">
					<h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
						One gentle step
						<br />
						<span className={accent}>at a time.</span>
					</h2>
				</Reveal>
				<StickyScroll steps={[...steps]} />
			</section>

			{/* More inside */}
			<section id="more" className="scroll-mt-16 bg-paper py-24 md:py-36">
				<Reveal className="mx-auto mb-14 max-w-3xl px-6 text-center">
					<h2 className="text-4xl font-extrabold tracking-tight text-[#1d1d1f] md:text-6xl">
						And a lot more
						<br />
						inside.
					</h2>
				</Reveal>
				<ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-14 px-6 md:grid-cols-4">
					{moreInside.map((m, i) => (
						<li key={m.title}>
							<Reveal delay={(i % 4) * 0.07}>
								<PhoneFrame src={m.image} alt={m.alt} />
								<h3 className="mt-5 text-lg font-extrabold tracking-tight text-[#1d1d1f]">
									{m.title}
								</h3>
								<p className="mt-1 text-[15px] leading-relaxed text-[#6e6e73]">
									{m.body}
								</p>
							</Reveal>
						</li>
					))}
				</ul>
			</section>

			{/* Widgets */}
			<section id="widgets" className="scroll-mt-16 bg-ink py-24 md:py-36">
				<Reveal className="mx-auto mb-14 max-w-3xl px-6 text-center">
					<h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
						On your Home Screen,
						<br />
						<span className={accent}>before you even open it.</span>
					</h2>
					<p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[#a1a1a6]">
						Fourteen widgets, four of them for the Lock Screen. Tap a mood face
						or tick an anchor right from the widget; Wobbi applies it next time
						you open the app. Widgets show numbers, never what you wrote.
					</p>
				</Reveal>
				<Reveal>
					<WidgetWall />
				</Reveal>
				<div className="mx-auto mt-24 grid max-w-5xl items-center gap-14 px-6 md:grid-cols-2">
					<Reveal>
						<h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
							Breathe from the Lock Screen.
						</h3>
						<p className="mt-4 text-lg leading-relaxed text-[#a1a1a6]">
							Start a breathing or focus session and follow it on the Lock
							Screen and in the Dynamic Island, without keeping the app open.
						</p>
						<h3 className="mt-12 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
							One swipe to calm.
						</h3>
						<p className="mt-4 text-lg leading-relaxed text-[#a1a1a6]">
							Four Control Center buttons (iOS 18): SOS, Breathe, Park a worry
							and Focus guard.
						</p>
						<div className="mt-6">
							<Controls />
						</div>
					</Reveal>
					<Reveal delay={0.1}>
						<LiveActivity />
					</Reveal>
				</div>
				<p className="mx-auto mt-16 max-w-xl px-6 text-center text-sm text-[#86868b]">
					Illustrations of the widgets with sample data. Widgets need iOS 17 and
					Control Center buttons need iOS 18.
				</p>
			</section>

			{/* Features */}
			<section id="features" className="scroll-mt-16 bg-white py-24 md:py-36">
				<Reveal className="mx-auto mb-14 max-w-3xl px-6 text-center">
					<h2 className="text-4xl font-extrabold tracking-tight text-[#1d1d1f] md:text-6xl">
						Small things that
						<br />
						help every day.
					</h2>
				</Reveal>
				<div className="mx-auto grid max-w-5xl gap-x-16 px-6 md:grid-cols-2">
					{features.map((f, i) => (
						<Reveal key={f.title} delay={(i % 2) * 0.08}>
							<div className="border-t border-black/10 py-9">
								<div className="mb-4 text-[#1fa65a]">{f.icon}</div>
								<h3 className="mb-2 text-2xl font-extrabold tracking-tight text-[#1d1d1f]">
									{f.title}
								</h3>
								<p className="max-w-md text-lg leading-relaxed text-[#6e6e73]">
									{f.body}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			{/* Privacy */}
			<section id="privacy" className="scroll-mt-16 bg-paper py-24 md:py-36">
				<div className="mx-auto max-w-5xl px-6">
					<Reveal className="text-center">
						<p className="mb-4 flex items-center justify-center gap-2 text-lg font-bold text-[#1fa65a]">
							<FiLock aria-hidden="true" /> Privacy
						</p>
						<h2 className="text-4xl font-extrabold tracking-tight text-[#1d1d1f] md:text-6xl">
							What's on your phone,
							<br />
							stays on your phone.
						</h2>
						<p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[#6e6e73]">
							Everything is stored on your device by default. An account only
							adds sync. Sleep data is read only if you allow it, and it never
							leaves your phone.
						</p>
					</Reveal>
					<ul className="mt-16 grid gap-x-16 md:grid-cols-2">
						{promises.map((x) => (
							<li key={x.title} className="border-t border-black/10 py-6">
								<p className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-[#1d1d1f]">
									<FiCheck className="text-[#1fa65a]" aria-hidden="true" />
									{x.title}
								</p>
								<p className="mt-1 pl-7 text-lg leading-relaxed text-[#6e6e73]">
									{x.body}
								</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Plans */}
			<section
				id="pricing"
				className="scroll-mt-16 bg-white px-6 py-24 md:py-36"
			>
				<Reveal className="mx-auto mb-14 max-w-3xl text-center">
					<h2 className="text-4xl font-extrabold tracking-tight text-[#1d1d1f] md:text-6xl">
						Simple pricing.
					</h2>
					<p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-[#6e6e73]">
						Everything that helps you calm down is free. Pro adds two extras.
					</p>
				</Reveal>
				<div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
					{[
						{
							name: "Free",
							price: "$0",
							note: "forever, no card needed",
							list: plans.free,
							cta: "Join the waitlist",
							pro: false,
						},
						{
							name: "Wobbi Pro",
							price: "7 days free",
							note: "then a monthly App Store subscription. Price announced at launch.",
							list: plans.pro,
							cta: "Join the waitlist",
							pro: true,
						},
					].map((p, i) => (
						<Reveal key={p.name} delay={i * 0.08}>
							<div
								className={`flex h-full flex-col rounded-[28px] p-8 ${p.pro ? "bg-ink text-white" : "border border-black/10 bg-paper text-[#1d1d1f]"}`}
							>
								<div className="flex items-center justify-between">
									<h3 className="text-xl font-extrabold">{p.name}</h3>
									{p.pro && (
										<span className="rounded-full bg-mint px-3 py-1 text-xs font-extrabold text-ink">
											Optional
										</span>
									)}
								</div>
								<p className="mt-5 text-5xl font-extrabold tracking-tight">
									{p.price}
								</p>
								<p
									className={`mt-1 min-h-[3rem] text-[15px] ${p.pro ? "text-[#a1a1a6]" : "text-[#6e6e73]"}`}
								>
									{p.note}
								</p>
								<a
									href={notifyHref}
									className={`mt-7 inline-flex h-12 items-center justify-center rounded-full text-base font-bold transition-opacity hover:opacity-85 ${p.pro ? "bg-mint text-ink" : "bg-ink text-white"}`}
								>
									{p.cta}
								</a>
								<ul className="mt-8 space-y-3">
									{p.list.map((item) => (
										<li
											key={item}
											className={`flex gap-3 text-[16px] leading-snug ${p.pro ? "text-[#d2d2d7]" : "text-[#6e6e73]"}`}
										>
											<FiCheck
												className={`mt-0.5 shrink-0 ${p.pro ? "text-mint" : "text-[#1fa65a]"}`}
												aria-hidden="true"
											/>
											{item}
										</li>
									))}
								</ul>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			{/* Meet Wobbi */}
			<section id="meet-pal" className="scroll-mt-16 bg-paper py-24 md:py-36">
				<Reveal className="mx-auto mb-16 max-w-3xl px-6 text-center">
					<h2 className="text-4xl font-extrabold tracking-tight text-[#1d1d1f] md:text-6xl">
						Meet Wobbi.
					</h2>
					<p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-[#6e6e73]">
						Your soft sidekick. Wobbi cheers you on when you show up, keeps you
						company when things are hard, and never guilts you for missing a
						day.
					</p>
				</Reveal>
				<div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
					{poses.map((p, i) => (
						<Reveal key={p.name} delay={i * 0.08}>
							<div className="flex flex-col items-center px-4 pb-6 pt-4">
								<img
									src={p.src}
									alt={p.name}
									loading="lazy"
									style={{ animationDelay: p.delay }}
									className="h-36 w-36 animate-float object-contain md:h-44 md:w-44"
								/>
								<p className="mt-4 text-[15px] font-medium text-[#1d1d1f]">
									{p.name}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			{/* FAQ */}
			<section id="faq" className="scroll-mt-16 bg-white px-6 py-24 md:py-36">
				<Reveal className="mx-auto max-w-3xl">
					<h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-[#1d1d1f] md:text-6xl">
						Questions.
					</h2>
					<div className="divide-y divide-black/10 border-y border-black/10">
						{faqs.map((f) => (
							<details key={f.question} className="group py-5">
								<summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-extrabold tracking-tight text-[#1d1d1f] [&::-webkit-details-marker]:hidden">
									{f.question}
									<span
										aria-hidden="true"
										className="text-3xl font-light leading-none text-[#86868b] transition-transform duration-300 group-open:rotate-45"
									>
										+
									</span>
								</summary>
								<p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#6e6e73]">
									{f.answer}
								</p>
							</details>
						))}
					</div>
				</Reveal>
			</section>

			{/* Interest form */}
			<section id="notify" className="scroll-mt-16 bg-ink px-6 py-24 md:py-36">
				<div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
					<Reveal>
						<img
							src="/assets/pal/love.png"
							alt=""
							className="mb-6 h-28 w-28 animate-float object-contain"
						/>
						<h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
							Be a little kinder to your mind,{" "}
							<span className={accent}>today.</span>
						</h2>
						<p className="mt-6 max-w-md text-xl leading-relaxed text-[#a1a1a6]">
							Join the waitlist and tell us what would help most. We'll email
							you the moment Wobbi is on the App Store. Free, private, and built
							for small steps.
						</p>
						<div className="mt-8 flex flex-col gap-4 sm:flex-row">
							<AppStoreButton />
							<a href={notifyHref} className={waitlistButton}>
								Join the waitlist
							</a>
						</div>
						<p className="mt-3 text-sm text-[#86868b]">
							iPhone first. Android is planned for later.
						</p>
					</Reveal>
					<Reveal delay={0.1}>
						<InterestForm />
					</Reveal>
				</div>
			</section>
		</main>
	);
}
