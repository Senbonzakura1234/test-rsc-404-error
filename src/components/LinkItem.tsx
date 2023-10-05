import type { Route } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

type LinkItemProps = {
	"aria-label": string;
	isActive: boolean;
	href: Route;
	children: ReactNode;
};

export default function LinkItem({
	isActive,
	children,
	...rest
}: LinkItemProps) {
	return (
		<Link
			className={`link gap-1 capitalize ${
				isActive
					? "no-animation pointer-events-none !cursor-default !no-underline"
					: "link-hover link-primary visited:link-accent"
			}`}
			prefetch={!isActive}
			role="navigation"
			{...rest}
		>
			{children}
		</Link>
	);
}
