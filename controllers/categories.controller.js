import { CategoryService } from "../services/categories.service.js";

// Get all Categories
export const getAllCategories = (req, res) => {
    const categories = CategoryService.getAllCategories();
    return res.status(200).json({message: "Get all categories."});
};

// Get category by ID
export const getCategoryById = (req, res) => {
    const id = Number(req.params.id);
    const category = CategoryService.getCategoryById(id);

    if (!category) {
        return res.status(404).json({message: "Category not found" });
    }

    return res.status(200).json(category);
};

// Create category
export const createCategory = (req, res) => {
    const result = CategoryService.createCategory(req.body);

    if (result.error) {
        return res.status(400).json({message: "Result error"});
    }

    return res.status(201).json({message: "Category create successfully..."});
};