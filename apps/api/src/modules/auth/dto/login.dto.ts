import { ApiProperty } from '@nestjs/swagger';
import { UserInterface } from 'src/modules/user/interface/user.interface';

export class LoginDTO {
	@ApiProperty()
	provider: UserInterface['provider'];
	@ApiProperty()
	providerId: UserInterface['providerId'];
	@ApiProperty()
	name: UserInterface['name'];
	@ApiProperty()
	image: UserInterface['image'];
}
