"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, req, res, next) => {
    console.error(err);
    res.status(err.status_code || 500).json({
        message: err.message || "Internal Server Error (unspecified)"
    });
};
