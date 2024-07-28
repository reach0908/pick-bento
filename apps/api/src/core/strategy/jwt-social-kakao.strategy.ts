import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-kakao';
import authConfig from 'src/configs/auth.config';

@Injectable()
export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
	constructor(
		@Inject(authConfig.KEY)
		private readonly config: ConfigType<typeof authConfig>,
	) {
		super({
			clientID: config.kakao.key,
			clientSecret: config.kakao.secret,
			callbackURL: 'http://localhost:3000/auth/kakao/callback', //.env파일에 들어있음
		});
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: Profile,
		done: (error: any, user?: any, info?: any) => void,
	) {
		try {
			console.log({ accessToken, refreshToken, profile });
			const { _json } = profile;
			const user = {
				kakaoId: _json.id,
				nickname: _json.properties.nickname,
				photo: _json.properties.profile_image,
			};
			done(null, user);
		} catch (error) {
			done(error);
		}
	}
}
