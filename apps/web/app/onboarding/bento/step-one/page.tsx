'use client';

import { Button } from '@repo/ui';
import Link from 'next/link';

export default function Page(): JSX.Element {
	return (
		<section className="w-full">
			첫번째 도시락을 만들어볼까요?
			<Button className="w-full" asChild>
				<Link href="/onboarding/bento/make">Next</Link>
			</Button>
			<Button className="w-full" asChild>
				<Link href="/onboarding/profile">Back</Link>
			</Button>
		</section>
	);
}
