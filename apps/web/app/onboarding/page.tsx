import { Button, ThemeToggle } from '@repo/ui';

export default function Page(): JSX.Element {
	return (
		<div>
			<ThemeToggle />
			<Button>{'shadcn Button in Web!'}</Button>
		</div>
	);
}
