'use client';

import Bento from '@/components/bento/Bento';
import { Button, Card } from '@repo/ui';
import Link from 'next/link';

export default function Page(): JSX.Element {
	return (
		<section className="w-full">
			<Bento selectedSize={3} />
		</section>
	);
}
