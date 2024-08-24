import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import {
	KEY as USER_REPOSITORY_INTERFACE_KEY,
	UserRepositoryInterface,
} from './interface/user-repository.interface';

@Injectable()
export class UserService {
	constructor(
		@Inject(USER_REPOSITORY_INTERFACE_KEY)
		private readonly userRepository: UserRepositoryInterface,
	) {}

	getUserById(id: number) {
		return this.userRepository.findOne({ id });
	}

	patchUserById(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}

	deleteUserById(id: number) {
		return `This action removes a #${id} user`;
	}
}
