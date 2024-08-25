import { Controller, Get, Body, Patch, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get(':id')
	@UseGuards(AuthGuard('jwt'))
	getUser(@Req() req: Request) {
		const { userId } = req.user;
		return this.userService.getUserById(userId);
	}

	@Patch(':id')
	@UseGuards(AuthGuard('jwt'))
	patchUser(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
		const { userId } = req.user;
		return this.userService.patchUserById(userId, updateUserDto);
	}
}
