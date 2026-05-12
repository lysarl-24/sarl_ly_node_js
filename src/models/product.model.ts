import mongoose, { Schema, type Document } from "mongoose";

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    category: string;
    inStock: boolean;
    imageUrl?: string;
}

const productSchema = new Schema<IProduct>(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        price: { type: Number, required: true, min: 0 },
        category: { type: String, required: true, trim: true, default: "coffee" },
        inStock: { type: Boolean, default: true },
        imageUrl: { type: String, trim: true }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
