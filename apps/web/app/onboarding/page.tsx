'use client';

import {
	Button,
	BlurFade,
	BentoGrid,
	BentoCard,
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
	CardDescription,
} from '@repo/ui';
import Link from 'next/link';

export default function Page(): JSX.Element {
	return (
		<>
			<Card className="flex-1">
				<CardHeader>
					<CardTitle>픽벤토</CardTitle>
					<CardDescription>이런 어플입니다.</CardDescription>
				</CardHeader>
				<CardContent>이렇게하시죠</CardContent>
				<CardFooter>이렇게해요</CardFooter>
			</Card>
			<div className="flex flex-col gap-4">
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
						<Button
							asChild
							variant="outline"
							className="w-full rounded-2xl"
						>
							<Link href="/onboarding/profile/step-one">
								시작하기
							</Link>
						</Button>
					</BlurFade>
				</div>
			</div>
		</>
	);
}
