//packages/ui/components/ThemeToggle.tsx

'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@ui/components/ui/button';

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
		>
			<SunIcon className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
			<MoonIcon className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
