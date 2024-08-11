'use client';

import {
	Badge,
	Button,
	RadioGroup,
	RadioGroupItem,
	Label,
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from '@repo/ui';
import Link from 'next/link';

export default function Page(): JSX.Element {
	return (
		<section className="flex w-full flex-col gap-4">
			<span className="text-2xl font-bold">마지막 질문이에요!</span>
			<Card>
				<CardHeader>
					<CardTitle>
						주로 사용하시는 디지털 기기가 무엇인가요?
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col justify-center gap-2">
						<RadioGroup defaultValue="option-one">
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="option-one"
									id="option-one"
								/>
								<Label htmlFor="option-one">Option One</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="option-two"
									id="option-two"
								/>
								<Label htmlFor="option-two">Option Two</Label>
							</div>
						</RadioGroup>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>
						주로 사용하시는 디지털 기기가 무엇인가요?
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col justify-center gap-2">
						<RadioGroup defaultValue="option-one">
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="option-one"
									id="option-one"
								/>
								<Label htmlFor="option-one">Option One</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="option-two"
									id="option-two"
								/>
								<Label htmlFor="option-two">Option Two</Label>
							</div>
						</RadioGroup>
					</div>
				</CardContent>
			</Card>
			<div>
				<Button className="w-full" asChild variant="outline">
					<Link href="/">Next</Link>
				</Button>
				<Button className="w-full" asChild variant="link">
					<Link href="/onboarding/profile/step-two">Back</Link>
				</Button>
			</div>
		</section>
	);
}
