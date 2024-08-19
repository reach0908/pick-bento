'use client';

import { BlurFade, Button, UserIcon } from '@repo/ui';

import Link from 'next/link';
import { useState } from 'react';

export default function Page(): JSX.Element {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};

	return (
		<div className="flex flex-col">
			<header className="absoulte top-0 z-10 w-full bg-white shadow-md">
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
			</header>
			<div className="h-96 overflow-auto p-4">
				{/** TODO(지노): 스크롤리스트로 리팩토링 */}
				<div className="grid grid-cols-1 gap-4">
					<div
						className={`card rounded-md border p-4 transition-colors hover:bg-accent hover:text-accent-foreground ${
							selectedOption === 'software-development'
								? 'bg-accent text-accent-foreground'
								: ''
						}`}
						onClick={() =>
							handleOptionClick('software-development')
						}
					>
						<div className="flex items-center gap-4">
							<UserIcon className="h-8 w-8 text-primary" />
							<div>
								<h3 className="text-base font-semibold">
									Software Development
								</h3>
								<p className="text-sm text-muted-foreground">
									Design, develop, and maintain software
									applications.
								</p>
							</div>
						</div>
					</div>
					<div
						className={`card rounded-md border p-4 transition-colors hover:bg-accent hover:text-accent-foreground ${
							selectedOption === 'network-administration'
								? 'bg-accent text-accent-foreground'
								: ''
						}`}
						onClick={() =>
							handleOptionClick('network-administration')
						}
					>
						<div className="flex items-center gap-4">
							<UserIcon className="h-8 w-8 text-primary" />
							<div>
								<h3 className="text-base font-semibold">
									Network Administration
								</h3>
								<p className="text-sm text-muted-foreground">
									Manage and maintain computer networks and
									systems.
								</p>
							</div>
						</div>
					</div>
					<div
						className={`card rounded-md border p-4 transition-colors hover:bg-accent hover:text-accent-foreground ${
							selectedOption === 'database-administration'
								? 'bg-accent text-accent-foreground'
								: ''
						}`}
						onClick={() =>
							handleOptionClick('database-administration')
						}
					>
						<div className="flex items-center gap-4">
							<UserIcon className="h-8 w-8 text-primary" />
							<div>
								<h3 className="text-base font-semibold">
									Database Administration
								</h3>
								<p className="text-sm text-muted-foreground">
									Design, implement, and maintain database
									systems.
								</p>
							</div>
						</div>
					</div>
					<div
						className={`card rounded-md border p-4 transition-colors hover:bg-accent hover:text-accent-foreground ${
							selectedOption === 'cybersecurity'
								? 'bg-accent text-accent-foreground'
								: ''
						}`}
						onClick={() => handleOptionClick('cybersecurity')}
					>
						<div className="flex items-center gap-4">
							<UserIcon className="h-8 w-8 text-primary" />
							<div>
								<h3 className="text-base font-semibold">
									Cybersecurity
								</h3>
								<p className="text-sm text-muted-foreground">
									Protect computer systems and networks from
									cyber threats.
								</p>
							</div>
						</div>
					</div>
					<div
						className={`card rounded-md border p-4 transition-colors hover:bg-accent hover:text-accent-foreground ${
							selectedOption === 'cloud-computing'
								? 'bg-accent text-accent-foreground'
								: ''
						}`}
						onClick={() => handleOptionClick('cloud-computing')}
					>
						<div className="flex items-center gap-4">
							<UserIcon className="h-8 w-8 text-primary" />
							<div>
								<h3 className="text-base font-semibold">
									Cloud Computing
								</h3>
								<p className="text-sm text-muted-foreground">
									Manage and maintain cloud-based
									infrastructure and services.
								</p>
							</div>
						</div>
					</div>
					<div
						className={`card rounded-md border p-4 transition-colors hover:bg-accent hover:text-accent-foreground ${
							selectedOption === 'data-analytics'
								? 'bg-accent text-accent-foreground'
								: ''
						}`}
						onClick={() => handleOptionClick('data-analytics')}
					>
						<div className="flex items-center gap-4">
							<UserIcon className="h-8 w-8 text-primary" />
							<div>
								<h3 className="text-base font-semibold">
									Data Analytics
								</h3>
								<p className="text-sm text-muted-foreground">
									Collect, analyze, and interpret data to
									drive business decisions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="absoulte bottom-0 z-10 w-full">
				<Button
					className="w-full rounded-2xl"
					asChild
					variant="outline"
				>
					<Link href="/onboarding/profile/step-two">Next</Link>
				</Button>
				<Button className="w-full" asChild variant="link">
					<Link href="/onboarding">Back</Link>
				</Button>
			</div>
		</div>
	);
}
