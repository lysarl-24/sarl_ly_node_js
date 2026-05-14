import mongoose, { Schema } from "mongoose";

export interface Product {
    name: string;
    description: string;
    price: number;
    category: string;
    inStock: boolean;
    imageUrl?: string;
}

export interface CreateProductInput {
    name: string;
    description: string;
    price: number;
    category: string;
    inStock: boolean;
    imageUrl?: string;
}

const ProductSchema = new Schema<Product>(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        inStock: {
            type: Boolean,
            required: true
        },
        imageUrl: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

export const ProductModel = mongoose.model<Product>(
    "Product",
    ProductSchema
);
