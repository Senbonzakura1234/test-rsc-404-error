import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = { viewport: "width=1024" };

export default function ApiDocLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			APIDoc Layout
			{children}
		</div>
	);
}
