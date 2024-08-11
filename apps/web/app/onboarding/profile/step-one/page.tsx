'use client';

import { Badge, Button, Card } from '@repo/ui';
import Link from 'next/link';

export default function Page(): JSX.Element {
	return (
		<section className="flex w-full flex-col gap-4">
			<div className="text-2xl font-bold">
				<span>당신의 직업은 무엇인가요?</span>
			</div>
			<div className="flex flex-col justify-center gap-2">
				<Badge
					size="lg"
					className="justify-center text-center align-middle"
				>
					<span className="text-lg font-medium">개발자</span>
				</Badge>
				<Badge
					size="lg"
					className="justify-center text-center align-middle"
				>
					<span className="text-lg font-medium">디자이너</span>
				</Badge>
				<Badge
					size="lg"
					className="justify-center text-center align-middle"
				>
					<span className="text-lg font-medium">PO</span>
				</Badge>
				<Badge
					size="lg"
					className="justify-center text-center align-middle"
				>
					<span className="text-lg font-medium">PM</span>
				</Badge>
				<Badge
					size="lg"
					className="justify-center text-center align-middle"
				>
					<span className="text-lg font-medium">서비스 기획자</span>
				</Badge>
			</div>
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
