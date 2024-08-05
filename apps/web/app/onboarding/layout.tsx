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
	return <div>{children}</div>;
}
