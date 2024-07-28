import { registerAs } from '@nestjs/config';

export const AUTH = 'auth';

export default registerAs(AUTH, () => ({
	kakao: {
		key: process.env.KAKAO_KEY,
		secret: process.env.KAKAO_SECRET,
	},
}));
