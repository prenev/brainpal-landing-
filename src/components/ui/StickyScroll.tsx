"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

export interface StickyStep {
	eyebrow: string;
	title: string;
	body: string;
	image: string;
	alt: string;
}

/**
 * Aceternity sticky-scroll-reveal: copy scrolls on the left, the phone stays
 * pinned on the right and swaps screen as each step crosses mid-viewport.
 * Below md each step shows its own phone instead.
 */
export const StickyScroll = ({ steps }: { steps: StickyStep[] }) => {
	const [active, setActive] = useState(0);
	const refs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) {
						setActive(Number((e.target as HTMLElement).dataset.i));
					}
				}
			},
			{ rootMargin: "-45% 0px -45% 0px" },
		);
		for (const el of refs.current) if (el) io.observe(el);
		return () => io.disconnect();
	}, []);

	return (
		<div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:gap-16">
			<div>
				{steps.map((s, i) => (
					<div
						key={s.title}
						data-i={i}
						ref={(el) => {
							refs.current[i] = el;
						}}
						className="flex min-h-[70svh] flex-col justify-center py-10 md:min-h-[85svh]"
					>
						<motion.div
							animate={{ opacity: active === i ? 1 : 0.28 }}
							transition={{ duration: 0.4 }}
						>
							<p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-mint">
								{s.eyebrow}
							</p>
							<h3 className="mb-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">
								{s.title}
							</h3>
							<p className="max-w-md text-lg leading-relaxed text-[#a1a1a6] md:text-xl">
								{s.body}
							</p>
						</motion.div>
						<div className="mx-auto mt-10 w-[min(70vw,280px)] md:hidden">
							<PhoneFrame src={s.image} alt={s.alt} />
						</div>
					</div>
				))}
			</div>

			<div className="hidden md:block">
				<div className="sticky top-16 flex h-[calc(100svh-4rem)] items-center justify-center py-4">
					<div className="relative h-full max-h-[760px]">
						<AnimatePresence mode="wait">
							<motion.div
								key={steps[active].image}
								initial={{ opacity: 0, scale: 0.96, y: 18 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.98, y: -12 }}
								transition={{ duration: 0.35 }}
								className="h-full"
							>
								<PhoneFrame
									fitHeight
									src={steps[active].image}
									alt={steps[active].alt}
								/>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
};
