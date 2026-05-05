import { ProductService } from "../services/product.service.js";

export const getAllProducts = (req, res) => {
    const products = ProductService.getAllProducts();
    // return res.status(200).json(products);
    return res.status(200).json({message: "Product created"});
};

export const getProductById = (req, res) => {
    const id = Number(req.params.id);
    const product = ProductService.getProductById(id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
};

export const createProduct = (req, res) => {
    const result = ProductService.createProduct(req.body);

    if (result.error) {
        return res.status(400).json({ message: result.error });
    }

    return res.status(201).json(result);
};

export const updateProduct = (req, res) => {
    const id = Number(req.params.id);
    const result = ProductService.updateProduct(id, req.body);

    if (result?.error) {
        return res.status(400).json({ message: result.error });
    }

    if (!result) {
        return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(result);
};

export const deleteProduct = (req, res) => {
    const id = Number(req.params.id);
    const isDeleted = ProductService.deleteProduct(id);

    if (!isDeleted) {
        return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });
};
