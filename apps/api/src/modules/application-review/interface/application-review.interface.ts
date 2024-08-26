import { ApplicationInterface } from 'src/modules/application/interface/application.interface';
import { UserInterface } from 'src/modules/user/interface/user.interface';

export interface ApplicationReviewInterface {
	id: string;
	appId: ApplicationInterface['id'];
	userId: UserInterface['id'];
	rating: number;
	comment: string;
	createdAt: Date;
	updatedAt: Date;
}
