import { DataSource, EntityTarget, FindManyOptions } from "typeorm";
import { injectable } from "tsyringe";

@injectable()
export class Database<T> implements IDatabase<T> {
  constructor(public connection: DataSource) {}

  async getAll(
    entity: EntityTarget<T>,
    options: FindManyOptions,
  ): Promise<T[]> {
    try {
      return await this.connection.createEntityManager().find(entity, options);
    } catch (e) {
      console.log(e);
      throw new Error("Unable to access database");
    }
  }

  async save(entity: EntityTarget<T>, item: Partial<T>): Promise<void> {
    try {
      await this.connection.createEntityManager().save(entity, item);
    } catch (e) {
      console.log(e);
      throw new Error("Unable to access database");
    }
  }
}

export interface IDatabase<T> {
  getAll(entity: EntityTarget<T>, options: FindManyOptions): Promise<T[]>;
  save(entity: EntityTarget<T>, options: T): Promise<void>;
}
