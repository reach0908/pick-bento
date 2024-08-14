import { Avatar, AvatarFallback, AvatarImage, HeartIcon, Card } from '@repo/ui';
import Link from 'next/link';

export default function Page(): JSX.Element {
	return (
		<div>
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
				<section>
					<h2 className="mb-4 text-2xl font-bold">Most Popular</h2>
					<div className="grid grid-cols-1 gap-4">
						<div className="overflow-x-auto">
							<div className="flex space-x-4">
								<Card className="min-w-[300px] flex-shrink-0 overflow-hidden rounded-lg shadow-md">
									<Link
										href="#"
										className="block h-40 w-full overflow-hidden"
										prefetch={false}
									>
										<img
											src="/placeholder.svg"
											alt="Blog Post Thumbnail"
											width={400}
											height={225}
											className="h-full w-full object-cover"
											style={{
												aspectRatio: '400/225',
												objectFit: 'cover',
											}}
										/>
									</Link>
									<div className="relative p-4">
										<div className="mb-2 flex items-center">
											<Avatar className="mr-2 h-8 w-8">
												<AvatarImage
													src="/placeholder-user.jpg"
													alt="Author Avatar"
												/>
												<AvatarFallback>
													JD
												</AvatarFallback>
											</Avatar>
											<Link
												href="#"
												className="min-w-[100px] text-sm font-medium"
												prefetch={false}
											>
												John Doe
											</Link>
										</div>
										<h3 className="mb-2 text-lg font-bold">
											<Link href="#" prefetch={false}>
												The Ultimate Guide to Responsive
												Web Design
											</Link>
										</h3>
										<p className="mb-4 text-muted-foreground">
											Learn how to create stunning,
											mobile-friendly websites that adapt
											to any device.
										</p>
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<HeartIcon className="mr-1 h-5 w-5 text-muted-foreground" />
												<span className="text-sm text-muted-foreground">
													123
												</span>
											</div>
											<div className="absolute right-2 top-2 flex items-center">
												<HeartIcon className="mr-1 h-5 w-5 text-muted-foreground" />
												<span className="text-sm text-muted-foreground">
													123
												</span>
											</div>
										</div>
									</div>
								</Card>
								<Card className="min-w-[300px] flex-shrink-0 overflow-hidden rounded-lg shadow-md">
									<Link
										href="#"
										className="block h-40 w-full overflow-hidden"
										prefetch={false}
									>
										<img
											src="/placeholder.svg"
											alt="Blog Post Thumbnail"
											width={400}
											height={225}
											className="h-full w-full object-cover"
											style={{
												aspectRatio: '400/225',
												objectFit: 'cover',
											}}
										/>
									</Link>
									<div className="relative p-4">
										<div className="mb-2 flex items-center">
											<Avatar className="mr-2 h-8 w-8">
												<AvatarImage
													src="/placeholder-user.jpg"
													alt="Author Avatar"
												/>
												<AvatarFallback>
													JD
												</AvatarFallback>
											</Avatar>
											<Link
												href="#"
												className="text-sm font-medium"
												prefetch={false}
											>
												John Doe
											</Link>
										</div>
										<h3 className="mb-2 text-lg font-bold">
											<Link href="#" prefetch={false}>
												10 Productivity Tips for Remote
												Workers
											</Link>
										</h3>
										<p className="mb-4 text-muted-foreground">
											Boost your efficiency and stay
											focused while working from home.
										</p>
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<HeartIcon className="mr-1 h-5 w-5 text-muted-foreground" />
												<span className="text-sm text-muted-foreground">
													87
												</span>
											</div>
											<div className="absolute right-2 top-2 flex items-center">
												<HeartIcon className="mr-1 h-5 w-5 text-muted-foreground" />
												<span className="text-sm text-muted-foreground">
													87
												</span>
											</div>
										</div>
									</div>
								</Card>
								<Card className="min-w-[300px] flex-shrink-0 overflow-hidden rounded-lg shadow-md">
									<Link
										href="#"
										className="block h-40 w-full overflow-hidden"
										prefetch={false}
									>
										<img
											src="/placeholder.svg"
											alt="Blog Post Thumbnail"
											width={400}
											height={225}
											className="h-full w-full object-cover"
											style={{
												aspectRatio: '400/225',
												objectFit: 'cover',
											}}
										/>
									</Link>
									<div className="relative p-4">
										<div className="mb-2 flex items-center">
											<Avatar className="mr-2 h-8 w-8">
												<AvatarImage
													src="/placeholder-user.jpg"
													alt="Author Avatar"
												/>
												<AvatarFallback>
													JD
												</AvatarFallback>
											</Avatar>
											<Link
												href="#"
												className="text-sm font-medium"
												prefetch={false}
											>
												John Doe
											</Link>
										</div>
										<h3 className="mb-2 text-lg font-bold">
											<Link href="#" prefetch={false}>
												The Ultimate Guide to Responsive
												Web Design
											</Link>
										</h3>
										<p className="mb-4 text-muted-foreground">
											Learn how to create stunning,
											mobile-friendly websites that adapt
											to any device.
										</p>
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<HeartIcon className="mr-1 h-5 w-5 text-muted-foreground" />
												<span className="text-sm text-muted-foreground">
													123
												</span>
											</div>
											<div className="absolute right-2 top-2 flex items-center">
												<HeartIcon className="mr-1 h-5 w-5 text-muted-foreground" />
												<span className="text-sm text-muted-foreground">
													123
												</span>
											</div>
										</div>
									</div>
								</Card>
							</div>
						</div>
					</div>
				</section>
				<section>
					<h2 className="mb-4 text-2xl font-bold">
						Recommended for You
					</h2>
					<div className="grid grid-cols-1 gap-4">
						<div className="overflow-x-auto">
							<div className="flex space-x-4">
								<Card className="min-w-[300px] flex-shrink-0 overflow-hidden rounded-lg shadow-md">
									<Link
										href="#"
										className="block h-40 w-full overflow-hidden"
										prefetch={false}
									>
										<img
											src="/placeholder.svg"
											alt="Blog Post Thumbnail"
											width={400}
											height={225}
											className="h-full w-full object-cover"
											style={{
												aspectRatio: '400/225',
												objectFit: 'cover',
											}}
										/>
									</Link>
									<div className="relative p-4">
										<div className="mb-2 flex items-center">
											<Avatar className="mr-2 h-8 w-8">
												<AvatarImage
													src="/placeholder-user.jpg"
													alt="Author Avatar"
												/>
												<AvatarFallback>
													JD
												</AvatarFallback>
											</Avatar>
											<Link
												href="#"
												className="text-sm font-medium"
												prefetch={false}
											>
												Jane Doe
											</Link>
										</div>
										<h3 className="mb-2 text-lg font-bold">
											<Link href="#" prefetch={false}>
												The Future of Sustainable
												Fashion
											</Link>
										</h3>
										<p className="mb-4 text-muted-foreground">
											Discover how the fashion industry is
											embracing eco-friendly practices.
										</p>
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<HeartIcon className="mr-1 h-5 w-5 text-muted-foreground" />
												<span className="text-sm text-muted-foreground">
													42
												</span>
											</div>
											<div className="absolute right-2 top-2 flex items-center">
												<HeartIcon className="mr-1 h-5 w-5 text-muted-foreground" />
												<span className="text-sm text-muted-foreground">
													42
												</span>
											</div>
										</div>
									</div>
								</Card>
								<Card className="min-w-[300px] flex-shrink-0 overflow-hidden rounded-lg shadow-md">
									<Link
										href="#"
										className="block h-40 w-full overflow-hidden"
										prefetch={false}
									>
										<img
											src="/placeholder.svg"
											alt="Blog Post Thumbnail"
											width={400}
											height={225}
											className="h-full w-full object-cover"
											style={{
												aspectRatio: '400/225',
												objectFit: 'cover',
											}}
										/>
									</Link>
									<div className="relative p-4">
										<div className="mb-2 flex items-center">
											<Avatar className="mr-2 h-8 w-8">
												<AvatarImage
													src="/placeholder-user.jpg"
													alt="Author Avatar"
												/>
												<AvatarFallback>
													JD
												</AvatarFallback>
											</Avatar>
											<Link
												href="#"
												className="text-sm font-medium"
												prefetch={false}
											>
												Jane Doe
											</Link>
										</div>
										<h3 className="mb-2 text-lg font-bold">
											<Link href="#" prefetch={false}>
												The Art of Minimalist Web Design
											</Link>
										</h3>
										<p className="mb-4 text-muted-foreground">
											Learn how to create clean, elegant
											websites that focus on user
											experience.
										</p>
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<HeartIcon className="mr-1 h-5 w-5 text-muted-foreground" />
												<span className="text-sm text-muted-foreground">
													29
												</span>
											</div>
											<div className="absolute right-2 top-2 flex items-center">
												<HeartIcon className="mr-1 h-5 w-5 text-muted-foreground" />
												<span className="text-sm text-muted-foreground">
													29
												</span>
											</div>
										</div>
									</div>
								</Card>
								<Card className="min-w-[300px] flex-shrink-0 overflow-hidden rounded-lg shadow-md">
									<Link
										href="#"
										className="block h-40 w-full overflow-hidden"
										prefetch={false}
									>
										<img
											src="/placeholder.svg"
											alt="Blog Post Thumbnail"
											width={400}
											height={225}
											className="h-full w-full object-cover"
											style={{
												aspectRatio: '400/225',
												objectFit: 'cover',
											}}
										/>
									</Link>
									<div className="relative p-4">
										<div className="mb-2 flex items-center">
											<Avatar className="mr-2 h-8 w-8">
												<AvatarImage
													src="/placeholder-user.jpg"
													alt="Author Avatar"
												/>
												<AvatarFallback>
													JD
												</AvatarFallback>
											</Avatar>
											<Link
												href="#"
												className="text-sm font-medium"
												prefetch={false}
											>
												Jane Doe
											</Link>
										</div>
										<h3 className="mb-2 text-lg font-bold">
											<Link href="#" prefetch={false}>
												The Future of Sustainable
												Fashion
											</Link>
										</h3>
										<p className="mb-4 text-muted-foreground">
											Discover how the fashion industry is
											embracing eco-friendly practices.
										</p>
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<HeartIcon className="mr-1 h-5 w-5 text-muted-foreground" />
												<span className="text-sm text-muted-foreground">
													42
												</span>
											</div>
											<div className="absolute right-2 top-2 flex items-center">
												<HeartIcon className="mr-1 h-5 w-5 text-muted-foreground" />
												<span className="text-sm text-muted-foreground">
													42
												</span>
											</div>
										</div>
									</div>
								</Card>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
				<section>
					<h2 className="mb-4 text-2xl font-bold">Latest Posts</h2>
					<div className="grid grid-cols-1 gap-4">
						<div className="overflow-x-auto">
							<div className="flex space-x-4">
								<Card className="min-w-[300px] flex-shrink-0 overflow-hidden rounded-lg shadow-md">
									<Link
										href="#"
										className="block h-40 w-full overflow-hidden"
										prefetch={false}
									>
										<img
											src="/placeholder.svg"
											alt="Blog Post Thumbnail"
											width={400}
											height={225}
											className="h-full w-full object-cover"
											style={{
												aspectRatio: '400/225',
												objectFit: 'cover',
											}}
										/>
									</Link>
									<div className="relative p-4">
										<div className="mb-2 flex items-center">
											<Avatar className="mr-2 h-8 w-8">
												<AvatarImage
													src="/placeholder-user.jpg"
													alt="Author Avatar"
												/>
												<AvatarFallback>
													JD
												</AvatarFallback>
											</Avatar>
											<Link
												href="#"
												className="text-sm font-medium"
												prefetch={false}
											>
												Sarah Johnson
											</Link>
										</div>
										<h3 className="mb-2 text-lg font-bold">
											<Link href="#" prefetch={false}>
												The Importance of Accessibility
												in Web Design
											</Link>
										</h3>
										<p className="mb-4 text-muted-foreground">
											Explore how to create websites that
											are inclusive and accessible to all
											users.
										</p>
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<HeartIcon className="mr-1 h-5 w-5 text-muted-foreground" />
												<span className="text-sm text-muted-foreground">
													11
												</span>
											</div>
											<div className="absolute right-2 top-2 flex items-center">
												<HeartIcon className="mr-1 h-5 w-5 text-muted-foreground" />
												<span className="text-sm text-muted-foreground">
													11
												</span>
											</div>
										</div>
									</div>
								</Card>
								<Card className="min-w-[300px] flex-shrink-0 overflow-hidden rounded-lg shadow-md">
									<Link
										href="#"
										className="block h-40 w-full overflow-hidden"
										prefetch={false}
									>
										<img
											src="/placeholder.svg"
											alt="Blog Post Thumbnail"
										/>
									</Link>
								</Card>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
