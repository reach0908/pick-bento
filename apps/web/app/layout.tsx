import { PropsWithChildren } from 'react';
import { ThemeProvider, cn } from '@repo/ui';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@repo/ui/styles/globals.css';
import BottomNavigation from '@/components/core/BottomNavigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Pick Bento',
	description: 'Pick Bento for check people usign app',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en" className="scroll-smooth">
			<head />
			<body
				className={cn(
					'bg-noise-light min-h-screen font-sans antialiased dark:bg-slate-700',
					inter.className,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<main className="container mx-auto max-w-7xl flex-grow px-6 pb-6 pt-6">
						{children}
					</main>
					<BottomNavigation />
				</ThemeProvider>
			</body>
		</html>
	);
}
