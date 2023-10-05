import PageBanner from "@root/components/PageBanner";
import React from "react";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			Home Layout
			<PageBanner />
			{children}
		</div>
	);
}
