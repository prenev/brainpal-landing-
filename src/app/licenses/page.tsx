import { LegalPage, legalMetadata } from "@/lib/legalPage";

export const metadata = legalMetadata("licenses");

export default function Page() {
	return <LegalPage id="licenses" />;
}
