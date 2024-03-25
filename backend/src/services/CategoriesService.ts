import { autoInjectable } from "tsyringe";
import { CategoriesRepository } from "../repository/CategoriesRepository";
import { CategoriesEntity } from "../entities/CategoriesEntity";

@autoInjectable()
export class CategoriesService {
  constructor(private repository: CategoriesRepository) {}

  async getAll(query?: string) {
    return await this.repository.getAll();
  }

  async save(item: CategoriesEntity) {
    return await this.repository.save(item);
  }
}
