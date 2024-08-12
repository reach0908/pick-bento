'use client';

import {
	Badge,
	Button,
	Card,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@repo/ui';
import Link from 'next/link';

export default function Page(): JSX.Element {
	return (
		<section className="flex w-full flex-col gap-4">
			<Card>asdasd</Card>
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
			<div className="flex flex-col justify-center gap-2">
				<Select>
					<SelectTrigger className="w-full rounded-lg">
						<SelectValue placeholder="Select your job" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">Light</SelectItem>
						<SelectItem value="dark">Dark</SelectItem>
						<SelectItem value="system">System</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex w-full flex-col content-center justify-center align-middle">
				<Button
					className="w-[200px] rounded-2xl"
					asChild
					variant="outline"
				>
					<Link href="/onboarding/profile/step-two">Next</Link>
				</Button>
				<Button className="w-full" asChild variant="link">
					<Link href="/onboarding">Back</Link>
				</Button>
			</div>
		</section>
	);
}
