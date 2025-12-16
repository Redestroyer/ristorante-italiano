import { Request, Response, NextFunction } from "express";
import Logger from "../logger";

export interface AppError extends Error {
    status_code?: number
}

export default (err: AppError, req: Request, res: Response, next: NextFunction) => {
    Logger.error(err);
    res.status(err.status_code || 500).json({
        code: err.status_code || 500,
        message: err.message || "Internal Server Error (unspecified)"
    });
}
