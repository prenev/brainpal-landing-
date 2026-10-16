import { cn } from "@/lib/cn";

/** A pre-rendered iPhone mockup (see scripts/make-mockups.py). */
export const PhoneFrame = ({
	src,
	alt,
	className,
	priority = false,
}: {
	src: string;
	alt: string;
	className?: string;
	priority?: boolean;
}) => (
	<img
		src={src}
		alt={alt}
		width={720}
		height={1528}
		loading={priority ? "eager" : "lazy"}
		fetchPriority={priority ? "high" : "auto"}
		draggable={false}
		className={cn("h-auto w-full select-none", className)}
	/>
);
