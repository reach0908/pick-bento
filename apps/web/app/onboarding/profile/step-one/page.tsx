'use client';

import { Badge, Button, Card } from '@repo/ui';
import Link from 'next/link';

export default function Page(): JSX.Element {
	return (
		<section className="flex w-full flex-col gap-4">
			<div className="text-xl font-bold">
				<span>당신의 성별은 무엇인가요?</span>
			</div>
			<div className="flex gap-4">
				<Badge
					size="lg"
					className="flex-1 justify-center text-center align-middle"
				>
					<span className="text-lg font-medium">남자</span>
				</Badge>
				<Badge
					size="lg"
					className="flex-1 justify-center text-center align-middle"
				>
					<span className="text-lg font-medium">여자</span>
				</Badge>
			</div>
			<div className="text-xl font-bold">
				<span>당신의 직업은 무엇인가요?</span>
			</div>
			<div className="flex flex-col justify-center gap-2"></div>
			<div>
				<Button className="w-full" asChild variant="outline">
					<Link href="/onboarding/profile/step-two">Next</Link>
				</Button>
				<Button className="w-full" asChild variant="link">
					<Link href="/onboarding">Back</Link>
				</Button>
			</div>
		</section>
	);
}
