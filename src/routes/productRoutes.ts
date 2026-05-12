import { Router } from "express";
import { getProductsController, seedCoffeeProductsController } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.get("/", getProductsController);
productRouter.post("/seed-coffee", seedCoffeeProductsController);

export default productRouter;
