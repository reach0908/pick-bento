'use client';

import Link from 'next/link';
import Image from 'next/image';

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@repo/ui';

import KakaoLogo from '@/public/kakao_logo.svg';
import NaverLogo from '@/public/naver_logo.svg';

export function SignUpForm() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Sign Up</CardTitle>
				<CardDescription>회원가입</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<Button
					asChild
					size="lg"
					className="pointerhover:hover:bg-[#FEE500]/70 flex w-full flex-row gap-2 bg-[#FEE500] p-6"
				>
					<Link
						href={'http://localhost:3000/auth/kakao/login'}
						className="flex w-full flex-row gap-2"
					>
						<Image
							src={KakaoLogo}
							alt="kako logo"
							width={24}
							height={24}
						/>
						<p className="flex-1 items-center font-semibold text-slate-900">
							카카오 회원가입하기
						</p>
					</Link>
				</Button>
				<Button
					onClick={() => {
						window.alert('asdasd');
					}}
					size="lg"
					className="flex w-full flex-row gap-2 bg-[#03C75A] p-6 hover:bg-[#03C75A]/70"
				>
					<Image
						src={NaverLogo}
						alt="kako logo"
						width={24}
						height={24}
					/>
					<p className="flex-1 font-semibold">네이버 회원가입하기</p>
				</Button>
			</CardContent>
		</Card>
	);
}
