'use client';

import { Button, BlurFade } from '@repo/ui';
import Link from 'next/link';

export default function Page(): JSX.Element {
	return (
		<section className="w-full">
			<BlurFade delay={0.25} inView>
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
					Hello World 👋
				</h2>
			</BlurFade>
			<BlurFade delay={0.25 * 2} inView>
				<span className="text-pretty text-xl tracking-tighter sm:text-3xl xl:text-4xl/none">
					Nice to meet you
				</span>
			</BlurFade>
			<Button className="w-full" asChild>
				<Link href="/onboarding/profile">Next</Link>
			</Button>
		</section>
	);
}
