import { Injectable } from '@nestjs/common';
import { AbstractRepository } from 'src/core/repository/abstract.repository';
import { User, UserDocument } from './schema/user.schema';
import { UserRepositoryInterface } from './interface/user-repository.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository
	extends AbstractRepository<UserDocument>
	implements UserRepositoryInterface
{
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>,
	) {
		super(userModel);
	}
}
