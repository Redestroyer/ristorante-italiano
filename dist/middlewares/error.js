"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, req, res, next) => {
    console.error(err);
    res.status(err.status_code || 500).json({
        code: err.status_code || 500,
        message: err.message || "Internal Server Error (unspecified)"
    });
};
