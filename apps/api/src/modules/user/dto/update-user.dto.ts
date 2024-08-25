import { UserInterface } from '../interface/user.interface';

export class UpdateUserDto {
	name?: UserInterface['name'];
	job?: UserInterface['job'];
	personality?: UserInterface['personality'];
	hobbyList?: UserInterface['hobbyList'];
}
