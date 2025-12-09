import DotENV from "dotenv";

DotENV.config();

export default {
    port: Number(process.env["PORT"] || 3000),
    node_env: process.env["NODE_ENV"] || "development"
};
