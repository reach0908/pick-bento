import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users', timestamps: true, versionKey: true })
export class User {
	@Prop({ type: Types.ObjectId })
	_id: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
