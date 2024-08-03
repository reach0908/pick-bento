import { registerAs } from '@nestjs/config';

export const AUTH = 'auth';

export default registerAs(AUTH, () => ({
	kakao: {
		key: process.env.KAKAO_KEY,
		secret: process.env.KAKAO_SECRET,
	},
	jwt: {
		secret: process.env.JWT_SECRET,
		expiresIn: process.env.JWT_EXPIRES_IN,
		refreshSecret: process.env.JWT_REFRESH_SECRET,
		refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
	},
}));
