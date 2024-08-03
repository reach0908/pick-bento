import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { UserRepository } from './user.repository';
import { KEY as USER_REPOSITORY_INTERFACE_KEY } from './interface/user-repository.interface';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: User.name,
				schema: UserSchema,
			},
		]),
	],
	controllers: [UserController],
	providers: [
		UserService,
		{
			provide: USER_REPOSITORY_INTERFACE_KEY,
			useClass: UserRepository,
		},
	],
	exports: [USER_REPOSITORY_INTERFACE_KEY],
})
export class UserModule {}
