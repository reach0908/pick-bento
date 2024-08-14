'use client';

import Image from 'next/image';
import {
	// Icons
	ListFilter,
	PlusCircle,
	// Components
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@repo/ui';
import Link from 'next/link';

export default function Page(): JSX.Element {
	return (
		<section className="pb-20">
			<Tabs defaultValue="all">
				<div className="flex items-center">
					<TabsList>
						<TabsTrigger value="all">All</TabsTrigger>
						<TabsTrigger value="mobile">Mobile</TabsTrigger>
						<TabsTrigger value="desktop">Desktop</TabsTrigger>
					</TabsList>
					<div className="ml-auto flex items-center gap-2">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="outline"
									size="sm"
									className="h-8 gap-1"
								>
									<ListFilter className="h-3.5 w-3.5" />
									<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
										Filter
									</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel>Filter by</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuCheckboxItem checked>
									Mobile
								</DropdownMenuCheckboxItem>
								<DropdownMenuCheckboxItem>
									Desktop
								</DropdownMenuCheckboxItem>
							</DropdownMenuContent>
						</DropdownMenu>
						<Button
							size="sm"
							className="h-8 gap-1"
							variant="outline"
						>
							<PlusCircle className="h-3.5 w-3.5" />
							<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
								Request Product
							</span>
						</Button>
					</div>
				</div>
				<TabsContent value="all">
					<Card x-chunk="dashboard-06-chunk-0">
						<CardHeader>
							<CardTitle>ALL</CardTitle>
							<CardDescription>
								Manage your products and view their sales
								performance.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<Link href="/application/1">
										<TableRow>
											<TableHead className="w-[100px] sm:table-cell">
												<span className="sr-only">
													Image
												</span>
											</TableHead>
											<TableHead>이거눌러</TableHead>
										</TableRow>
									</Link>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											Laser Lemonade Machine
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											Hypernova Headphones
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											AeroGlow Desk Lamp
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											TechTonic Energy Drink
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											Gamer Gear Pro Controller
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											Luminous VR Headset
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</CardContent>
						<CardFooter>
							<div className="text-xs text-muted-foreground">
								Showing <strong>1-10</strong> of{' '}
								<strong>32</strong> products
							</div>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="mobile">
					<Card x-chunk="dashboard-06-chunk-0">
						<CardHeader>
							<CardTitle>MOBILE</CardTitle>
							<CardDescription>
								Manage your products and view their sales
								performance.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead className="w-[100px] sm:table-cell">
											<span className="sr-only">
												Image
											</span>
										</TableHead>
										<TableHead>Name</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											Laser Lemonade Machine
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											Hypernova Headphones
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											AeroGlow Desk Lamp
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											TechTonic Energy Drink
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											Gamer Gear Pro Controller
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											Luminous VR Headset
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</CardContent>
						<CardFooter>
							<div className="text-xs text-muted-foreground">
								Showing <strong>1-10</strong> of{' '}
								<strong>32</strong> products
							</div>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="desktop">
					<Card x-chunk="dashboard-06-chunk-0">
						<CardHeader>
							<CardTitle>DESKTOP</CardTitle>
							<CardDescription>
								Manage your products and view their sales
								performance.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead className="w-[100px] sm:table-cell">
											<span className="sr-only">
												Image
											</span>
										</TableHead>
										<TableHead>Name</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											Laser Lemonade Machine
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											Hypernova Headphones
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											AeroGlow Desk Lamp
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											TechTonic Energy Drink
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											Gamer Gear Pro Controller
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="sm:table-cell">
											<Image
												alt="Product image"
												className="aspect-square rounded-md object-cover"
												height="64"
												src="/placeholder.svg"
												width="64"
											/>
										</TableCell>
										<TableCell className="font-medium">
											Luminous VR Headset
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</CardContent>
						<CardFooter>
							<div className="text-xs text-muted-foreground">
								Showing <strong>1-10</strong> of{' '}
								<strong>32</strong> products
							</div>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</section>
	);
}
