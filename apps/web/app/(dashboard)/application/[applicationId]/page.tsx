'use client';

import Image from 'next/image';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	DownloadIcon,
	SmartphoneIcon,
	StarIcon,
} from '@repo/ui';

export default function Page(): JSX.Element {
	return (
		<div className="mx-auto w-full max-w-3xl p-4 sm:p-6">
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
				<div className="flex items-center gap-4 overflow-auto">
					<div className="overflow-hidden rounded-lg bg-background">
						<Image
							src="/placeholder.svg"
							alt="App Icon"
							width={128}
							height={128}
							className="h-auto w-full"
							style={{
								aspectRatio: '128/128',
								objectFit: 'cover',
							}}
						/>
					</div>
					<div>
						<h1 className="text-2xl font-bold">Acme App</h1>
						<div className="text-sm text-muted-foreground">
							<span>by Acme Inc</span>
							<span className="mx-2">•</span>
							<span>Productivity</span>
						</div>
					</div>
				</div>
				<div className="space-y-4">
					<div className="flex gap-4 overflow-auto">
						<Image
							src="/placeholder.svg"
							alt="App Screenshot"
							width={300}
							height={200}
							className="h-auto w-full rounded-lg"
							style={{
								aspectRatio: '300/200',
								objectFit: 'cover',
							}}
						/>
						<Image
							src="/placeholder.svg"
							alt="App Screenshot"
							width={300}
							height={200}
							className="h-auto w-full rounded-lg"
							style={{
								aspectRatio: '300/200',
								objectFit: 'cover',
							}}
						/>
						<Image
							src="/placeholder.svg"
							alt="App Screenshot"
							width={300}
							height={200}
							className="h-auto w-full rounded-lg"
							style={{
								aspectRatio: '300/200',
								objectFit: 'cover',
							}}
						/>
					</div>
					<div className="space-y-2">
						<div className="flex items-center gap-2">
							<DownloadIcon className="h-5 w-5 text-muted-foreground" />
							<span className="text-sm text-muted-foreground">
								1.2M Downloads
							</span>
						</div>
						<div className="flex items-center gap-2">
							<StarIcon className="h-5 w-5 text-primary" />
							<span className="text-sm text-muted-foreground">
								4.7 (12.3K Reviews)
							</span>
						</div>
						<div className="flex items-center gap-2">
							<SmartphoneIcon className="h-5 w-5 text-muted-foreground" />
							<span className="text-sm text-muted-foreground">
								iOS, Android
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-8 space-y-6">
				<div>
					<h2 className="text-xl font-bold">About</h2>
					<p className="mt-2 text-sm text-muted-foreground">
						Acme App is a powerful productivity tool that helps you
						stay organized and focused. With its intuitive interface
						and customizable features, you can easily manage your
						tasks, notes, and projects all in one place.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-bold">Reviews</h2>
					<div className="mt-4 space-y-4">
						<div className="flex items-start gap-4">
							<div className="flex-shrink-0">
								<Avatar className="h-10 w-10">
									<AvatarImage
										src="/placeholder-user.jpg"
										alt="User Avatar"
									/>
									<AvatarFallback>JD</AvatarFallback>
								</Avatar>
							</div>
							<div className="flex-1">
								<div className="flex items-center gap-2">
									<div className="font-medium">John Doe</div>
									<div className="flex items-center gap-1 text-sm text-muted-foreground">
										<StarIcon className="h-4 w-4 fill-primary" />
										<span>5.0</span>
									</div>
								</div>
								<p className="mt-1 text-sm text-muted-foreground">
									This app has been a game-changer for my
									productivity! The features are intuitive and
									the UI is clean and user-friendly.
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div className="flex-shrink-0">
								<Avatar className="h-10 w-10">
									<AvatarImage
										src="/placeholder-user.jpg"
										alt="User Avatar"
									/>
									<AvatarFallback>JD</AvatarFallback>
								</Avatar>
							</div>
							<div className="flex-1">
								<div className="flex items-center gap-2">
									<div className="font-medium">
										Jane Smith
									</div>
									<div className="flex items-center gap-1 text-sm text-muted-foreground">
										<StarIcon className="h-4 w-4 fill-primary" />
										<span>4.5</span>
									</div>
								</div>
								<p className="mt-1 text-sm text-muted-foreground">
									I've been using this app for a few months
									now and it's become an essential part of my
									daily routine. Highly recommended!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
