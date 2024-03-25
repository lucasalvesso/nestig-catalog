import express from "express";
import { container } from "tsyringe";
import { ProductsController } from "../controllers/ProductsController";

const router = express.Router();

router.get("/", (req, res) => {
  const controller = container.resolve(ProductsController);
  controller.getAll(req, res);
});

router.post("/", (req, res) => {
  const controller = container.resolve(ProductsController);
  controller.save(req, res);
});

export default router;
