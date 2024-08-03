import { UserInterface } from 'src/modules/user/interface/user.interface';

export class LoginDTO {
	provider: UserInterface['provider'];
	providerId: UserInterface['providerId'];
	name: UserInterface['name'];
	image: UserInterface['image'];
}
