import { ProductModel } from "../models/product.model.js";

export const ProductService = {
    getAllProducts() {
        return ProductModel.findAll();
    },

    getProductById(id) {
        return ProductModel.findById(id);
    },

    createProduct(payload) {
        if (!payload?.name || payload?.price === undefined) {
            return { error: "name and price are required" };
        }

        return ProductModel.create({
            name: payload.name,
            price: payload.price
        });
    },

    updateProduct(id, payload) {
        if (!payload || (payload.name === undefined && payload.price === undefined)) {
            return { error: "at least one field (name, price) is required" };
        }

        return ProductModel.update(id, payload);
    },

    deleteProduct(id) {
        return ProductModel.remove(id);
    }
};
