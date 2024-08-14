'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
	zodResolver,
	Button,
	Checkbox,
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormDescription,
	FormControl,
	FormMessage,
	Card,
} from '@repo/ui';
import Link from 'next/link';
import { useState } from 'react';

const items = [
	{
		id: 'recents',
		label: 'Recents',
	},
	{
		id: 'home',
		label: 'Home',
	},
	{
		id: 'applications',
		label: 'Applications',
	},
	{
		id: 'desktop',
		label: 'Desktop',
	},
	{
		id: 'downloads',
		label: 'Downloads',
	},
	{
		id: 'documents',
		label: 'Documents',
	},
] as const;

const FormSchema = z.object({
	items: z.array(z.string()).refine((value) => value.some((item) => item), {
		message: 'You have to select at least one item.',
	}),
});

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
		<section className="flex w-full flex-col gap-4">
			<div className="w-full max-w-md space-y-6">
				<div className="text-center">
					<h1 className="text-3xl font-bold text-foreground">
						Select Your Interests
					</h1>
					<p className="mt-2 text-muted-foreground">
						Choose up to 5 of your favorite hobbies or interests.
					</p>
				</div>
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
				<div>
					<Button className="w-full" asChild variant="outline">
						<Link href="/">Next</Link>
					</Button>
					<Button className="w-full" asChild variant="link">
						<Link href="/onboarding/step-one">Back</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
