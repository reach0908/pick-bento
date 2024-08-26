import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApplicationUsageInterface } from '../interface/application-usage.interface';
import { v4 as uuidv4 } from 'uuid';
import { HydratedDocument } from 'mongoose';
import {
	USAGE_STATUS,
	USAGE_STATUSES,
} from '../constant/application-usage.constant';

export type ApplicationUsageDocument = HydratedDocument<ApplicationUsage>;

@Schema({
	collection: 'applicationUsages',
	timestamps: true,
	versionKey: false,
})
export class ApplicationUsage {
	@Prop({
		type: String,
		required: true,
		unique: true,
		default: () => uuidv4(),
	})
	id: ApplicationUsageInterface['id'];

	@Prop({
		type: String,
		required: true,
	})
	appId: ApplicationUsageInterface['appId'];

	@Prop({
		type: String,
		required: true,
	})
	userId: ApplicationUsageInterface['userId'];

	@Prop({
		type: String,
		enum: USAGE_STATUSES,
		default: USAGE_STATUS.NOT_USED,
	})
	status: ApplicationUsageInterface['status'];
}

export const ApplicationUsageSchema =
	SchemaFactory.createForClass(ApplicationUsage);
