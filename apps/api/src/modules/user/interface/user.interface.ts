import { Job } from '../constant/user-job.constant';
import { Provider } from '../constant/user-provider.constant';

export interface UserInterface {
	// Basic Info
	name: string;
	image: string;
	job: Job;

	// Oauth Provider
	providerId: string;
	provider: Provider;

	// 온보딩 완료 여부
	isEmailSubscribed: boolean;
	isSignUpCompleted: boolean;

	// Refresh Token
	refreshToken?: string;
}
