"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOkrRouteHandler = createOkrRouteHandler;
const express_1 = __importDefault(require("express"));
function createOkrRouteHandler(okrController) {
    const router = express_1.default.Router();
    router.get("/", (req, res) => {
        okrController.handleOkrGet(req, res);
    });
    return router;
}
