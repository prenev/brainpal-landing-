import { FaApple } from "react-icons/fa";
import { cn } from "@/lib/cn";

/** "Coming soon on the App Store" badge. Swap href for the real URL at launch. */
export const AppStoreButton = ({
	href,
	className,
}: {
	href: string;
	className?: string;
}) => (
	<a
		href={href}
		className={cn(
			"inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-ink transition-opacity hover:opacity-90",
			className,
		)}
	>
		<FaApple aria-hidden="true" className="h-8 w-8 shrink-0" />
		<span className="text-left leading-tight">
			<span className="block text-xs font-semibold opacity-70">
				Coming soon on the
			</span>
			<span className="block text-xl font-extrabold tracking-tight">
				App Store
			</span>
		</span>
	</a>
);
