import { cn } from "@/lib/cn";

/** Aceternity infinite-moving-cards, CSS-only so it works without JS. */
export const InfiniteMovingCards = ({
	items,
	className,
	reverse = false,
}: {
	items: { title: string; body: string }[];
	className?: string;
	reverse?: boolean;
}) => (
	<div className={cn("group relative overflow-hidden", className)}>
		<ul
			className={cn(
				"flex w-max gap-4 py-2 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none",
				reverse && "[animation-direction:reverse]",
			)}
		>
			{[...items, ...items].map((item, i) => (
				<li
					// biome-ignore lint/suspicious/noArrayIndexKey: duplicated loop list
					key={i}
					aria-hidden={i >= items.length}
					className="w-[300px] shrink-0 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:w-[360px]"
				>
					<p className="mb-2 text-lg font-semibold text-white">{item.title}</p>
					<p className="text-[15px] leading-relaxed text-[#a1a1a6]">
						{item.body}
					</p>
				</li>
			))}
		</ul>
	</div>
);
