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
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			items: ['recents', 'home'],
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		alert({
			title: 'You submitted the following values:',
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			),
		});
	}

	return (
		<section className="flex w-full flex-col gap-4">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<Card className="bg-white/80">
						<FormField
							control={form.control}
							name="items"
							render={() => (
								<FormItem>
									<div className="mb-4">
										<FormLabel className="text-base">
											당신은 어떤 것을 좋아하나요??
										</FormLabel>
										<FormDescription>
											Select the items you want to display
											in the sidebar.
										</FormDescription>
									</div>
									{items.map((item) => (
										<FormField
											key={item.id}
											control={form.control}
											name="items"
											render={({ field }) => {
												return (
													<FormItem
														key={item.id}
														className="flex flex-row items-start space-x-3 space-y-0"
													>
														<FormControl>
															<Checkbox
																checked={field.value?.includes(
																	item.id,
																)}
																onCheckedChange={(
																	checked,
																) => {
																	return checked
																		? field.onChange(
																				[
																					...field.value,
																					item.id,
																				],
																			)
																		: field.onChange(
																				field.value?.filter(
																					(
																						value,
																					) =>
																						value !==
																						item.id,
																				),
																			);
																}}
															/>
														</FormControl>
														<FormLabel className="font-normal">
															{item.label}
														</FormLabel>
													</FormItem>
												);
											}}
										/>
									))}
									<FormMessage />
								</FormItem>
							)}
						/>
					</Card>
					<div>
						<Button className="w-full" asChild variant="outline">
							<Link href="/">Next</Link>
						</Button>
						<Button className="w-full" asChild variant="link">
							<Link href="/onboarding/profile/step-one">
								Back
							</Link>
						</Button>
					</div>
				</form>
			</Form>
		</section>
	);
}
