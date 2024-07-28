import { BaseRepositoryInterface } from 'src/core/interface/base-repository.interface';
import { User } from '../schema/user.schema';

export interface UserRepositoryInterface
	extends BaseRepositoryInterface<User> {}
