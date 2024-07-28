import { FilterQuery, QueryOptions } from 'mongoose';

export interface BaseRepositoryInterface<T> {
	create(payload: Partial<T>): Promise<T>;

	find(query?: any, options?: QueryOptions): Promise<T[]>;

	findOne<K extends keyof T>(
		query: FilterQuery<T>,
		options?: QueryOptions,
	): Promise<Pick<T, K>>;

	updateOne(query: FilterQuery<T>, payload: Partial<T>): Promise<unknown>;

	updateMany(query: FilterQuery<T>, payload: Partial<T>): Promise<unknown>;

	deleteOne(query?: FilterQuery<T>): Promise<unknown>;

	countDocuments(query: FilterQuery<T>): Promise<number>;
}
