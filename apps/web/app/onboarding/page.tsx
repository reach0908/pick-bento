'use client';

import { Button, BlurFade, BentoGrid, BentoCard } from '@repo/ui';
import Link from 'next/link';

export default function Page(): JSX.Element {
	return (
		<section className="flex w-full flex-col justify-between gap-4">
			<div>
				<BlurFade delay={0.25} inView>
					<BentoGrid className="grid-cols-2">
						<BentoCard
							Icon="asd"
							name="Asd"
							href=""
							cta="Learn more"
							className="col-span-2"
							description="asd"
							background={<div>asd</div>}
						/>
						<BentoCard
							Icon="asd"
							name="Asd"
							href=""
							cta="Learn more"
							className="col-span-1"
							description="asd"
							background={<div>asd</div>}
						/>
						<BentoCard
							Icon="asd"
							name="Asd"
							href=""
							cta="Learn more"
							className="col-span-1"
							description="asd"
							background={<div>asd</div>}
						/>
					</BentoGrid>
				</BlurFade>
			</div>
			<div>
				<BlurFade delay={0.25 * 2} inView>
					<span className="text-5xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
						어서오세요 👋
					</span>
				</BlurFade>
				<BlurFade delay={0.25 * 3} inView>
					<span className="text-pretty text-2xl tracking-tighter sm:text-3xl xl:text-4xl/none">
						나 자신의 설정을 해볼까요?
					</span>
				</BlurFade>
			</div>
			<div>
				<BlurFade delay={0.25 * 4} inView>
					<Button asChild variant="outline">
						<Link href="/onboarding/profile/step-one">
							시작하기
						</Link>
					</Button>
				</BlurFade>
			</div>
		</section>
	);
}
