import { CreateProductInput, Product } from "../models/product.model.js";
import { ProductRespository } from "../repositories/product.repository.js";

export class ProductService {
    static async getAll(): Promise<Product[]> {
        return await ProductRespository.getAll();
    }

    static async getById(id: string): Promise<Product | null> {
        return await ProductRespository.getById(id);
    }

    static async create(product: CreateProductInput): Promise<Product> {
        return await ProductRespository.create(product);
    }

    static async update(id: string, product: CreateProductInput): Promise<boolean> {
        return await ProductRespository.update(id, product);
    }

    static async delete(id: string): Promise<boolean> {
        return await ProductRespository.delete(id);
    }
}
