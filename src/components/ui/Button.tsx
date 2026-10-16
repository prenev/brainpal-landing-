import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Flat pill button. `primary` is the brand mint, `ghost` is an outline. */
export const Button = ({
	href,
	children,
	variant = "primary",
	external = false,
	className,
}: {
	href: string;
	children: ReactNode;
	variant?: "primary" | "ghost";
	external?: boolean;
	className?: string;
}) => (
	<a
		href={href}
		{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
		className={cn(
			"inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[17px] font-semibold transition-opacity hover:opacity-85",
			variant === "primary"
				? "bg-mint text-ink"
				: "border border-white/25 text-white",
			className,
		)}
	>
		{children}
	</a>
);
