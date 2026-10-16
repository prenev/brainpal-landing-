"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { site } from "@/config";

const INTERESTS = [
	"Mood diary",
	"Breathing & calm",
	"Worry time",
	"Journal",
	"Sleep",
	"Focus timer",
];
const DEVICES = ["iPhone", "Android", "Both", "Other"];

const schema = z.object({
	email: z.email("Enter a valid email address."),
	name: z.string().max(80),
	interests: z.array(z.string()),
	device: z.string(),
	notes: z.string().max(500, "Please keep it under 500 characters."),
	consent: z
		.boolean()
		.refine((v) => v, "Please tick this so we can email you."),
	botcheck: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const field =
	"w-full rounded-xl border border-white/15 bg-ink px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-mint focus:outline-none";
const label = "mb-2 block text-sm font-medium text-white";
const chip =
	"inline-flex cursor-pointer select-none items-center rounded-full border border-white/20 px-4 py-2 text-sm text-white transition-colors peer-checked:border-mint peer-checked:bg-mint peer-checked:text-ink peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-mint";

const InterestForm = () => {
	const [state, setState] = useState<"idle" | "sent" | "error">("idle");
	const [errorMsg, setErrorMsg] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: "",
			name: "",
			interests: [],
			device: "iPhone",
			notes: "",
			consent: false,
			botcheck: false,
		},
	});

	const onSubmit = async (v: FormValues) => {
		if (v.botcheck) {
			setState("sent");
			return;
		}
		if (!accessKey) {
			setErrorMsg("Sign-ups aren't switched on yet. Please check back soon.");
			setState("error");
			return;
		}
		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					access_key: accessKey,
					subject: `Brain Pal interest: ${v.email}`,
					from_name: "Brain Pal website",
					email: v.email,
					name: v.name || "(not given)",
					interests: v.interests.join(", ") || "(none picked)",
					device: v.device,
					notes: v.notes || "(none)",
				}),
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok || data.success === false) throw new Error(data.message);
			setState("sent");
		} catch {
			setErrorMsg(
				`Something went wrong. Please try again, or email ${site.contactEmail}.`,
			);
			setState("error");
		}
	};

	if (state === "sent") {
		return (
			<div
				role="status"
				className="flex flex-col items-center rounded-3xl bg-ink-2 px-8 py-14 text-center"
			>
				<img
					src="/assets/pal/celebrate.png"
					alt=""
					className="mb-4 h-32 w-32 object-contain"
				/>
				<h3 className="text-3xl font-semibold tracking-tight text-white">
					You're on the list.
				</h3>
				<p className="mt-3 max-w-sm text-lg text-[#a1a1a6]">
					Thank you. We'll email you when Brain Pal is ready, and only then.
				</p>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className="rounded-3xl bg-ink-2 p-6 text-left md:p-8"
		>
			<input
				type="checkbox"
				tabIndex={-1}
				autoComplete="off"
				aria-hidden="true"
				className="hidden"
				{...register("botcheck")}
			/>

			<div className="mb-5">
				<label htmlFor="email" className={label}>
					Email
				</label>
				<input
					id="email"
					type="email"
					autoComplete="email"
					placeholder="you@example.com"
					aria-invalid={!!errors.email}
					aria-describedby={errors.email ? "email-err" : undefined}
					className={field}
					{...register("email")}
				/>
				{errors.email && (
					<p id="email-err" className="mt-2 text-sm text-[#ff8f8f]">
						{errors.email.message}
					</p>
				)}
			</div>

			<div className="mb-5">
				<label htmlFor="name" className={label}>
					First name <span className="text-white/50">(optional)</span>
				</label>
				<input
					id="name"
					autoComplete="given-name"
					className={field}
					{...register("name")}
				/>
			</div>

			<fieldset className="mb-5">
				<legend className={label}>What are you most interested in?</legend>
				<div className="flex flex-wrap gap-2">
					{INTERESTS.map((i) => (
						<label key={i} className="relative">
							<input
								type="checkbox"
								value={i}
								className="peer sr-only"
								{...register("interests")}
							/>
							<span className={chip}>{i}</span>
						</label>
					))}
				</div>
			</fieldset>

			<fieldset className="mb-5">
				<legend className={label}>Your phone</legend>
				<div className="flex flex-wrap gap-2">
					{DEVICES.map((d) => (
						<label key={d} className="relative">
							<input
								type="radio"
								value={d}
								className="peer sr-only"
								{...register("device")}
							/>
							<span className={chip}>{d}</span>
						</label>
					))}
				</div>
			</fieldset>

			<div className="mb-5">
				<label htmlFor="notes" className={label}>
					Anything you'd like it to do?{" "}
					<span className="text-white/50">
						(optional, please don't share health details)
					</span>
				</label>
				<textarea
					id="notes"
					rows={3}
					className={field}
					aria-invalid={!!errors.notes}
					{...register("notes")}
				/>
				{errors.notes && (
					<p className="mt-2 text-sm text-[#ff8f8f]">{errors.notes.message}</p>
				)}
			</div>

			<div className="mb-6">
				<label className="flex cursor-pointer items-start gap-3 text-sm text-[#a1a1a6]">
					<input
						type="checkbox"
						className="mt-0.5 h-5 w-5 shrink-0 accent-[#34d17a]"
						aria-invalid={!!errors.consent}
						{...register("consent")}
					/>
					<span>
						Email me when Brain Pal launches. I'll only get launch news, and I
						can ask to be removed any time.
					</span>
				</label>
				{errors.consent && (
					<p className="mt-2 text-sm text-[#ff8f8f]">
						{errors.consent.message}
					</p>
				)}
			</div>

			<button
				type="submit"
				disabled={isSubmitting}
				className="w-full rounded-full bg-mint px-7 py-3.5 text-[17px] font-semibold text-ink transition-opacity hover:opacity-85 disabled:opacity-50"
			>
				{isSubmitting ? "Sending…" : "Notify me"}
			</button>

			{state === "error" && (
				<p role="alert" className="mt-4 text-sm text-[#ff8f8f]">
					{errorMsg}
				</p>
			)}
		</form>
	);
};

export default InterestForm;
