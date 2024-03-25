import { Database } from "./Database";
import { autoInjectable } from "tsyringe";
import { RatingsEntity } from "../entities/RatingsEntity";

@autoInjectable()
export class RatingsRepository {
  constructor(private database: Database<RatingsEntity>) {}

  async getAll(): Promise<RatingsEntity[]> {
    return await this.database.getAll(RatingsEntity, {});
  }

  async save(item: RatingsEntity): Promise<void> {
    await this.database.save(RatingsEntity, item);
  }
}
