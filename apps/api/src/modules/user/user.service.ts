import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import {
	KEY as USER_REPOSITORY_INTERFACE_KEY,
	UserRepositoryInterface,
} from './interface/user-repository.interface';
import { UserInterface } from './interface/user.interface';

@Injectable()
export class UserService {
	constructor(
		@Inject(USER_REPOSITORY_INTERFACE_KEY)
		private readonly userRepository: UserRepositoryInterface,
	) {}

	getUserById(id: UserInterface['id']) {
		return this.userRepository.findOne({ id });
	}

	patchUserById(id: UserInterface['id'], updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}

	deleteUserById(id: number) {
		return `This action removes a #${id} user`;
	}
}
