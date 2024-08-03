import {
	Controller,
	Get,
	UseGuards,
	Req,
	Res,
	HttpCode,
	UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}
	@Get('/kakao/login')
	@UseGuards(AuthGuard('kakao'))
	async kakaoAuth() {}

	@Get('/kakao/callback')
	@HttpCode(301)
	@UseGuards(AuthGuard('kakao'))
	async kakaoAuthCallback(@Req() req: Request, @Res() res: Response) {
		const { accessToken, refreshToken, isNewUser } =
			await this.authService.login(req.user);

		res.cookie('accessToken', accessToken, { httpOnly: true });
		res.cookie('refreshToken', refreshToken, { httpOnly: true });

		// 회원가입 단계라면 리다이렉트를 다른 곳으로 시켜줘야 한다.
		if (isNewUser) {
			res.redirect('http://localhost:3001/onboarding');
		}

		res.redirect('http://localhost:3001');
	}

	@Get('/refresh')
	@HttpCode(200)
	async refresh(@Req() req: Request, @Res() res: Response) {
		try {
			const newAccessToken = await this.authService.refresh(
				req.cookies.refreshToken,
			);
			res.cookie('accessToken', newAccessToken, { httpOnly: true });
			return res.send();
		} catch (e) {
			throw new UnauthorizedException();
		}
	}
}
