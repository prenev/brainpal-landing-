import { FaApple } from "react-icons/fa";
import { cn } from "@/lib/cn";

/**
 * "Coming soon on the App Store" badge. Not a link until the app is live:
 * pass `href` at launch (and swap in Apple's official badge).
 */
export const AppStoreButton = ({
	href,
	className,
}: {
	href?: string;
	className?: string;
}) => {
	const cls = cn(
		"inline-flex h-[68px] items-center gap-3 rounded-2xl bg-white px-6 text-ink",
		href ? "transition-opacity hover:opacity-90" : "cursor-default",
		className,
	);
	const inner = (
		<>
			<FaApple aria-hidden="true" className="h-8 w-8 shrink-0" />
			<span className="text-left leading-tight">
				<span className="block text-xs font-semibold opacity-70">
					Coming soon on the
				</span>
				<span className="block text-xl font-extrabold tracking-tight">
					App Store
				</span>
			</span>
		</>
	);
	return href ? (
		<a href={href} className={cls}>
			{inner}
		</a>
	) : (
		<span role="img" aria-label="Coming soon on the App Store" className={cls}>
			{inner}
		</span>
	);
};
