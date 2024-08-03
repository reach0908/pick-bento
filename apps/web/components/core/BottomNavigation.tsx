import {
	Button,
	Card,

	// Icon
	HomeIcon,
	LineChartIcon,
	UserIcon,
	SearchIcon,
	LayoutDashboardIcon,
} from '@repo/ui';
import Link from 'next/link';
export default function BottomNavigation() {
	return (
		<nav className="fixed z-50 w-full h-16 max-w-xs -translate-x-1/2 bg-white/30 border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-lg ring-1 ring-black/5">
			<div className="grid h-full max-w-lg grid-cols-5 mx-auto">
				<Link
					href="/"
					className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 group"
				>
					<HomeIcon />
				</Link>
				<Link
					href="/"
					className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
				>
					<LineChartIcon />
				</Link>
				<div className="flex items-center justify-center">
					<Link
						href="/"
						className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none"
					>
						<SearchIcon />
					</Link>
				</div>
				<Link
					href="/"
					className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
				>
					<LayoutDashboardIcon />
				</Link>
				<Link
					href="/"
					className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 group"
				>
					<UserIcon />
				</Link>
			</div>
		</nav>
	);
}
