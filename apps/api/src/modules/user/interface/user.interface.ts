import { Job } from '../constant/user-job.constant';
import { Provider } from '../constant/user-provider.constant';

export interface UserInterface {
	id: string;
	// Basic Info
	name: string;
	image: string;

	// user additional info
	job: Job;
	personality: string;
	hobbyList: string[];

	// Oauth Provider
	providerId: string;
	provider: Provider;

	// 온보딩 완료 여부
	isEmailSubscribed: boolean;
	isSignUpCompleted: boolean;

	// Refresh Token
	refreshToken?: string;
}
