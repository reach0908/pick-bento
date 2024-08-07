'use client';

import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<div>
			<main className="container mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 pb-6 pt-6 align-middle">
				{children}
			</main>
		</div>
	);
}
