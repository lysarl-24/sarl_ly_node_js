import { getAllProducts, seedCoffeeProducts } from "../repositories/product.repository.js";
export const listProducts = async () => getAllProducts();
export const createCoffeeProducts = async () => seedCoffeeProducts();
