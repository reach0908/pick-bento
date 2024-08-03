import { BaseRepositoryInterface } from 'src/core/interface/base-repository.interface';
import { UserDocument } from '../schema/user.schema';

export const KEY = 'UserRepositoryInterface';

export interface UserRepositoryInterface
	extends BaseRepositoryInterface<UserDocument> {}
