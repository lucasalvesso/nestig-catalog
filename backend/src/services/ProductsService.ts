import { autoInjectable } from "tsyringe";
import { ProductsRepository } from "../repository/ProductsRepository";
import { ProductsEntity } from "../entities/ProductsEntity";
import { ProductsQueryOptions } from "../interfaces/ProductsQueryOptions";

@autoInjectable()
export class ProductsService {
  constructor(private repository: ProductsRepository) {}

  async getAll(query?: ProductsQueryOptions) {
    return await this.repository.getAll(query);
  }

  async save(item: ProductsEntity) {
    await this.repository.save(item);
  }
}
