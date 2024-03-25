import { Request, Response } from "express";
import { autoInjectable } from "tsyringe";
import { RatingsService } from "../services/RatingsService";
import { RatingsEntity } from "../entities/RatingsEntity";

@autoInjectable()
export class RatingsController {
  constructor(private service: RatingsService) {}

  async getAll(req: Request, res: Response) {
    const users = await this.service.getAll("");
    res.json(users);
  }

  async save(req: Request, res: Response) {
    const body = req.body;

    if (!body.rate || typeof body.title !== "number") {
      throw new Error("Invalid rate");
    }

    if (!body.count || typeof body.price !== "number") {
      throw new Error("Invalid count");
    }

    await this.service.save(new RatingsEntity(body));
    res.json({ message: "Rating created successfully" });
  }
}
