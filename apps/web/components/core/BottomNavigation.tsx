import {
	// Icon
	HomeIcon,
	BoxesIcon,
	UserIcon,
	SearchIcon,
	LayoutPanelLeftIcon,
} from '@repo/ui';
import Link from 'next/link';
export default function BottomNavigation() {
	return (
		<nav className="fixed bottom-4 left-1/2 z-50 h-16 w-full max-w-xs -translate-x-1/2 rounded-full border border-gray-200 bg-white/30 bg-opacity-60 shadow-lg ring-1 ring-black/5 backdrop-blur-lg backdrop-filter dark:border-gray-600 dark:bg-slate-800">
			<div className="mx-auto grid h-full max-w-lg grid-cols-5">
				<Link
					href="/"
					className="group inline-flex flex-col items-center justify-center rounded-s-full px-5 backdrop-blur-lg backdrop-filter hover:bg-gray-50 dark:hover:bg-slate-900"
				>
					<HomeIcon />
				</Link>
				<Link
					href="/application"
					className="group inline-flex flex-col items-center justify-center px-5 backdrop-blur-lg backdrop-filter hover:bg-gray-50 dark:hover:bg-slate-900"
				>
					<BoxesIcon />
				</Link>
				<div className="group inline-flex flex-col items-center justify-center px-5 backdrop-blur-lg backdrop-filter">
					<Link
						href="/search"
						className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-medium hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
					>
						<SearchIcon color="white" />
					</Link>
				</div>
				<Link
					href="/bento"
					className="group inline-flex flex-col items-center justify-center px-5 backdrop-blur-lg backdrop-filter hover:bg-gray-50 dark:hover:bg-slate-900"
				>
					<LayoutPanelLeftIcon />
				</Link>
				<Link
					href="/my"
					className="group inline-flex flex-col items-center justify-center rounded-e-full px-5 backdrop-blur-lg backdrop-filter hover:bg-gray-50 dark:hover:bg-slate-900"
				>
					<UserIcon />
				</Link>
			</div>
		</nav>
	);
}
