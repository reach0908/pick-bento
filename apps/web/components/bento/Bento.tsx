'use client';

import { Card, HeartIcon, UserIcon } from '@repo/ui';

export default function Bento(): JSX.Element {
	return (
		<div>
			<div className="flex items-center justify-between align-middle">
				<div className="flex items-center text-center align-middle">
					<UserIcon width={'32px'} height={'32px'} />
					<h2 className="pb-2 text-3xl">Title</h2>
				</div>
			</div>
			<Card className="grid h-[500px] w-full grid-rows-[1.5fr_1fr] gap-4 p-4">
				<Card className="bg-white/15 dark:bg-slate-950">asd1</Card>
				<div className="grid grid-cols-2 gap-4">
					<Card className="bg-white/15 dark:bg-slate-950">asd2</Card>
					<Card className="bg-white/15 dark:bg-slate-950">asd3</Card>
				</div>
			</Card>
			<div className="flex items-center justify-between align-middle">
				<div>asd</div>
				<div className="flex items-center gap-2 align-middle">
					<HeartIcon />
					<span className="text-xl">12</span>
				</div>
			</div>
		</div>
	);
}
