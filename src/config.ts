import DotENV from "dotenv";

DotENV.config();

const Config = {
    port: Number(process.env["PORT"] || 3000),
    node_env: process.env["NODE_ENV"] || "development"
};
export default Config;
