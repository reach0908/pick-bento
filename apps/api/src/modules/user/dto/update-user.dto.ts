import { ApiProperty } from '@nestjs/swagger';
import { UserInterface } from '../interface/user.interface';

export class UpdateUserDto {
	@ApiProperty()
	name?: UserInterface['name'];
	@ApiProperty()
	job?: UserInterface['job'];
	@ApiProperty()
	personality?: UserInterface['personality'];
	@ApiProperty()
	hobbyList?: UserInterface['hobbyList'];
}
