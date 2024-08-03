import { FilterQuery, Model, QueryOptions } from 'mongoose';
import { BaseRepositoryInterface } from '../interface/base-repository.interface';

export abstract class AbstractRepository<T>
	implements BaseRepositoryInterface<T>
{
	protected repository: Model<T>;

	constructor(repository: Model<T>) {
		this.repository = repository;
	}

	async create(payload: Partial<T>): Promise<T> {
		return this.repository.create(payload);
	}

	async find(query?: any, options?: QueryOptions): Promise<T[]> {
		return this.repository.find(query, options);
	}
	async findOne<K extends keyof T>(
		query: FilterQuery<T>,
		options?: QueryOptions,
	): Promise<Pick<T, K>> {
		return this.repository.findOne(query, options);
	}

	async updateMany(
		query: FilterQuery<T>,
		payload: Partial<T>,
	): Promise<unknown> {
		return this.repository.updateMany(query, payload);
	}

	async updateOne(
		query: FilterQuery<T>,
		payload: Partial<T>,
	): Promise<unknown> {
		return this.repository.updateOne(query, payload);
	}

	async deleteOne(query?: FilterQuery<T>): Promise<unknown> {
		return this.repository.deleteOne(query);
	}

	async countDocuments(query: FilterQuery<T>): Promise<number> {
		return this.repository.countDocuments(query);
	}
}
