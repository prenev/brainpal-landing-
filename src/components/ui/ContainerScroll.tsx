"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

/** Aceternity container-scroll: the device tilts flat as you scroll into it. */
export const ContainerScroll = ({
	title,
	children,
}: {
	title?: ReactNode;
	children: ReactNode;
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center center"],
	});
	const rotate = useTransform(scrollYProgress, [0, 1], [24, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
	const lift = useTransform(scrollYProgress, [0, 1], [60, 0]);

	return (
		<div
			ref={ref}
			className="relative flex items-start justify-center px-4 pb-24 pt-4 md:pb-40"
		>
			<div className="w-full" style={{ perspective: "1100px" }}>
				{title && (
					<div className="mx-auto mb-10 max-w-3xl text-center">{title}</div>
				)}
				<motion.div
					style={{ rotateX: rotate, scale, y: lift }}
					className="mx-auto w-[min(78vw,320px)] md:w-[360px]"
				>
					{children}
				</motion.div>
			</div>
		</div>
	);
};
