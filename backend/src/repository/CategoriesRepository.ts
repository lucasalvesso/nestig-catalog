import { Database } from "./Database";
import { autoInjectable } from "tsyringe";
import { CategoriesEntity } from "../entities/CategoriesEntity";

@autoInjectable()
export class CategoriesRepository {
  constructor(private database: Database<CategoriesEntity>) {}

  async getAll(): Promise<CategoriesEntity[]> {
    return await this.database.getAll(CategoriesEntity, {});
  }

  async save(item: Omit<CategoriesEntity, "id">): Promise<void> {
    await this.database.save(CategoriesEntity, item);
  }
}
