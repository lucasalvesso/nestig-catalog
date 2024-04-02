import { Database } from "./Database";
import { ProductsEntity } from "../entities/ProductsEntity";
import { autoInjectable } from "tsyringe";
import { RatingsEntity } from "../entities/RatingsEntity";
import { ProductsQueryOptions } from "../interfaces/ProductsQueryOptions";
import { Between, FindManyOptions } from "typeorm";

@autoInjectable()
export class ProductsRepository {
  constructor(private database: Database<ProductsEntity>) {}

  async getAll(query?: ProductsQueryOptions): Promise<ProductsEntity[]> {
    const where: Record<string, any> = {};

    if (query?.categoryId) {
      where.categoryId = query?.categoryId;
    }

    if (query?.minPrice && query.maxPrice) {
      where.price = Between(query?.minPrice, query?.maxPrice);
    }

    const options: Partial<FindManyOptions<ProductsEntity>> = {
      relations: ["rating"],
      where,
    };

    return await this.database.getAll(ProductsEntity, options);
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
