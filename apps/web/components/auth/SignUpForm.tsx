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
					onClick={() => {
						window.alert('asdasd');
					}}
					size="lg"
					className="flex flex-row gap-2 w-full p-6 bg-[#FEE500] hover:bg-[#FEE500]/70"
				>
					<Image
						src={KakaoLogo}
						alt="kako logo"
						width={24}
						height={24}
					/>
					<p className="flex-1 text-slate-900 font-semibold">
						카카오톡 로그인하기
					</p>
				</Button>
				<Button
					onClick={() => {
						window.alert('asdasd');
					}}
					size="lg"
					className="flex flex-row gap-2 w-full p-6 bg-[#03C75A] hover:bg-[#03C75A]/70"
				>
					<Image
						src={NaverLogo}
						alt="kako logo"
						width={24}
						height={24}
					/>
					<p className="flex-1 font-semibold">네이버 로그인하기</p>
				</Button>
			</CardContent>
		</Card>
	);
}
