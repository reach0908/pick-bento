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
	CardTitle,
} from '@repo/ui';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Link from 'next/link';

const languages = [
	{ label: 'English', value: 'en' },
	{ label: 'French', value: 'fr' },
	{ label: 'German', value: 'de' },
	{ label: 'Spanish', value: 'es' },
	{ label: 'Portuguese', value: 'pt' },
	{ label: 'Russian', value: 'ru' },
	{ label: 'Japanese', value: 'ja' },
	{ label: 'Korean', value: 'ko' },
	{ label: 'Chinese', value: 'zh' },
	{ label: 'Portuguese', value: 'pt' },
	{ label: 'Russian', value: 'ru' },
	{ label: 'Japanese', value: 'ja' },
	{ label: 'Korean', value: 'ko' },
	{ label: 'Chinese', value: 'zh' },
] as const;

const FormSchema = z.object({
	language: z.string({
		required_error: 'Please select a language.',
	}),
});

type AppearanceFormValues = z.infer<typeof FormSchema>;

const defaultValues: Partial<AppearanceFormValues> = {
	language: 'en',
};

export default function Page(): JSX.Element {
	const form = useForm<AppearanceFormValues>({
		resolver: zodResolver(FormSchema),
		defaultValues,
	});

	const onSubmit = (data: AppearanceFormValues) => {};

	return (
		<section className="flex w-full flex-col gap-4">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<Card>
						<FormField
							control={form.control}
							name="language"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<CardTitle>
										<div className="mb-4">
											<FormLabel className="text-base">
												당신의 직업은 뭔가요?
											</FormLabel>
											<FormDescription>
												Select the items you want to
												display in the sidebar.
											</FormDescription>
										</div>
									</CardTitle>
									<CardContent>
										<FormControl>
											<span>{field.value}</span>
										</FormControl>
										<Command>
											<CommandInput placeholder="Search language..." />
											<CommandList>
												<CommandEmpty>
													No language found.
												</CommandEmpty>
												<CommandGroup>
													{languages.map(
														(language) => (
															<CommandItem
																value={
																	language.label
																}
																key={
																	language.value
																}
																onSelect={() => {
																	form.setValue(
																		'language',
																		language.value,
																	);
																}}
															>
																<CheckIcon
																	className={cn(
																		'mr-2 h-4 w-4',
																		language.value ===
																			field.value
																			? 'opacity-100'
																			: 'opacity-0',
																	)}
																/>
																{language.label}
															</CommandItem>
														),
													)}
												</CommandGroup>
											</CommandList>
										</Command>
									</CardContent>
									<FormMessage />
								</FormItem>
							)}
						/>
					</Card>
					<div>
						<Button className="w-full" asChild variant="outline">
							<Link href="/onboarding/profile/step-two">
								Next
							</Link>
						</Button>
						<Button className="w-full" asChild variant="link">
							<Link href="/onboarding">Back</Link>
						</Button>
					</div>
				</form>
			</Form>
		</section>
	);
}
