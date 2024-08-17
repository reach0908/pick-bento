import { PropsWithChildren } from 'react';
import { ThemeProvider, cn } from '@repo/ui';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@repo/ui/styles/globals.css';
import ShaderGradientEffect from '@/components/core/ShaderGradientEffect';

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
					'bg-noise-light min-h-dvh font-sans antialiased dark:bg-slate-700',
					inter.className,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<ShaderGradientEffect />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
