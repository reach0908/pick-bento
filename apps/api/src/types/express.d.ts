import { Request as Req } from 'express';
import { Types } from 'mongoose';
import { User } from 'src/modules/user/schema/user.schema';

declare module 'express' {
	interface Request extends Req {
		user: {
			provider: User['provider'];
			providerId: User['providerId'];
			name: User['name'];
			image: User['image'];
		};
	}
}
