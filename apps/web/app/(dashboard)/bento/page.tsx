import { Button, ThemeToggle } from '@repo/ui';

export default function Page(): JSX.Element {
	return (
		<section>
			bento page
			<ThemeToggle />
			<Button variant="default">{'shadcn Button in Web!'}</Button>
		</section>
	);
}
