import { LegalPage, legalMetadata } from "@/lib/legalPage";

export const metadata = legalMetadata("terms");

export default function Page() {
	return <LegalPage id="terms" />;
}
