"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

/** Words fade + unblur in one after another (Aceternity "text generate"). */
export const TextGenerateEffect = ({
	words,
	className,
	highlight = [],
	highlightClassName,
	delay = 0.15,
}: {
	words: string;
	className?: string;
	highlight?: string[];
	highlightClassName?: string;
	delay?: number;
}) => (
	<h1 className={className} aria-label={words}>
		{words.split(" ").map((word, i) => (
			<motion.span
				// biome-ignore lint/suspicious/noArrayIndexKey: static word list
				key={`${word}-${i}`}
				aria-hidden="true"
				initial={{ opacity: 0, filter: "blur(10px)", y: 12 }}
				animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
				transition={{ duration: 0.7, delay: delay + i * 0.12 }}
				className={cn(
					"inline-block pr-[0.25em]",
					highlight.includes(word.replace(/[.,]/g, "")) && highlightClassName,
				)}
			>
				{word}
			</motion.span>
		))}
	</h1>
);
