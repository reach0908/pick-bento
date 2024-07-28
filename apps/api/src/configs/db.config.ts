import { registerAs } from '@nestjs/config';

export const DB = 'db';

export default registerAs(DB, () => ({
	mongoDB: {
		uri: process.env.MONGODB_URI,
	},
}));
