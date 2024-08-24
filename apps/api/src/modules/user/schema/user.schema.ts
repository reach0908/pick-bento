import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PROVIDERS } from '../constant/user-provider.constant';
import { UserInterface } from '../interface/user.interface';
import { JOBS } from '../constant/user-job.constant';
import { v4 as uuidv4 } from 'uuid';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users', timestamps: true, versionKey: false })
export class User {
	@Prop({
		type: String,
		required: true,
		unique: true,
		default: () => uuidv4(),
	})
	id: UserInterface['id'];

	@Prop({ type: String })
	name: UserInterface['name'];

	@Prop({ type: String })
	image: UserInterface['image'];

	@Prop({ type: String, enum: JOBS })
	job: UserInterface['job'];

	@Prop({ type: String })
	personality: UserInterface['personality'];

	@Prop({ type: Array })
	hobbyList: UserInterface['hobbyList'];

	@Prop({ type: String, required: true, enum: PROVIDERS })
	provider: UserInterface['provider'];

	@Prop({ type: String, required: true })
	providerId: UserInterface['providerId'];

	@Prop({ type: Boolean, default: false })
	isEmailSubscribed: UserInterface['isEmailSubscribed'];

	@Prop({ type: Boolean, default: false })
	isSignUpCompleted: UserInterface['isSignUpCompleted'];

	@Prop({ type: String })
	refreshToken: UserInterface['refreshToken'];
}

export const UserSchema = SchemaFactory.createForClass(User);
