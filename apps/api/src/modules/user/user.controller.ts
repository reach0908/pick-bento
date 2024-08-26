import { Controller, Get, Body, Patch, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@ApiTags('유저 정보 Get API')
	@Get(':id')
	@UseGuards(AuthGuard('jwt'))
	getUser(@Req() req: Request) {
		const { userId } = req.user;
		return this.userService.getUserById(userId);
	}

	@ApiTags('유저 정보 Patch API')
	@Patch(':id')
	@UseGuards(AuthGuard('jwt'))
	patchUser(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
		const { userId } = req.user;
		return this.userService.patchUserById(userId, updateUserDto);
	}
}
