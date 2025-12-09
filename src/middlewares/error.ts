import { Request, Response, NextFunction } from "express";

export interface AppError extends Error {
    status_code?: number
}

export default (err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(err.status_code || 500).json({
        message: err.message || "Internal Server Error (unspecified)"
    });
}
