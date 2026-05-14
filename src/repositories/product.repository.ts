import { CreateProductInput, Product, ProductModel } from "../models/product.model.js";

export class ProductRespository {
    static async getAll(): Promise<Product[]> {
        const products = await ProductModel.find({}).lean<Product[]>();
        return products;
    }

    static async getById(id: string): Promise<Product | null> {
        const product = await ProductModel.findById(id).lean<Product | null>();
        return product;
    }

    static async create(product: CreateProductInput): Promise<Product> {
        const created = await ProductModel.create(product);
        return created.toObject() as Product;
    }

    static async update(id: string, product: CreateProductInput): Promise<boolean> {
        const result = await ProductModel.updateOne({ _id: id }, { $set: product });
        return result.modifiedCount > 0;
    }

    static async delete(id: string): Promise<boolean> {
        const result = await ProductModel.deleteOne({ _id: id });
        return result.deletedCount > 0;
    }
}
