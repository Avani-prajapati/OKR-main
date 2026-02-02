import {HealthController} from "./healthController";
import express from "express";

export function createHealthRouteHandler(healthController: HealthController) {
    const router = express.Router();
    router.get("/", (req, res) => {
        healthController.handleHealthCheck(req, res);
    });
    return router;
}