import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@repo/ui/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Pick Bento',
	description: 'Pick Bento for check people usign app',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<main className="container mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 pb-6 pt-6 align-middle">
			{children}
		</main>
	);
}
