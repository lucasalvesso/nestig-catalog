import express from "express";
import { container } from "tsyringe";
import { CategoriesController } from "../controllers/CategoriesController";

const router = express.Router();

router.get("/", (req, res) => {
  const controller = container.resolve(CategoriesController);
  controller.getAll(req, res);
});

router.post("/", (req, res) => {
  const controller = container.resolve(CategoriesController);
  controller.save(req, res);
});

export default router;
