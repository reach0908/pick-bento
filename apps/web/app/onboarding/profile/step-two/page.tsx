'use client';

import { z } from 'zod';

import { Button, BlurFade } from '@repo/ui';
import Link from 'next/link';
import { useState } from 'react';

export default function Page(): JSX.Element {
	const [selectedOptions, setSelectedOptions] = useState([]);

	const hobbies = [
		'📚 Reading',
		'🍳 Cooking',
		'🌱 Gardening',
		'🥾 Hiking',
		'🎨 Painting',
		'📷 Photography',
		'🚲 Cycling',
		'🧘‍♀️ Yoga',
		'✈️ Traveling',
		'🍞 Baking',
	];

	const handleOptionClick = (option) => {
		if (selectedOptions.includes(option)) {
			setSelectedOptions(selectedOptions.filter((o) => o !== option));
		} else {
			if (selectedOptions.length < 5) {
				setSelectedOptions([...selectedOptions, option]);
			}
		}
	};

	return (
		<>
			<div className="flex flex-col">
				<header className="absoulte top-0 z-10 w-full shadow-md">
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
				<section className="h-80 overflow-auto p-4">
					<div className="grid grid-cols-2 gap-4">
						{hobbies.map((hobby) => (
							<button
								key={hobby}
								onClick={() => handleOptionClick(hobby)}
								className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
									selectedOptions.includes(hobby)
										? 'border-2 border-primary bg-primary text-primary-foreground'
										: 'border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground'
								}`}
							>
								{hobby}
							</button>
						))}
					</div>
				</section>
				{/** Footer */}
				<footer className="absoulte bottom-0 z-10 w-full">
					<Button
						className="w-full rounded-2xl"
						asChild
						variant="outline"
					>
						<Link href="/">Next</Link>
					</Button>
					<Button className="w-full" asChild variant="link">
						<Link href="/onboarding">Back</Link>
					</Button>
				</footer>
			</div>
		</>
	);
}
