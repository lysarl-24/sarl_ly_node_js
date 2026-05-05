import { createCategory, getCategoryById } from "../controllers/categories.controller.js";
import { CategoryModel} from "../models/categories.model.js";

export const CategoryService = {
    getAllCategories() {
        return CategoriesModel.findAll();
    },
    getCategoryById(id) {
        return CategoryModel.findById(id);
    },

    createCategory(payload) {
            if (!payload?.name) {
                return { error: "name is required" };
            }
    
            return CategoryModel.create({
                name: payload.name
            });
        },

};