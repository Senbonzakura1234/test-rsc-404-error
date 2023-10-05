"use client";

import Link from "next/link";
import React from "react";

export default function Breadcrumbs() {
	return (
		<Link aria-label="Go to homepage" href="/">
			Home Page
		</Link>
	);
}
