import { Database } from "./Database";
import { ProductsEntity } from "../entities/ProductsEntity";
import { autoInjectable } from "tsyringe";
import { RatingsEntity } from "../entities/RatingsEntity";

@autoInjectable()
export class ProductsRepository {
  constructor(private database: Database<ProductsEntity>) {}

  async getAll(): Promise<ProductsEntity[]> {
    return await this.database.getAll(ProductsEntity, {});
  }

  async save(item: Omit<ProductsEntity, "id">): Promise<void> {
    await this.database.connection.transaction(async (manager) => {
      const ratingId = await manager
        .createQueryBuilder<RatingsEntity>(RatingsEntity, "rating")
        .insert()
        .values({ rate: 0, count: 0 })
        .returning("id")
        .execute();

      item.ratingId = ratingId.raw[0].id;
      await manager
        .createQueryBuilder<ProductsEntity>(ProductsEntity, "product")
        .insert()
        .values(item)
        .execute();
    });
  }
}
