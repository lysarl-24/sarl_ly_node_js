import { Response } from "express";

export class BaseController {
    // Response Error
    protected error(res: Response, status: number, message: string) {
        return res.status(status).json({
            success: false,
            message
        });
    }

    // Response OK
    protected ok(res: Response, data: unknown, message = "Success") {
        return res.status(200).json({
            success: true,
            message, 
            data
        });
    }

    // Response Created
    protected created(res: Response, data: unknown, message = "Created") {
        return res.status(201).json({
            success: true,
            message,
            data
        });
    }

    // Respone Bad Request
    protected badRequest(res: Response, message = "Bad Request", data: unknown = null) {
        return res.status(400).json({
            success: false,
            message,
            data
        });
    }

    // Response Not Found
    protected notFound(res: Response, message = "Not found") {
        return this.error(res, 404, message);
    }

    // Conflict
    protected conflict(res: Response, message = "Conflict") {
        return this.error(res, 409, message);
    }

    // Server Error
    protected serverError(res: Response, error: unknown) {
        const message = error instanceof Error ? error.message : "Internal Server Error";

        return res.status(500).json({
            success: false,
            message
        });
    }
}
