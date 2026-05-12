import { sendError, sendSuccess } from "./base.controller.js";
import { createCoffeeProducts, listProducts } from "../services/product.service.js";
export const getProductsController = async (_req, res) => {
    try {
        const products = await listProducts();
        return sendSuccess(res, products, "Products fetched successfully.");
    }
    catch (error) {
        console.error("Error fetching products:", error);
        return sendError(res);
    }
};
export const seedCoffeeProductsController = async (_req, res) => {
    try {
        const result = await createCoffeeProducts();
        return sendSuccess(res, result, result.message, 201);
    }
    catch (error) {
        console.error("Error seeding coffee products:", error);
        return sendError(res);
    }
};
