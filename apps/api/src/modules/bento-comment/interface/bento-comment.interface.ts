import { BentoInterface } from 'src/modules/bento/interface/bento.interface';
import { UserInterface } from 'src/modules/user/interface/user.interface';
import { BentoReplyCommentInterface } from './bento-comment-reply.interface';

export interface BentoCommentInterface {
	id: string;
	bentoId: BentoInterface['id'];
	userId: UserInterface['id'];
	replyList: BentoReplyCommentInterface[];
	content: string;
	likeCount: number;
	createdAt: Date;
	updatedAt: Date;
}
