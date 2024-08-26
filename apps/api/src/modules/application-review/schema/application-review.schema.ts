import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApplicationReviewInterface } from '../interface/application-review.interface';
import { v4 as uuidv4 } from 'uuid';
import { HydratedDocument } from 'mongoose';

export type ApplicationReviewDocument = HydratedDocument<ApplicationReview>;

@Schema({
	collection: 'applicationReviews',
	timestamps: true,
	versionKey: false,
})
export class ApplicationReview {
	@Prop({
		type: String,
		required: true,
		unique: true,
		default: () => uuidv4(),
	})
	id: ApplicationReviewInterface['id'];

	@Prop({
		type: String,
		required: true,
	})
	appId: ApplicationReviewInterface['appId'];

	@Prop({
		type: String,
		required: true,
	})
	userId: ApplicationReviewInterface['userId'];

	@Prop({
		type: Number,
		required: true,
		min: 0,
	})
	rating: ApplicationReviewInterface['rating'];

	@Prop({
		type: String,
	})
	comment: ApplicationReviewInterface['comment'];
}

export const ApplicationReviewSchema =
	SchemaFactory.createForClass(ApplicationReview);
