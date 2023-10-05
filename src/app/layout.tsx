import "./globals.css";

import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
	return {
		robots: "all",
		viewport: "width=device-width, initial-scale=1.0",
	};
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div>
					Root Layout
					<Link aria-label="Go to homepage" href="/">
						Home Page
					</Link>
				</div>
				{children}
			</body>
		</html>
	);
}
