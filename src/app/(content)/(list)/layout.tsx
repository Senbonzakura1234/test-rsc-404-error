import React from "react";

export default function ListLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			List Layout
			{children}
		</div>
	);
}
