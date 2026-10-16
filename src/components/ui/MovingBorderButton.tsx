import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Aceternity hover-border-gradient pill: a light chases round the edge. */
export const MovingBorderButton = ({
	href,
	children,
	className,
	external = false,
}: {
	href: string;
	children: ReactNode;
	className?: string;
	external?: boolean;
}) => (
	<a
		href={href}
		{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
		className={cn(
			"group relative inline-flex overflow-hidden rounded-full p-px transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]",
			className,
		)}
	>
		<span
			aria-hidden="true"
			className="absolute -inset-[200%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0_60%,#34d17a_80%,#7be7ff_92%,transparent_100%)]"
		/>
		<span className="relative inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-[17px] font-medium text-white">
			{children}
		</span>
	</a>
);
