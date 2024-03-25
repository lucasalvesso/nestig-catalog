import express from "express";
import { container } from "tsyringe";
import { RatingsController } from "../controllers/RatingsController";

const router = express.Router();

router.get("/", (req, res) => {
  const controller = container.resolve(RatingsController);
  controller.getAll(req, res);
});

router.post("/", (req, res) => {
  const controller = container.resolve(RatingsController);
  controller.save(req, res);
});

export default router;
