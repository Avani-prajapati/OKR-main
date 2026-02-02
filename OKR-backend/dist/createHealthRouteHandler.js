"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHealthRouteHandler = createHealthRouteHandler;
const express_1 = __importDefault(require("express"));
function createHealthRouteHandler(healthController) {
    const router = express_1.default.Router();
    router.get("/", (req, res) => {
        healthController.handleHealthCheck(req, res);
    });
    return router;
}
