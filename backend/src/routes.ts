import { Application } from "express";
import Products from "./routes/products";
import Categories from "./routes/categories";
import Ratings from "./routes/ratings";

export const routes = (app: Application) => {
  app.use("/products", Products);
  app.use("/products/categories", Categories);
  app.use("/products/ratings", Ratings);
};
