import { Controller, Get, UseGuards, Req, Res, Redirect } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get('/google/login')
	async googleAuth() {}

	@Get('/google/callback')
	async googleAuthCallback() {}

	@Get('/naver/login')
	async naverAuth() {}

	@Get('/naver/callback')
	async naverAuthCallback() {}

	@Get('/kakao/login')
	async kakaoAuth() {}

	@Get('/kakao/callback')
	@UseGuards(AuthGuard('kakao'))
	@Redirect('http://localhost:3001', 301)
	async kakaoAuthCallback(@Req() req: Request, @Res() res: Response) {
		// const { accessToken, refreshToken } = await this.authService.getJWT(
		// 	req.user.kakaoId,
		// );
		// res.cookie('accessToken', accessToken, { httpOnly: true });
		// res.cookie('refreshToken', refreshToken, { httpOnly: true });
		// res.cookie('isLoggedIn', true, { httpOnly: false });
		console.log('asdasd');
	}
}
