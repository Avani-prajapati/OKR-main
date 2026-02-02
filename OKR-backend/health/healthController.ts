import express from "express";
import { HealthService } from "./healthService";

export class HealthController {
    private healthService: HealthService;

    constructor(healthService: HealthService) {
        this.healthService = healthService;
    }

    handleHealthCheck(req: express.Request, res: express.Response) {
        return res.status(200).send(this.healthService.checkHealth());
    }
}