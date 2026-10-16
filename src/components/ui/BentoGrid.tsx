"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) => (
	<div
		className={cn(
			"mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 md:auto-rows-[15.5rem] md:grid-cols-3",
			className,
		)}
	>
		{children}
	</div>
);

export const BentoGridItem = ({
	className,
	title,
	description,
	icon,
	header,
	index = 0,
}: {
	className?: string;
	title: string;
	description: string;
	icon: ReactNode;
	header?: ReactNode;
	index?: number;
}) => (
	<motion.div
		initial={{ opacity: 0, y: 28 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, margin: "-60px" }}
		transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
		className={cn(
			"group/bento relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-transform duration-500 hover:-translate-y-1",
			className,
		)}
	>
		{header}
		<div className="relative z-10 md:max-w-md">
			<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-paper text-[#1d1d1f] transition-colors group-hover/bento:bg-mint group-hover/bento:text-black">
				{icon}
			</div>
			<h3 className="mb-1.5 text-xl font-semibold tracking-tight text-[#1d1d1f]">
				{title}
			</h3>
			<p className="text-[15px] leading-relaxed text-[#6e6e73]">
				{description}
			</p>
		</div>
	</motion.div>
);
