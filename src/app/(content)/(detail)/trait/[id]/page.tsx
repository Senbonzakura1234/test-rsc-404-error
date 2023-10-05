import type { Metadata } from 'next';
import React from 'react';

export async function generateMetadata(): Promise<Metadata> {
	return {}
}

export default async function trait() {
	return <div>Trait Page</div>;
}
