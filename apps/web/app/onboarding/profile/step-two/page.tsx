'use client';

import { Badge, Button } from '@repo/ui';
import Link from 'next/link';

const list = [
	'사진',
	'영화',
	'음악감상',
	'애니메이션',
	'생산성',
	'게임',
	'러닝',
	'헬스',
	'공연',
	'콘서트',
	'위스키',
	'노래',
	'사이드프로젝트',
	'여행',
	'자기계발',
];

export default function Page(): JSX.Element {
	return (
		<section className="flex w-full flex-col gap-4">
			<div className="text-2xl font-bold">
				<span>당신은 어떤 것을 좋아하나요??</span>
			</div>
			<div className="flex flex-wrap justify-center gap-2">
				{list.map((item, index) => (
					<Badge className="" key={`${index}-${item}`}>
						<span className="font-medium">{item}</span>
					</Badge>
				))}
			</div>
			<div>
				<Button className="w-full" asChild variant="outline">
					<Link href="/onboarding/profile/step-three">Next</Link>
				</Button>
				<Button className="w-full" asChild variant="link">
					<Link href="/onboarding/profile/step-one">Back</Link>
				</Button>
			</div>
		</section>
	);
}
