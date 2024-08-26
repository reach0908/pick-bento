import { UserInterface } from 'src/modules/user/interface/user.interface';

export interface BentoReplyCommentInterface {
	id: string;
	userId: UserInterface['id'];
	content: string;
	createdAt: Date;
	updatedAt: Date;
}
