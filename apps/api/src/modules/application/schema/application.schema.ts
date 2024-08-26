import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';
import { ApplicationInterface } from '../interface/application.interface';
import { HydratedDocument } from 'mongoose';

export type ApplicationDocument = HydratedDocument<Application>;

@Schema({ collection: 'applications', timestamps: true, versionKey: false })
export class Application {
	@Prop({
		type: String,
		required: true,
		unique: true,
		default: () => uuidv4(),
	})
	id: ApplicationInterface['id'];

	@Prop({ type: String, required: true })
	name: ApplicationInterface['name'];

	@Prop({ type: String, required: true })
	category: ApplicationInterface['category'];

	@Prop({ type: String, required: true })
	genre: ApplicationInterface['genre'];

	@Prop({ type: String, required: true })
	url: ApplicationInterface['url'];

	@Prop({ type: Date, required: true })
	releasedDate: ApplicationInterface['releasedDate'];

	@Prop({ type: String, required: true })
	thumbnail: ApplicationInterface['thumbnail'];

	@Prop({ type: String, required: true })
	appOs: ApplicationInterface['appOs'];
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);
