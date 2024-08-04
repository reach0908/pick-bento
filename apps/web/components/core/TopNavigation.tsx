import Image from 'next/image';
import Link from 'next/link';
import {
	Search,
	// Components
	Button,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	Input,
} from '@repo/ui';

export default function TopNavigation() {
	return (
		<header className="sticky top-0 z-50 flex h-14 items-center gap-4 bg-white/30 bg-opacity-60 px-4 shadow-xl backdrop-blur-lg backdrop-filter  sm:border-0 sm:bg-transparent sm:px-6 dark:bg-slate-800">
			<Breadcrumb className="hidden md:flex">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="#">Dashboard</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="#">Products</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>All Products</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="relative ml-auto flex-1 md:grow-0">
				<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
				<Input
					type="search"
					placeholder="Search..."
					className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
				/>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild className="hidden lg:flex">
					<Button
						variant="outline"
						size="icon"
						className="overflow-hidden rounded-full"
					>
						<Image
							src="/placeholder-user.jpg"
							width={36}
							height={36}
							alt="Avatar"
							className="overflow-hidden rounded-full"
						/>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Settings</DropdownMenuItem>
					<DropdownMenuItem>Support</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Logout</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	);
}
