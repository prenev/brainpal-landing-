import type { Metadata, Viewport } from "next";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { site } from "@/config";
import "@fontsource-variable/nunito";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: site.title,
		template: `%s | ${site.shortName}`,
	},
	description: site.description,
	applicationName: site.shortName,
	keywords: [...site.keywords],
	authors: [{ name: site.companyName, url: site.url }],
	creator: site.companyName,
	publisher: site.companyName,
	category: "health",
	alternates: { canonical: "/" },
	manifest: "/manifest.json",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		url: site.url,
		siteName: site.name,
		locale: site.locale,
		title: site.title,
		description: site.description,
		images: [site.ogImage],
	},
	twitter: {
		card: "summary_large_image",
		title: site.title,
		description: site.description,
		images: [{ url: site.ogImage.url, alt: site.ogImage.alt }],
	},
	formatDetection: { telephone: false, email: false, address: false },
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
		other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
			? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
			: undefined,
	},
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/icon-32.png", type: "image/png", sizes: "32x32" },
			{ url: "/icon-16.png", type: "image/png", sizes: "16x16" },
		],
		apple: "/apple-touch-icon.png",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#101b34" },
		{ media: "(prefers-color-scheme: dark)", color: "#101b34" },
	],
};

const themeScript = `(function(){
  var t=localStorage.getItem('theme')||'system';
  var r=document.documentElement;
  r.classList.remove('light','dark');
  if(t==='system'){
    r.classList.add(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
  }else{
    r.classList.add(t);
  }
  if(!localStorage.getItem('theme'))localStorage.setItem('theme','system');
})();`;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
			</head>
			<body className="bg-gray-50 text-gray-900 dark:bg-[#060606] dark:text-white">
				<Nav />
				{children}
				<Footer name={site.shortName} logo={site.logo} />
				<BackToTop />
			</body>
		</html>
	);
}
