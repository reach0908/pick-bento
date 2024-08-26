import { Prop, Schema } from '@nestjs/mongoose';
import { BentoCommentInterface } from '../interface/bento-comment.interface';

@Schema({ collection: 'bentoComments', timestamps: true, versionKey: false })
export class BentoComment {
	@Prop({})
	id: BentoCommentInterface['id'];

	@Prop({})
	bentoId: BentoCommentInterface['bentoId'];

	@Prop({})
	userId: BentoCommentInterface['userId'];

	@Prop({})
	replyList: BentoCommentInterface['replyList'];

	@Prop({})
	cotent: BentoCommentInterface['content'];
}
