'use client';

import { Button, Card } from '@repo/ui';
import Link from 'next/link';

export default function Page(): JSX.Element {
	return (
		<section className="w-full">
			<div className="flex h-[400px] flex-row gap-4 pb-4">
				<Card className="w-full flex-1">asd</Card>
				<Card className="flex-1">asd</Card>
			</div>
			<Button className="w-full" asChild>
				<Link href="/onboarding/bento">Next</Link>
			</Button>
			<Button className="w-full" asChild>
				<Link href="/onboarding">Back</Link>
			</Button>
		</section>
	);
}
