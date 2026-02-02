"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const healthController_1 = require("./health/healthController");
const healthService_1 = require("./health/healthService");
const createOkrRouteHandler_1 = require("./okr/createOkrRouteHandler");
const createHealthRouteHandler_1 = require("./health/createHealthRouteHandler");
const okrController_1 = require("./okr/okrController");
const okrService_1 = require("./okr/okrService");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
const okrService = new okrService_1.OkrService();
const okrController = new okrController_1.OkrController(okrService);
app.use('/okrs', (0, createOkrRouteHandler_1.createOkrRouteHandler)(okrController));
const healthService = new healthService_1.HealthService();
const healthController = new healthController_1.HealthController(healthService);
app.use('/health', (0, createHealthRouteHandler_1.createHealthRouteHandler)(healthController));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
