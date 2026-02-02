"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
class HealthController {
    constructor(healthService) {
        this.healthService = healthService;
    }
    handleHealthCheck(req, res) {
        return res.status(200).send(this.healthService.checkHealth());
    }
}
exports.HealthController = HealthController;
