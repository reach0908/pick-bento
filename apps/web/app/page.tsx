import { Button, ThemeToggle } from '@repo/ui';

export default function Page(): JSX.Element {
	return (
		<main>
			<ThemeToggle />
			<Button>{'shadcn Button in Web!'}</Button>
		</main>
	);
}
