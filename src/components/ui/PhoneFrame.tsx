import { cn } from "@/lib/cn";

/** Plain CSS iPhone: titanium rim, dynamic island, screen image. */
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
	<div
		className={cn(
			"relative aspect-[9/19.2] w-full rounded-[13%/6.2%] bg-[#1b1c20] p-[2.4%] shadow-[0_0_0_1.5px_#3d3f46,0_40px_90px_-20px_rgba(0,0,0,0.75),0_0_80px_-30px_rgba(52,209,122,0.35)]",
			className,
		)}
	>
		<div className="relative h-full w-full overflow-hidden rounded-[11%/5.3%] bg-[#0b1220]">
			<img
				src={src}
				alt={alt}
				loading={priority ? "eager" : "lazy"}
				fetchPriority={priority ? "high" : "auto"}
				draggable={false}
				className="absolute inset-x-0 bottom-0 h-[93%] w-full object-cover object-top"
			/>
			<div className="absolute left-1/2 top-[1.6%] h-[2.6%] w-[28%] -translate-x-1/2 rounded-full bg-black" />
		</div>
	</div>
);
