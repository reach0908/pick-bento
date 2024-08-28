import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Bento, BentoSchema } from './schema/bento.schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Bento.name,
				schema: BentoSchema,
			},
		]),
	],
	controllers: [],
	providers: [],
	exports: [],
})
export class BentoModule {}
