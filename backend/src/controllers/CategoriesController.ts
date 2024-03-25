import { Request, Response } from "express";
import { autoInjectable } from "tsyringe";
import { CategoriesService } from "../services/CategoriesService";
import { CategoriesEntity } from "../entities/CategoriesEntity";

@autoInjectable()
export class CategoriesController {
  constructor(private service: CategoriesService) {}

  async getAll(req: Request, res: Response) {
    const users = await this.service.getAll("");
    res.json(users);
  }

  async save(req: Request, res: Response) {
    const body = req.body;

    if (!body.name || typeof body.name !== "string") {
      throw new Error("Invalid name");
    }

    await this.service.save(new CategoriesEntity(body));
    res.json({ message: "Category created successfully" });
  }
}
