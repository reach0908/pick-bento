'use client';

import {
	zodResolver,
	Button,
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	ChevronsUpDownIcon,
	Command,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CheckIcon,
	cn,
	Card,
	CardContent,
	UserIcon,
	CardTitle,
} from '@repo/ui';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Link from 'next/link';
import { useState } from 'react';

export default function Page(): JSX.Element {
	const [selectedOption, setSelectedOption] = useState(null);
	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};

	return (
		<section className="flex w-full flex-col gap-4">
			<div className="space-y-2 text-center">
				<h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
					Choose Your IT Career Path
				</h1>
				<p className="text-muted-foreground">
					Select the IT field that interests you the most.
				</p>
			</div>
			<div className="grid grid-cols-1 gap-4">
				<div
					className={`card rounded-md border p-4 transition-colors hover:bg-accent hover:text-accent-foreground ${
						selectedOption === 'software-development'
							? 'bg-accent text-accent-foreground'
							: ''
					}`}
					onClick={() => handleOptionClick('software-development')}
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
					onClick={() => handleOptionClick('network-administration')}
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
					onClick={() => handleOptionClick('database-administration')}
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
								Protect computer systems and networks from cyber
								threats.
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
								Manage and maintain cloud-based infrastructure
								and services.
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
								Collect, analyze, and interpret data to drive
								business decisions.
							</p>
						</div>
					</div>
				</div>
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
