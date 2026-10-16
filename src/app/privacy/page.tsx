import { LegalPage, legalMetadata } from "@/lib/legalPage";

export const metadata = legalMetadata("privacy");

export default function Page() {
	return <LegalPage id="privacy" />;
}
