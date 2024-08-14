import { Button, Card, CardContent, HeartIcon, ThemeToggle } from '@repo/ui';

export default function Page(): JSX.Element {
	return (
		<section>
			<ThemeToggle />
			<Card className="w-full max-w-md">
				<CardContent className="grid grid-cols-3 gap-4">
					<div className="col-span-1 flex flex-col items-center justify-center space-y-4">
						<div className="rounded-full bg-muted p-4">
							<img
								src="/placeholder.svg"
								alt="Creator"
								width={100}
								height={100}
								className="rounded-full"
								style={{
									aspectRatio: '100/100',
									objectFit: 'cover',
								}}
							/>
						</div>
						<div className="space-y-2 text-center">
							<h2 className="text-2xl font-bold">Jane Doe</h2>
							<p className="text-muted-foreground">
								UI/UX Designer
							</p>
							<p className="text-muted-foreground">
								Passionate about design, photography, and
								travel.
							</p>
						</div>
					</div>
					<div className="col-span-2 space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="overflow-hidden rounded-lg">
								<img
									src="/placeholder.svg"
									alt="Image 1"
									width="300"
									height="200"
									className="h-auto w-full object-cover"
									style={{
										aspectRatio: '300/200',
										objectFit: 'cover',
									}}
								/>
							</div>
							<div className="overflow-hidden rounded-lg">
								<img
									src="/placeholder.svg"
									alt="Image 2"
									width="300"
									height="200"
									className="h-auto w-full object-cover"
									style={{
										aspectRatio: '300/200',
										objectFit: 'cover',
									}}
								/>
							</div>
						</div>
						<div className="overflow-hidden rounded-lg">
							<img
								src="/placeholder.svg"
								alt="Image 3"
								width="600"
								height="200"
								className="h-auto w-full object-cover"
								style={{
									aspectRatio: '600/200',
									objectFit: 'cover',
								}}
							/>
						</div>
						<div className="flex items-center justify-between bg-muted p-2 text-sm">
							<div className="flex items-center gap-1">
								<HeartIcon className="h-4 w-4" />
								<span>280</span>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
