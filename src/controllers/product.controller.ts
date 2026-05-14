import { Request, Response } from "express";
import { ProductService } from "../services/product.service.js";
import { BaseController } from "./base.controller.js";
import { ObjectId } from "mongodb";

export class ProductController extends BaseController {

    async getAll(req: Request, res: Response) {
        try {
            const products = await ProductService.getAll();
            return this.ok(res, products, "Products fetched successfully");
        } catch (error) {
            return this.serverError(res, error);
        }
    }

    async getById(req: Request, res: Response) {
        const id = this.parseId(req.params.id);

        if (!id) {
            return this.badRequest(res, "Invalid Product ID");
        }

        try {
            const product = await ProductService.getById(id);

            if (!product) {
                return this.notFound(res, "Product not found");
            }

            return this.ok(res, product, "Product fetched successfully");
        } catch (error) {
            return this.serverError(res, error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const product = await ProductService.create(req.body);
            return this.created(res, product, "Product created successfully");
        } catch (error) {
            return this.handleError(res, error);
        }
    }

    async update(req: Request, res: Response) {
        const id = this.parseId(req.params.id);

        if (!id) {
            return this.badRequest(res, "Invalid product ID");
        }

        try {
            const result = await ProductService.update(id, req.body);
            return this.ok(res, result, "Product updated successfully");
        } catch (error) {
            return this.handleError(res, error);
        }
    }

    async delete(req: Request, res: Response) {
        const id = this.parseId(req.params.id);

        if (!id) {
            return this.badRequest(res, "Invalid product ID");
        }

        try {
            await ProductService.delete(id);
            return this.ok(res, null, "Product deleted successfully");
        } catch (error) {
            return this.handleError(res, error);
        }
    }

    private parseId(idParam: string | string[] | undefined): string | null {
        if (typeof idParam !== "string") return null;
        if (!ObjectId.isValid(idParam)) return null;
        return idParam;
    }

    private handleError(res: Response, error: any) {

        // MongoDB duplicate key error
        if (error?.code === 11000) {
            return this.conflict(res, "Duplicate key error");
        }

        if (error instanceof Error) {
            return this.badRequest(res, error.message);
        }

        return this.serverError(res, error);
    }
}
