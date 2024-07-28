import { Injectable } from '@nestjs/common';
import { AbstractRepository } from 'src/core/repository/abstract.repository';
import { User } from './schema/user.schema';
import { UserRepositoryInterface } from './interface/user-repository.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository
	extends AbstractRepository<User>
	implements UserRepositoryInterface
{
	constructor(@InjectModel(User.name) private userModel: Model<User>) {
		super(userModel);
	}
}
