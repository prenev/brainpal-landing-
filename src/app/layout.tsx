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
		default: site.name,
		template: `%s — ${site.name}`,
	},
	description: site.description,
	keywords: [...site.keywords],
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: site.url,
		siteName: site.name,
		title: site.name,
		description: site.description,
		images: [{ url: "/og.png", width: 1200, height: 630 }],
	},
	twitter: {
		card: "summary_large_image",
		title: site.name,
		description: site.description,
		images: ["/og.png"],
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
				<Footer name={site.name} logo={site.logo} />
				<BackToTop />
			</body>
		</html>
	);
}
