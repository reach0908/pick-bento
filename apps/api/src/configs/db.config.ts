import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
	mongoDB: {
		url: process.env.MONGODB_URL,
	},
}));
