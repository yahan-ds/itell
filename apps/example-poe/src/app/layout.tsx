import { Inter as FontSans, Roboto_Slab as FontSerif } from "next/font/google";
import "@/styles/globals.css";

import AppProvider from "@/components/providers";
import ShowToast from "@/components/toast";
import { Suspense } from "react";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { cn } from "@itell/core/utils";
import { Metadata } from "next";
import { getSiteConfig } from "@/lib/config";

type SiteConfig = {
	title: string;
	description: string;
	latex: boolean;
};

export async function generateMetadata(): Promise<Metadata> {
	const siteConfig = await getSiteConfig();
	return {
		title: {
			default: siteConfig.title,
			template: `%s | ${siteConfig.title}`,
		},
		description: siteConfig.description,
	};
}

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

const fontSerif = FontSerif({
	subsets: ["latin"],
	variable: "--font-serif",
});

export default async function RootLayout({
	children,
}: { children: React.ReactNode }) {
	const { latex, favicon } = await getSiteConfig();

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" type="image/x-icon" href={favicon || "/favicon.ico"} />
				{latex && (
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
						integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
						crossOrigin="anonymous"
					/>
				)}
			</head>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
					fontSerif.variable,
				)}
			>
				<AppProvider>
					<Suspense fallback={null}>
						<ShowToast />
					</Suspense>
					<TailwindIndicator />
					<main> {children}</main>
				</AppProvider>
			</body>
		</html>
	);
}
