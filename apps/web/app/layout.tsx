import { PropsWithChildren } from 'react';
import { ThemeProvider, cn } from '@repo/ui';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@repo/ui/styles/globals.css';
import BottomNavigation from '@/components/core/BottomNavigation';
import TopNavigation from '@/components/core/TopNavigation';

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
					'min-h-screen bg-noise-light dark:bg-slate-700 font-sans antialiased',
					inter.className,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<TopNavigation />
					<main className="container mx-auto max-w-7xl pt-6 pb-6 px-6 flex-grow">
						{children}
					</main>
					<BottomNavigation />
				</ThemeProvider>
			</body>
		</html>
	);
}
