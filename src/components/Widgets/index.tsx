import type { CSSProperties, ReactNode } from "react";
import { FiAlertCircle, FiCloud, FiShield, FiWind } from "react-icons/fi";
import { cn } from "@/lib/cn";

/*
 * Illustrations of Wobbi's iPhone widgets, Live Activity and Control Center controls.
 * Layouts, copy and colours follow the SwiftUI sources in the app (ios-native/Widgets), flattened to solid colours,
 * with sample data. They are drawings, not screenshots of a device.
 */

const text = "text-[#f4f7ff]";
const muted = "text-[#f4f7ff]/60";
const green = "#35d07f";

const Pal = ({
	name,
	size,
	className,
	style,
}: {
	name: string;
	size: number;
	className?: string;
	style?: CSSProperties;
}) => (
	<img
		src={`/assets/pal/${name}.png`}
		alt=""
		width={size}
		height={size}
		loading="lazy"
		draggable={false}
		className={cn("shrink-0 object-contain", className)}
		style={{ width: size, height: size, ...style }}
	/>
);

const Emo = ({ name, size }: { name: string; size: number }) => (
	<img
		src={`/assets/emoji/${name}.png`}
		alt=""
		width={size}
		height={size}
		loading="lazy"
		draggable={false}
		className="shrink-0 object-contain"
		style={{ width: size, height: size }}
	/>
);

const Kicker = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => (
	<span
		className={cn(
			"text-[10px] font-extrabold uppercase tracking-[0.14em]",
			className ?? muted,
		)}
	>
		{children}
	</span>
);

/** One widget tile. Small is 158x158, medium 338x158 (iPhone points). */
const Tile = ({
	size,
	bg,
	label,
	className,
	children,
}: {
	size: "small" | "medium";
	bg: string;
	label: string;
	className?: string;
	children: ReactNode;
}) => (
	<div
		role="img"
		aria-label={label}
		className={cn(
			"relative shrink-0 overflow-hidden rounded-[24px] p-[14px] text-left",
			className,
		)}
		style={{ width: size === "small" ? 158 : 338, height: 158, background: bg }}
	>
		{children}
	</div>
);

/* ---------- small ---------- */

const Streak = () => (
	<Tile size="small" bg="#2a2358" label="Streak buddy widget">
		<Pal name="cheer" size={70} className="absolute right-[-4px] top-[44px]" />
		<div className="relative flex h-full flex-col">
			<div className="flex items-center justify-between">
				<Kicker>Streak</Kicker>
				<Emo name="fire" size={22} />
			</div>
			<div className="flex items-baseline gap-1">
				<span className={cn("text-[40px] font-black leading-none", text)}>
					6
				</span>
				<span className={cn("text-[13px] font-bold", muted)}>days</span>
			</div>
			<div className="mt-auto flex gap-[5px]">
				{["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d, i) => (
					<div key={d} className="flex flex-col items-center gap-0.5">
						<span
							className="h-[9px] w-[9px] rounded-full"
							style={{
								background: i < 5 ? "#ffa63d" : "rgba(255,255,255,.16)",
							}}
						/>
						<span className={cn("text-[8px] font-bold", muted)}>{d[0]}</span>
					</div>
				))}
			</div>
		</div>
	</Tile>
);

const Breathe = () => (
	<Tile size="small" bg="#123f33" label="Breathe widget">
		<div className="flex h-full flex-col items-center justify-between">
			<div className="relative mt-1 flex h-[100px] w-full items-center justify-center">
				<span className="absolute h-[118px] w-[118px] rounded-full bg-[#35d07f]/25" />
				<span className="absolute h-24 w-24 rounded-full border-2 border-[#35d07f]/40" />
				<span className="absolute h-[72px] w-[72px] rounded-full border-2 border-[#35d07f]/60" />
				<Pal name="breatheIn" size={66} className="relative" />
			</div>
			<span className={cn("text-[15px] font-black", text)}>
				Breathe · 1 min
			</span>
		</div>
	</Tile>
);

const Sos = () => (
	<Tile size="small" bg="#ff7c66" label="SOS widget">
		<div className="flex h-full flex-col">
			<div className="flex items-center justify-between">
				<Kicker className="text-[#3a0610]/70">Right now</Kicker>
				<Emo name="sos" size={24} />
			</div>
			<p className="mt-auto text-[22px] font-black leading-[1.05] text-[#3a0610]">
				Feeling
				<br />
				anxious?
			</p>
			<span className="mt-2 rounded-[12px] bg-white py-1.5 text-center text-[14px] font-black text-[#c73049] shadow-[0_3px_0_#f3c2ca]">
				Calm me down
			</span>
		</div>
	</Tile>
);

const Journal = () => (
	<Tile size="small" bg="#ffedc9" label="Journal prompt widget">
		<div className="flex h-full flex-col">
			<div className="flex items-center justify-between">
				<Kicker className="text-[#3b2a10]/55">Today's prompt</Kicker>
				<Emo name="nib" size={20} />
			</div>
			<p className="mt-1.5 text-[16px] font-black leading-tight text-[#3b2a10]">
				What's taking up space in your head?
			</p>
			<div className="mt-auto">
				<p className="text-[12px] font-semibold text-[#3b2a10]/50">
					Tap to write…
				</p>
				<div className="mt-1 border-t-[1.5px] border-dashed border-[#3b2a10]/30" />
			</div>
		</div>
	</Tile>
);

const Sleep = () => (
	<Tile size="small" bg="#20609d" label="Sleep widget">
		<Pal name="sleepy" size={44} className="absolute right-0 top-2" />
		<div className="relative flex h-full flex-col">
			<Kicker>Last night</Kicker>
			<span className={cn("text-[28px] font-black leading-tight", text)}>
				8h 00m
			</span>
			<div className="mt-auto flex h-8 items-end gap-[3px]">
				{[
					["Mo", 26],
					["Tu", 30],
					["We", 24],
					["Th", 18],
					["Fr", 28],
					["Sa", 22],
					["Su", 32],
				].map(([d, h], i) => (
					<span
						key={d}
						className="flex-1 rounded-[4px]"
						style={{
							height: h as number,
							background: i === 6 ? "#fff" : "rgba(255,255,255,.35)",
						}}
					/>
				))}
			</div>
			<span className="mt-1 text-[11px] font-bold text-white/85">
				About your usual
			</span>
		</div>
	</Tile>
);

const Guard = () => (
	<Tile size="small" bg="#20203a" label="Focus guard widget">
		<Pal
			name="flex"
			size={66}
			className="absolute bottom-[10px] right-[-4px]"
		/>
		<div className="relative flex h-full flex-col">
			<div className="flex items-center justify-between">
				<Kicker>Brain rot</Kicker>
				<Emo name="shield" size={20} />
			</div>
			<span className={cn("mt-0.5 text-[17px] font-black", text)}>
				3 apps paused
			</span>
			<span className={cn("text-[12px] font-bold", muted)}>2 beaten today</span>
			<div className="mt-auto flex items-baseline gap-[3px]">
				<span
					className="text-[28px] font-black leading-none"
					style={{ color: green }}
				>
					55
				</span>
				<span className={cn("text-[11px] font-bold", muted)}>reps</span>
			</div>
		</div>
	</Tile>
);

/* ---------- medium ---------- */

const faces = ["mood-1", "mood-2", "mood-3", "mood-4", "mood-5"];

const Mood = () => (
	<Tile size="medium" bg="#192639" label="Mood check-in widget">
		<div className="flex h-full flex-col justify-between">
			<div className="flex items-center gap-2">
				<Pal name="wave" size={58} className="-my-2" />
				<div className="min-w-0 flex-1">
					<p className={cn("text-[18px] font-black leading-tight", text)}>
						How's your head?
					</p>
					<p className={cn("text-[12px] font-semibold", muted)}>
						Tap a face, logged instantly
					</p>
				</div>
				<div className="flex items-center gap-0.5">
					<Emo name="fire" size={15} />
					<span className={cn("text-[13px] font-black", muted)}>6</span>
				</div>
			</div>
			<div className="flex gap-2">
				{faces.map((f) => (
					<span
						key={f}
						className="flex h-12 flex-1 items-center justify-center rounded-[15px] border border-white/10 bg-white/[0.08]"
					>
						<Emo name={f} size={32} />
					</span>
				))}
			</div>
		</div>
	</Tile>
);

const anchorsList = [
	{ e: "bubbles", l: "Slow breathing", done: true },
	{ e: "walk", l: "Walk", done: true },
	{ e: "sun", l: "Sunlight", done: false },
	{ e: "water", l: "Water", done: false },
];

const Anchors = () => (
	<Tile size="medium" bg="#10392f" label="Daily anchors widget">
		<div className="flex h-full flex-col justify-between">
			<div className="flex items-start justify-between">
				<div>
					<p className={cn("text-[18px] font-black leading-tight", text)}>
						Daily anchors
					</p>
					<p className={cn("text-[12px] font-semibold", muted)}>
						2 of 4 done · keep going
					</p>
				</div>
				<Pal name="flex" size={54} className="-my-2.5" />
			</div>
			<div className="flex gap-1.5">
				{anchorsList.map((a) => (
					<div
						key={a.l}
						className="flex flex-1 flex-col items-center gap-[3px]"
					>
						<span
							className="flex h-[46px] w-[50px] items-center justify-center rounded-[14px] border"
							style={{
								background: a.done ? green : "rgba(255,255,255,.08)",
								borderColor: a.done ? "#1d9f5d" : "rgba(255,255,255,.1)",
							}}
						>
							<Emo name={a.e} size={26} />
						</span>
						<span
							className={cn(
								"max-w-full truncate text-[10px] font-bold",
								a.done ? text : muted,
							)}
						>
							{a.done ? "✓ " : ""}
							{a.l}
						</span>
					</div>
				))}
			</div>
		</div>
	</Tile>
);

const week = [
	{ id: "Mo", d: "M", m: "mood-4", s: 30 },
	{ id: "Tu", d: "T", m: "mood-3", s: 24 },
	{ id: "We", d: "W", m: "mood-4", s: 34 },
	{ id: "Th", d: "T", m: "mood-2", s: 18 },
	{ id: "Fr", d: "F", m: "mood-3", s: 28 },
	{ id: "Sa", d: "S", m: "mood-5", s: 36 },
	{ id: "Su", d: "S", m: null, s: 0 },
];

const Week = () => (
	<Tile size="medium" bg="#192639" label="Mood week widget">
		<div className="flex h-full flex-col justify-between">
			<div className="flex items-center justify-between">
				<Kicker>Your week</Kicker>
				<span className={cn("text-[11px] font-bold", muted)}>Mood · sleep</span>
			</div>
			<div className="flex items-end">
				{week.map((w, i) => (
					<div
						key={w.id}
						className="flex flex-1 flex-col items-center gap-[5px]"
					>
						{w.m ? (
							<Emo name={w.m} size={28} />
						) : (
							<span className="h-7 w-7 rounded-full border-2 border-dashed border-white/40" />
						)}
						<span className="flex h-10 items-end">
							<span
								className="w-[13px] rounded-[5px]"
								style={{
									height: w.s || 6,
									background: w.s ? "#4aa8ff" : "rgba(255,255,255,.1)",
								}}
							/>
						</span>
						<span
							className={cn("text-[10px] font-bold", i === 6 ? text : muted)}
						>
							{w.d}
						</span>
					</div>
				))}
			</div>
		</div>
	</Tile>
);

const KitButton = ({
	emoji,
	title,
	color,
}: {
	emoji: string;
	title: string;
	color: string;
}) => (
	<span className="flex flex-1 items-center justify-center gap-1 rounded-[13px] bg-white py-1.5 shadow-[0_3px_0_rgba(255,255,255,.55)]">
		<Emo name={emoji} size={16} />
		<span className="text-[13px] font-black" style={{ color }}>
			{title}
		</span>
	</span>
);

const CalmKit = () => (
	<Tile size="medium" bg="#ee6475" label="Calm kit widget">
		<div className="flex h-full items-end gap-1">
			<div className="flex h-full flex-1 flex-col">
				<Kicker className="text-[#3a0610]/65">Calm kit</Kicker>
				<p className="text-[18px] font-black leading-tight text-[#3a0610]">
					What do you need?
				</p>
				<div className="mt-auto flex flex-col gap-1.5">
					<div className="flex gap-1.5">
						<KitButton emoji="sos" title="SOS" color="#c73049" />
						<KitButton emoji="bubbles" title="Breathe" color="#1d9f5d" />
					</div>
					<KitButton emoji="worry" title="Park a worry" color="#2479cc" />
				</div>
			</div>
			<Pal name="love" size={86} className="-mb-2.5 -mr-2" />
		</div>
	</Tile>
);

/** The wall of home-screen widgets. */
export const WidgetWall = () => (
	<div className="mx-auto flex max-w-[900px] flex-wrap justify-center gap-4 px-6">
		<Mood />
		<Streak />
		<Breathe />
		<Anchors />
		<Sos />
		<Journal />
		<Week />
		<Sleep />
		<Guard />
		<CalmKit />
	</div>
);

/* ---------- Live Activity ---------- */

const Clock = ({ size }: { size: number }) => (
	<span
		className="font-black tabular-nums"
		style={{ color: green, fontSize: size }}
	>
		1:24
	</span>
);

const Progress = ({ pct }: { pct: number }) => (
	<span className="block h-1.5 w-full overflow-hidden rounded-full bg-white/15">
		<span
			className="block h-full rounded-full"
			style={{ width: `${pct}%`, background: green }}
		/>
	</span>
);

export const LiveActivity = () => (
	<div className="flex flex-col items-center gap-5">
		{/* Lock Screen banner */}
		<div
			role="img"
			aria-label="Breathing Live Activity on the Lock Screen"
			className="flex w-[340px] max-w-full items-center gap-3 rounded-[24px] bg-[#0e1726] p-4 text-left"
		>
			<Pal name="breatheOut" size={64} />
			<div className="min-w-0 flex-1">
				<Kicker>Breathing</Kicker>
				<p
					className={cn("truncate text-[19px] font-black leading-tight", text)}
				>
					Slow breathing
				</p>
				<p className={cn("mb-1.5 truncate text-[12px] font-semibold", muted)}>
					Round 3 of 6
				</p>
				<Progress pct={55} />
			</div>
			<Clock size={26} />
		</div>
		{/* Dynamic Island, expanded */}
		<div
			role="img"
			aria-label="Breathing in the Dynamic Island, expanded"
			className="w-[340px] max-w-full rounded-[40px] bg-black p-4 text-left"
		>
			<div className="flex items-center gap-3">
				<Pal name="breatheIn" size={52} />
				<div className="min-w-0 flex-1">
					<p className={cn("truncate text-[16px] font-black", text)}>
						Slow breathing
					</p>
					<p className={cn("truncate text-[12px] font-semibold", muted)}>
						Round 3 of 6
					</p>
				</div>
				<Clock size={24} />
			</div>
			<div className="mt-3">
				<Progress pct={55} />
			</div>
		</div>
		{/* Dynamic Island, compact */}
		<div
			role="img"
			aria-label="Breathing in the Dynamic Island, compact"
			className="flex h-9 w-[190px] items-center justify-between rounded-full bg-black px-4"
		>
			<FiWind size={16} color={green} aria-hidden="true" />
			<Clock size={14} />
		</div>
	</div>
);

/* ---------- Controls ---------- */

const controls = [
	{ label: "SOS", icon: <FiAlertCircle size={28} />, tint: "#ff5d73" },
	{ label: "Breathe", icon: <FiWind size={28} />, tint: green },
	{ label: "Park a worry", icon: <FiCloud size={28} />, tint: "#4aa8ff" },
	{ label: "Focus guard", icon: <FiShield size={28} />, tint: "#ffa63d" },
];

export const Controls = () => (
	<div className="grid grid-cols-2 gap-3">
		{controls.map((c) => (
			<div
				key={c.label}
				role="img"
				aria-label={`${c.label} control`}
				className="flex h-[88px] w-[148px] flex-col items-start justify-between rounded-[22px] bg-[#2c2c30] p-3.5 text-left"
			>
				<span style={{ color: c.tint }}>{c.icon}</span>
				<span className="text-[13px] font-bold text-white/90">{c.label}</span>
			</div>
		))}
	</div>
);
