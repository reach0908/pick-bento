'use client';

import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<main className="container mx-auto flex min-h-dvh flex-col py-48">
			<section className="flex flex-1 flex-col justify-between gap-8">
				{children}
			</section>
		</main>
	);
}
