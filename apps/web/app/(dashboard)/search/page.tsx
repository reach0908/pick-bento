'use client';

import { Input, SearchIcon } from '@repo/ui';

export default function Page(): JSX.Element {
	return (
		<div className="relative max-w-md flex-1">
			<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<SearchIcon className="h-5 w-5 text-muted-foreground" />
			</div>
			<Input
				type="search"
				placeholder="Search apps..."
				className="w-full rounded-full bg-card py-3 pl-10 pr-4 focus:bg-card/50 focus:outline-none"
			/>
		</div>
	);
}
