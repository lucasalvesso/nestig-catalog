import { autoInjectable } from "tsyringe";
import { ProductsRepository } from "../repository/ProductsRepository";
import { ProductsEntity } from "../entities/ProductsEntity";

@autoInjectable()
export class ProductsService {
  constructor(private repository: ProductsRepository) {}

  async getAll(query?: string) {
    return await this.repository.getAll();
  }

  async save(item: ProductsEntity) {
    await this.repository.save(item);
  }
}
