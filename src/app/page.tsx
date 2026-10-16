import type { ReactNode } from "react";
import {
	FiAward,
	FiBell,
	FiHeart,
	FiLock,
	FiMoon,
	FiTarget,
	FiWifiOff,
} from "react-icons/fi";
import InterestForm from "@/components/InterestForm";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { Button } from "@/components/ui/Button";
import { ContainerScroll } from "@/components/ui/ContainerScroll";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { StickyScroll } from "@/components/ui/StickyScroll";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { faqs, promises, site, steps } from "@/config";

const accent = "text-mint";

const notifyHref = "#notify";

const Chip = ({ children }: { children: ReactNode }) => (
	<span className="rounded-full bg-paper px-3 py-1.5 text-[13px] font-medium text-[#1d1d1f]">
		{children}
	</span>
);

const bento: {
	title: string;
	description: string;
	icon: ReactNode;
	className: string;
	header?: ReactNode;
}[] = [
	{
		title: "Five daily anchors",
		description:
			"Up to five tiny habits like water, a walk or one line of writing. Deliberately not a big to-do list.",
		icon: <FiTarget size={20} />,
		className: "md:col-span-4",
		header: (
			<div className="absolute right-6 top-6 hidden flex-col items-end gap-2 md:flex">
				<Chip>💧 Drink water</Chip>
				<Chip>🚶 Walk 10 minutes</Chip>
				<Chip>✍️ Write one line</Chip>
			</div>
		),
	},
	{
		title: "Reminders that respect you",
		description:
			"Gentle nudges that skip themselves once you've already done the thing.",
		icon: <FiBell size={20} />,
		className: "md:col-span-2",
	},
	{
		title: "Sleep, if you want it",
		description:
			"See sleep from Apple Health next to your mood. Read-only, and it stays on your phone.",
		icon: <FiMoon size={20} />,
		className: "md:col-span-2",
	},
	{
		title: "Coins for showing up",
		description:
			"Spend earned coins on rest days that protect your streak. No real money, ever.",
		icon: <FiAward size={20} />,
		className: "md:col-span-4",
		header: (
			<p
				aria-hidden="true"
				className={`absolute right-8 top-2 hidden text-[9rem] font-semibold leading-none tracking-tighter md:block ${accent}`}
			>
				+5
			</p>
		),
	},
	{
		title: "Works offline",
		description:
			"Everything works with no signal and no account. Sync between devices is optional.",
		icon: <FiWifiOff size={20} />,
		className: "md:col-span-3",
	},
	{
		title: "Apple Health",
		description:
			"Save breathing sessions to Mindful Minutes when you choose to.",
		icon: <FiHeart size={20} />,
		className: "md:col-span-3",
	},
];

const stats = [
	{ big: "0", label: "ads" },
	{ big: "0", label: "trackers" },
	{ big: "0", label: "accounts needed" },
	{ big: "100%", label: "on your phone by default" },
];

const poses = [
	{ src: "/assets/pal/wave.png", name: "Waving hello", delay: "0s" },
	{ src: "/assets/pal/think.png", name: "Thinking it through", delay: "0.8s" },
	{ src: "/assets/pal/celebrate.png", name: "Celebrating you", delay: "1.6s" },
	{ src: "/assets/pal/sleep.png", name: "Resting with you", delay: "2.4s" },
];

export default function HomePage() {
	return (
		<main className="-mt-16">
			{/* Hero */}
			<section className="relative overflow-hidden bg-ink pt-36 text-center md:pt-44">
				<div className="relative z-10 mx-auto max-w-5xl px-6">
					<p className="mb-5 text-lg font-semibold text-[#34d17a] md:text-xl">
						Brain Pal
					</p>
					<TextGenerateEffect
						words="Check in. Breathe. Take one small step."
						highlight={["Breathe"]}
						highlightClassName={accent}
						className="text-[2.75rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
					/>
					<Reveal delay={0.9}>
						<p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[#a1a1a6] md:text-2xl">
							A private mood diary and calming toolkit for anxious days and
							ordinary ones.
						</p>
						<div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
							<Button href={site.links.webApp} external>
								Try it in your browser
							</Button>
							<a
								href={notifyHref}
								className="text-[17px] text-[#2997ff] hover:underline"
							>
								Get notified for the App Store ›
							</a>
						</div>
						<p className="mt-6 text-sm text-[#86868b]">
							Free · No ads · No tracking · No account needed
						</p>
					</Reveal>
				</div>

				<ContainerScroll>
					<PhoneFrame
						src="/assets/mockups/checkin.webp"
						alt="Brain Pal home screen"
						priority
					/>
				</ContainerScroll>
			</section>

			{/* Statement */}
			<section className="bg-paper px-6 py-28 md:py-44">
				<Reveal className="mx-auto max-w-4xl">
					<p className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#86868b] md:text-5xl">
						Some days are heavy.{" "}
						<span className="text-[#1d1d1f]">
							Brain Pal gives you one tap to say so, one minute to settle, and
							one small thing to do next.
						</span>{" "}
						No streak guilt. No noise. Just a soft place to land.
					</p>
				</Reveal>
			</section>

			{/* Walkthrough */}
			<section id="how-it-works" className="scroll-mt-16 bg-ink py-24 md:py-32">
				<Reveal className="mx-auto mb-6 max-w-3xl px-6 text-center">
					<h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
						One gentle step
						<br />
						<span className={accent}>at a time.</span>
					</h2>
				</Reveal>
				<StickyScroll steps={[...steps]} />
			</section>

			{/* Bento */}
			<section id="features" className="scroll-mt-16 bg-paper py-24 md:py-36">
				<Reveal className="mx-auto mb-14 max-w-3xl px-6 text-center">
					<h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-6xl">
						Small things that
						<br />
						help every day.
					</h2>
				</Reveal>
				<BentoGrid className="md:grid-cols-6">
					{bento.map((b, i) => (
						<BentoGridItem key={b.title} index={i} {...b} />
					))}
				</BentoGrid>
			</section>

			{/* Privacy */}
			<section id="privacy" className="scroll-mt-16 bg-ink py-24 md:py-36">
				<div className="mx-auto max-w-5xl px-6 text-center">
					<Reveal>
						<p className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold text-[#34d17a]">
							<FiLock aria-hidden="true" /> Privacy
						</p>
						<h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
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
					<div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
						{stats.map((s, i) => (
							<Reveal key={s.label} delay={i * 0.08}>
								<div className="flex h-full flex-col items-center justify-center rounded-3xl bg-ink-2 px-4 py-10">
									<p
										className={`text-6xl font-semibold tracking-tighter md:text-7xl ${accent}`}
									>
										{s.big}
									</p>
									<p className="mt-2 text-sm text-[#a1a1a6]">{s.label}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
				<InfiniteMovingCards items={promises} className="mt-16" />
			</section>

			{/* Meet Pal */}
			<section id="meet-pal" className="scroll-mt-16 bg-paper py-24 md:py-36">
				<Reveal className="mx-auto mb-16 max-w-3xl px-6 text-center">
					<h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-6xl">
						Meet Pal.
					</h2>
					<p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-[#6e6e73]">
						Your soft sidekick. Pal cheers you on when you show up, keeps you
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
					<h2 className="mb-12 text-center text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-6xl">
						Questions.
					</h2>
					<div className="divide-y divide-black/10 border-y border-black/10">
						{faqs.map((f) => (
							<details key={f.question} className="group py-5">
								<summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold tracking-tight text-[#1d1d1f] [&::-webkit-details-marker]:hidden">
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
						<h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
							Be a little kinder to your mind,{" "}
							<span className={accent}>today.</span>
						</h2>
						<p className="mt-6 max-w-md text-xl leading-relaxed text-[#a1a1a6]">
							Tell us what would help most and we'll email you the moment Brain
							Pal is on the App Store. Free, private, and built for small steps.
						</p>
						<div className="mt-8">
							<Button href={site.links.webApp} external variant="ghost">
								Or try it in your browser now
							</Button>
						</div>
					</Reveal>
					<Reveal delay={0.1}>
						<InterestForm />
					</Reveal>
				</div>
			</section>
		</main>
	);
}
