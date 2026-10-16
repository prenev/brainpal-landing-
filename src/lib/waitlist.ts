// Posts a waitlist sign-up straight to Supabase (table `waitlist_signups`, see the brain-pal repo).
// The publishable key is public by design: row-level security lets the `anon` role only INSERT.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";

export interface SignupInput {
	email: string;
	name: string;
	interests: string[];
	device: string;
	notes: string;
}

export type SignupResult = "ok" | "not-configured" | "error";

export async function joinWaitlist(input: SignupInput): Promise<SignupResult> {
	if (!url || !key) return "not-configured";
	try {
		const res = await fetch(`${url}/rest/v1/waitlist_signups`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				apikey: key,
				Authorization: `Bearer ${key}`,
				Prefer: "return=minimal",
			},
			body: JSON.stringify({
				email: input.email.trim().toLowerCase(),
				name: input.name.trim() || null,
				interests: input.interests,
				device: input.device,
				notes: input.notes.trim() || null,
				consent: true,
			}),
		});
		if (res.ok) return "ok";
		// Already on the list (unique email): treat as success so the form never reveals who has signed up.
		if (res.status === 409) {
			const body = await res.json().catch(() => ({}));
			if (body?.code === "23505") return "ok";
		}
		return "error";
	} catch {
		return "error";
	}
}
