import { ApplicationUsageInterface } from 'src/modules/application-usage/interface/application-usage.interface';
import { ApplicationInterface } from 'src/modules/application/interface/application.interface';
import { UserInterface } from 'src/modules/user/interface/user.interface';

export interface BentoInterface {
	id: string;

	userId: UserInterface['id'];
	/**
	 * @description Main app of bento
	 */
	mainDish: {
		appId: ApplicationInterface['id'];
		appUsageId?: ApplicationUsageInterface['id'];
		description: string;
	};
	/**
	 * @description Side app of bento
	 */
	sideDish?: {
		appId: ApplicationInterface['id'];
		appUsageId?: ApplicationUsageInterface['id'];
		description: string;
	};
	/**
	 * @description Dessert app of bento
	 */
	dessert?: {
		appId: ApplicationInterface['id'];
		appUsageId?: ApplicationUsageInterface['id'];
		description: string;
	};
	/**
	 * @description Like count of bento
	 */
	likeCount: number;

	createdAt: Date;
	updatedAt: Date;
}
