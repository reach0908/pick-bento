import { ApplicationInterface } from 'src/modules/application/interface/application.interface';
import { UserInterface } from 'src/modules/user/interface/user.interface';
import { UsageStatus } from '../constant/application-usage.constant';

export interface ApplicationUsageInterface {
	id: string;
	appId: ApplicationInterface['id'];
	userId: UserInterface['id'];
	status: UsageStatus;
	createdAt: Date;
	updatedAt: Date;
}
