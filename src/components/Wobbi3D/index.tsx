"use client";

import { useEffect, useRef, useState } from "react";
import type { Reaction, WobbiHandle } from "./scene";

const actions: { id: Reaction; label: string }[] = [
	{ id: "wave", label: "Wave" },
	{ id: "jump", label: "Jump" },
	{ id: "cheer", label: "Cheer" },
	{ id: "breathe", label: "Breathe with me" },
];

/** An interactive 3D Wobbi: drag to spin, tap to poke, or use the buttons. Falls back to a still picture without WebGL. */
export default function Wobbi3D() {
	const canvas = useRef<HTMLCanvasElement>(null);
	const handle = useRef<WobbiHandle | null>(null);
	const [say, setSay] = useState("Tap me, or drag to spin me around.");
	const [failed, setFailed] = useState(false);

	useEffect(() => {
		const el = canvas.current;
		if (!el) return;
		let cancelled = false;
		import("./scene")
			.then(({ mountWobbi }) => {
				if (cancelled) return;
				try {
					handle.current = mountWobbi(el, {
						onSpeak: setSay,
						reduceMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
							.matches,
					});
				} catch {
					setFailed(true);
				}
			})
			.catch(() => setFailed(true));
		return () => {
			cancelled = true;
			handle.current?.dispose();
			handle.current = null;
		};
	}, []);

	return (
		<div className="mx-auto flex max-w-md flex-col items-center">
			<div className="relative h-[380px] w-full touch-pan-y select-none md:h-[440px]">
				{failed ? (
					<img
						src="/assets/pal/idle.png"
						alt="Wobbi"
						className="mx-auto h-full object-contain"
					/>
				) : (
					<canvas
						ref={canvas}
						role="img"
						aria-label="An interactive 3D model of Wobbi. Drag to spin, tap to say hello."
						className="h-full w-full cursor-grab active:cursor-grabbing"
					/>
				)}
			</div>
			<p
				aria-live="polite"
				className="min-h-[3rem] max-w-xs text-center text-lg font-bold text-[#1d1d1f]"
			>
				{say}
			</p>
			<div className="mt-3 flex flex-wrap justify-center gap-2">
				{actions.map((a) => (
					<button
						key={a.id}
						type="button"
						onClick={() => handle.current?.react(a.id)}
						className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-bold text-[#1d1d1f] transition-colors hover:bg-black/5"
					>
						{a.label}
					</button>
				))}
			</div>
		</div>
	);
}
