
import PageBanner from '@root/components/PageBanner';
import React from 'react';

export default function ContentLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			Content Layout
			<PageBanner />
			{children}
		</div>
	);
}
