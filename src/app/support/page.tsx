import { LegalPage, legalMetadata } from "@/lib/legalPage";

export const metadata = legalMetadata("support");

export default function Page() {
	return <LegalPage id="support" />;
}
