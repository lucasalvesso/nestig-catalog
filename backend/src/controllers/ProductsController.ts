import { Request, Response } from "express";
import { autoInjectable } from "tsyringe";
import { ProductsService } from "../services/ProductsService";
import { ProductsEntity } from "../entities/ProductsEntity";
import { ProductsQueryOptions } from "../interfaces/ProductsQueryOptions";

@autoInjectable()
export class ProductsController {
  constructor(private service: ProductsService) {}

  async getAll(req: Request, res: Response) {
    const users = await this.service.getAll(req.query as ProductsQueryOptions);
    res.json(users);
  }

  async save(req: Request, res: Response) {
    const body = req.body;

    if (!body.title || typeof body.title !== "string") {
      throw new Error("Invalid title");
    }

    if (
      !body.productDescription ||
      typeof body.productDescription !== "string"
    ) {
      throw new Error("Invalid productDescription");
    }

    if (!body.price || typeof body.price !== "number") {
      throw new Error("Invalid price");
    }

    if (!body.imageUrl || typeof body.imageUrl !== "string") {
      throw new Error("Invalid imageUrl");
    }

    if (!body.categoryId || typeof body.categoryId !== "number") {
      throw new Error("Invalid categoryId");
    }

    await this.service.save(new ProductsEntity(body));
    res.json({ message: "Product created successfully" });
  }
}
