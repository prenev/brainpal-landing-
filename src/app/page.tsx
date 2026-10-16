import {
	FiAward,
	FiBell,
	FiFileText,
	FiHeart,
	FiLock,
	FiTarget,
	FiWifiOff,
} from "react-icons/fi";
import InterestForm from "@/components/InterestForm";
import { AppStoreButton } from "@/components/ui/AppStoreButton";
import { ContainerScroll } from "@/components/ui/ContainerScroll";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { StickyScroll } from "@/components/ui/StickyScroll";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { faqs, promises, site, steps } from "@/config";

const accent = "text-mint";

const notifyHref = "#notify";
const waitlistButton =
	"inline-flex h-[68px] items-center justify-center rounded-2xl bg-mint px-8 text-xl font-extrabold tracking-tight text-ink transition-opacity hover:opacity-85";
const heroButton =
	"inline-flex h-12 items-center justify-center rounded-full px-6 text-base font-bold transition-opacity hover:opacity-85";

const features = [
	{
		icon: <FiTarget size={28} aria-hidden="true" />,
		title: "Five daily anchors",
		body: "Pick up to five small habits, like a walk, some sunlight or slow breathing. Some tick themselves. The limit is deliberate: this isn't a to-do list.",
	},
	{
		icon: <FiBell size={28} aria-hidden="true" />,
		title: "Reminders that respect you",
		body: "Choose the times and days. Reminders open the right tool, and skip themselves if you've already done the thing.",
	},
	{
		icon: <FiHeart size={28} aria-hidden="true" />,
		title: "Apple Health, if you want it",
		body: "See last night's sleep next to your mood, and save breathing sessions as Mindful Minutes. It's opt-in, sleep is read-only, and it stays on your phone.",
	},
	{
		icon: <FiAward size={28} aria-hidden="true" />,
		title: "Coins for showing up",
		body: "Earn coins from check-ins, calming sessions and journal entries. Spend them on colour themes or a rest day that protects your streak. No real money, ever.",
	},
	{
		icon: <FiFileText size={28} aria-hidden="true" />,
		title: "Plain-language recaps",
		body: "A short summary of your day, week or month, written on your phone from your own entries. No AI needed.",
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
	{ src: "/assets/pal/sleep.png", name: "Resting with you", delay: "2.4s" },
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
							iPhone first, Android later · Free · No ads · No tracking
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

			{/* Features */}
			<section id="features" className="scroll-mt-16 bg-paper py-24 md:py-36">
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
			<section id="privacy" className="scroll-mt-16 bg-ink py-24 md:py-36">
				<div className="mx-auto max-w-5xl px-6 text-center">
					<Reveal>
						<p className="mb-4 flex items-center justify-center gap-2 text-lg font-bold text-mint">
							<FiLock aria-hidden="true" /> Privacy
						</p>
						<h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
							What's on your phone,
							<br />
							<span className={accent}>stays on your phone.</span>
						</h2>
						<p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[#a1a1a6]">
							Everything is stored on your device by default. An account only
							adds sync. Sleep data is read only if you allow it, and it never
							leaves your phone.
						</p>
					</Reveal>
				</div>
				<InfiniteMovingCards items={promises} className="mt-16" />
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
							<div className="flex flex-col items-center rounded-[28px] bg-white px-4 pb-6 pt-8">
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
