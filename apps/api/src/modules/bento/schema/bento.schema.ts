import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BentoInterface } from '../interface/bento.interface';
import { v4 as uuidv4 } from 'uuid';
import { HydratedDocument } from 'mongoose';

export type BentoDocument = HydratedDocument<Bento>;

@Schema({ collection: 'bentos', timestamps: true, versionKey: false })
export class Bento {
	@Prop({
		type: String,
		required: true,
		unique: true,
		default: () => uuidv4(),
	})
	id: BentoInterface['id'];

	@Prop({ type: String, required: true })
	userId: BentoInterface['userId'];

	@Prop({ type: Object, required: true })
	mainDish: BentoInterface['mainDish'];

	@Prop({ type: Object })
	sideDish: BentoInterface['sideDish'];

	@Prop({ type: Object })
	dessert: BentoInterface['dessert'];

	@Prop({ type: Number, default: 0 })
	likeCount: BentoInterface['likeCount'];
}

export const BentoSchema = SchemaFactory.createForClass(Bento);
