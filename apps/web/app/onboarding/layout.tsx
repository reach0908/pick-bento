'use client';

import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<div>
			<main className="container mx-auto flex min-h-dvh flex-col items-center justify-center align-middle">
				{children}
			</main>
		</div>
	);
}
